const searchUser = require ('../models/searchUser');

const authService = async (user) => {
    try {
        searchUser(user);
    } catch (error) {
        console.error(error.message);
    };
};

module.exports = authService;