const authService = require('../services/authService');

exports.formulary = (req, res) => {
    res.render('formularyLogin');
};

exports.logInto = (req, res) => {
    const body = req.body;
    authService(body);
    res.redirect('/');
};