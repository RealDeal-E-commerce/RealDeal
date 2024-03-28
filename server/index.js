const express = require("express");

let app = express();
const cors=require('cors')
require ("./database/index.js")
const UserRoute = require('./routes/User.routes.js')
const socketIo = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const cartRoutes=require("./routes/Cart.routes.js")
const ProductRoutes=require("./routes/Product.routes.js")
const chatRoutes=require("./routes/chat.routes.js")
const io = socketIo(server);
// const Twilio = require('twilio');
// const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');
// cloudinary.config({ 
//   cloud_name: 'dnirskhlb', 
//   api_key: '923833964889333', 
//   api_secret: 'w5jbvyj66Jt-pJu09V-NuZp5iS0' 
// });
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  // Handle message events
  socket.on('sendMessage', (message) => {
    // Broadcast the message to all connected clients
    io.emit('receiveMessage', message);
  });
});
app.use(fileUpload());
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors())
app.use('/api/user', UserRoute);
app.use('/api/product', ProductRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/messages',chatRoutes)
let port = 3000;
 
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
