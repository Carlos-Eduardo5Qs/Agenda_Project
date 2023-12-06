const registerAccount = require('../services/registerAccountService');

exports.formulary = (req, res) => {
    const formData = req.session.formData || {};
    delete req.session.formData;
    res.render('formularyRegister', { formData });
};

exports.createAccount = async (req, res) => {
    const body = req.body;
    await registerAccount(body);
    res.redirect('/register');
};