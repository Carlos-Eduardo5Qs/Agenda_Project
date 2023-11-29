const database = require('../config/database');

const searshUser = async (body) => {
    try {
        console.log(body);
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = searshUser;

