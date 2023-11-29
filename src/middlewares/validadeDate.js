const validateDate = (req, res, next) => {
    const body = req.body;
    if (!body.email || !body.password) {
            res.locals.messages = req.flash('error','Email ou Senha inválidos');
            return res.redirect('/');
    } else {
        next();
    };
};

module.exports = validateDate;