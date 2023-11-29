require('dotenv').config();

const express = require('express');
const app = express();
const isPortAvailable = require('is-port-available');

const setupServer = require('./src/config/setupServer');
const database = require('./src/config/database');

const checkEnvironmentVariables = () => {
    const environmentVariables = {
        port: process.env.LOCALHOST_PORT,
        database_host: process.env.DATABASE_HOST,
        database_user: process.env.DATABASE_USER,
        database_password: process.env.DATABASE_PASSWORD,
        database_name: process.env.DATABASE_NAME,
    };
    for (const variables in environmentVariables) {
        if (!environmentVariables[variables]) {
            throw new Error(`Fatal Error: ${variables} environment variable is mandatory!`);
        };
    };
};

const checkConnectionDatabase = async () => {
    try {
        const connection = await database.getConnection();
        console.log('successfull connection to the database.');
        connection.release();
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    };
};
 
const startServer = (async () => {
    try {
        checkEnvironmentVariables();
        const checkPort = await isPortAvailable(process.env.LOCALHOST_PORT);
        if (!checkPort) {
            throw new Error(`Port ${process.env.LOCALHOST_PORT} is not available!`);
        } else {
            const database = await checkConnectionDatabase();
            if (!database) {
                throw new Error('Fatal Error: Error connecting to database!');
            } else {
                setupServer(app);
                app.listen(process.env.LOCALHOST_PORT, () => {
                    setTimeout(() => {
                        console.log(`Server initializing...`);
                    },1000); 
                    setTimeout(() => {
                        console.log(`access: http://localhost:${process.env.LOCALHOST_PORT}/`);
                    },2000);
                });
            };
        };
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }; 
})();