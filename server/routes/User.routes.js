
const express = require('express');
const router = express.Router();
const {register,login} = require('../controller/auth');


router.post('/', login);
router.post('/register', register);


module.exports = router;