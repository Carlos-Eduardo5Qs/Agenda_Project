const validator = require('validator');

const validateEmail = (email) => {
    return validator.isEmail(body.email);
};

const validatePassword = (password) => {
    return validator.isLength(password, { min: 10 }) && validator.isStrongPassword(password);
};

const validateData = (req, res, next) => {
    const body = req.body;
    const missingFields = [];

    if (!body.name) missingFields.push('Nome');
    if (!body.surname) missingFields.push('Sobrenome');
    if (!body.email) missingFields.push('Email');
    if (!body.birth) missingFields.push('Nascimento');
    if (!body.password) missingFields.push('Senha');
    if (!body.confirmPassword) missingFields.push('Campo para confirmar a senha');

    if (missingFields.length > 0) {
        const missingFieldsMessage = `Os seguintes campos devem ser preenchidos: ${missingFields.length === 1
            ? missingFields[0]
            : `${missingFields.slice(0, -1).join(', ')}${missingFields.length > 2 ? '' : ''} e ${missingFields[missingFields.length - 1]}`
            }`;
        res.locals.messages = req.flash('error', missingFieldsMessage);
        req.session.formData = body;
        return res.redirect('/register');
    }

    if (!validateEmail(body.email)) {
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