const express = require('express');
const router = express.Router();

const validateDate = require('./src/middlewares/validadeDate');

const login = require('./src/controllers/formularyLogin');

router.get('/',login.formulary);
router.post('/login',validateDate,login.logInto);

module.exports = router;