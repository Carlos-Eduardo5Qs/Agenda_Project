const express = require('express');
const router = express.Router();

const validateDate = require('./src/middlewares/validadeDate');

const formularyLogin = require('./src/controllers/formularyLogin');
const authenticate = require('./src/controllers/authenticate');


router.get('/',formularyLogin.formularyLogin);

router.post('/login',validateDate,authenticate.authenticate);

module.exports = router;