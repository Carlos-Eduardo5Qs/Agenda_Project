const createAccount = require ('../models/registerAccountModel');

const registerAccount = async (user) => {
    try {
      createAccount(user);
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = registerAccount;