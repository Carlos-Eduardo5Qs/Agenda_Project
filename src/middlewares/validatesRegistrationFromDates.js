const validateData = (req, res, next) => {
    const body = req.body;
    const missingFields = [];

    // Verificações existentes
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

    return next();
};

module.exports = validateData;