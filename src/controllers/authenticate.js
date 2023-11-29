exports.authenticate = (req, res) => {
    const body = req.body;
    console.log(body);
    res.redirect('/');
};