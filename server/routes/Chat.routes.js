const express = require('express');
const router = express.Router();
const messageController = require('../controller/Message.controller');


router.post('/messages', messageController.sendMessage);
router.get('/messages/:conversationId', messageController.fetchMessages);

module.exports = router;
