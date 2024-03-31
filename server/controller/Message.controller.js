const { User, Message, Conversation } = require('../database/index');

async function startConversation(participantIds) {
    const conversation = await Conversation.create();
    await conversation.addParticipants(participantIds);
    return conversation;
}

async function sendMessage(conversationId, senderId, content) {
    const message = await Message.create({
        senderId,
        conversationId,
        content,
    });
    return message;
}

async function getMessages(conversationId) {
    const messages = await Message.findAll({
        where: { conversationId },
        include: [{ model: User, as: 'sender', attributes: ['id', 'name'] }],
        order: [['createdAt', 'ASC']],
    });
    return messages;
}

module.exports = { startConversation, sendMessage, getMessages };
