const createAccount = require ('../models/registerAccountModel');

const registerAccount = async (user) => {
    try {
      if (!user.name) {
        const message = (`O campo ${user.name} precisa ser preenchido`);
        return message;
      }
      createAccount(user);
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = registerAccount;