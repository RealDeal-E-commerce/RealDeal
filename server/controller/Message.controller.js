const { Message, Conversation } = require('../database/index');


async function sendMessage(req, res) {
  try {
    const { senderId, recipientId, content } = req.body;

    
    let conversation = await Conversation.findOrCreate({
      where: {
        userId: senderId,
        sellerId: recipientId
      }
    });

    // Create the message
    const message = await Message.create({
      content,
      userId: senderId,
      conversationId: conversation.id
    });


    res.status(201).json({ message });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


async function fetchMessages(req, res) {
  try {
    const conversationId = req.params.conversationId;

    const messages = await Message.findAll({
      where: { conversationId },
      include: ['sender'] 
    });

    res.json({ messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  sendMessage,
  fetchMessages
};
