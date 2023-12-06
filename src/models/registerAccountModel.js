const database = require('../config/database');

const registerAccount = async (body) => {
    try {
        console.log(body);
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = registerAccount;

