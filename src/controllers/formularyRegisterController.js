const registerAccount = require('../services/registerAccountService');

exports.formulary = (req, res) => {
    res.render('formularyRegister');
};

exports.createAccount = (req, res) => {
    const body = req.body;
    registerAccount(body);
    res.redirect('/register');
};