
const express = require('express');
const router = express.Router();
const {register,login,UpdateS} = require('../controllers/auth');

router.put('/:id', UpdateS);
router.post('/postuser', login);
router.post('/register', register);


module.exports = router;
