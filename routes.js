const express = require('express');
const router = express.Router();

const pageLogin = require('./src/controllers/login');
const login = require('./src/controllers/login');

router.get('/', pageLogin.formularyLogin);

router.post('/login',login.login)

module.exports = router;