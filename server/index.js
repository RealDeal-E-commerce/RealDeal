const express = require("express");

let app = express();
const cors=require('cors')
require ("./database/index.js")
const UserRoute = require('./routes/User.routes.js')
const {Server} = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const cartRoutes=require("./routes/Cart.routes.js")
const ProductRoutes=require("./routes/Product.routes.js")
// const chatRoutes=require("./routes/chat.routes.js")
// const Twilio = require('twilio');
// const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');
// cloudinary.config({ 
//   cloud_name: 'dnirskhlb', 
//   api_key: '923833964889333', 
//   api_secret: 'w5jbvyj66Jt-pJu09V-NuZp5iS0' 
// });
const { startConversation, sendMessage, getMessages } = require('./controller/Message.controller');
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3050", // Adjust to your client's origin
    methods: ["GET", "POST"]
  }
});
// Route to start a conversation
app.post('/chat/conversations', async (req, res) => {
    try {
        const { participantIds } = req.body;
        const conversation = await startConversation(participantIds);
        res.status(201).json(conversation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to send a message
app.post('/chat/messages', async (req, res) => {
    try {
        const { conversationId, senderId, content } = req.body;
        const message = await sendMessage(conversationId, senderId, content);
        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to get messages from a conversation
app.get('/chat/conversations/:id/messages', async (req, res) => {
    try {
        const { id: conversationId } = req.params;
        const messages = await getMessages(conversationId);
        res.json(messages);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.use(fileUpload());
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors())
app.use('/api/user', UserRoute);
app.use('/api/product', ProductRoutes);
app.use('/api/cart', cartRoutes);
// app.use('/api/messages',chatRoutes)
let port = 3000;
 
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
