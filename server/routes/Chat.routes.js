const express = require('express');
const router = express.Router();
const messageController = require('../controller/Message.controller');


router.post('/', messageController.sendMessage);
router.get('/', messageController.fetchMessages);

module.exports = router;
