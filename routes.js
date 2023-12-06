const express = require('express');
const router = express.Router();

const home = require('./src/controllers/homeController');
const formularyCreateAccount = require('./src/controllers/formularyRegisterController');

router.get('/', home.homePage);
router.get('/register',formularyCreateAccount.formulary);
router.post('/createAccount',formularyCreateAccount.createAccount);

module.exports = router;