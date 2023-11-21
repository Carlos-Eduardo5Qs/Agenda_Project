exports.formularyLogin = (req, res) => {
    res.render('formulary_login');
};

exports.login = (req, res) => {
    const body = req.body;
    console.log(body);
    res.redirect('/');
};
