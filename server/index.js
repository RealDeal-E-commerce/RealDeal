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
const io = socketIo(server);
// const Twilio = require('twilio');
// const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');
// cloudinary.config({ 
//   cloud_name: 'dnirskhlb', 
//   api_key: '923833964889333', 
//   api_secret: 'w5jbvyj66Jt-pJu09V-NuZp5iS0' 
// });
// const twilioClient = new Twilio('ACfe2e5341f69661b71a24d6545e492967', 'fbf08e47dd5ed23b79b71c0dd9a9cf66');
io.on('connection', (socket) => {
  console.log('A client has connected.');

  // Handle events such as 'message', 'disconnect', etc.
  socket.on('message', (data) => {
    console.log('Received message:', data);
    // Broadcast the message to all connected clients
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A client has disconnected.');
  })
})

app.use(fileUpload());
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors())
app.use('/api/user', UserRoute);
app.use('/api/product', ProductRoutes);
app.use('/api/cart', cartRoutes);

let port = 3000;
 
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
