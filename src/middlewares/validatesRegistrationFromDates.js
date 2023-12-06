const validator = require('validator');

const validateData = (req, res, next) => {
    const body = req.body;
    const missingFields = [];

    if (!body.name) missingFields.push('Nome');
    if (!body.surname) missingFields.push('Sobrenome');
    if (!body.email) missingFields.push('Email');
    if (!body.birth) missingFields.push('Nascimento');
    if (!body.password) missingFields.push('Senha');
    if (!body.confirmPassword) missingFields.push('Confirme sua senha');

    if (missingFields.length > 0) {
        res.locals.messages = req.flash('error', `Os seguintes campos devem ser preenchidos: ${missingFields.join(', ')}`);
        req.session.formData = body;
        return res.redirect('/register');
    };

    const validateEmail = (email) => {
        return validator.isEmail(body.email);
    };

    const validatePassword = (password) => {
        return validator.isLength(password, { min:10 }) && validator.isStrongPassword(password);
    };

    if(!validateEmail(body.email)) {
        res.locals.messages = req.flash('error', 'email inválido');
        return res.redirect('/register');
    };

    if (!validatePassword(body.password)) {
        res.locals.messages = req.flash('error', 'Senha inválida');
        return res.redirect('/register');
    };

    return next();
};

module.exports = validateData;