const express = require("express");
// const ProductRoutes = require('./routes/product')
require('./database/index')
const cors =require('cors');
const showsRoutes=require("./routes/shows.routes")
const postRoutes=require("./routes/post")
const UserRoute=require('./routes/user.routes')
const exploreRoutes=require("./routes/explore.routes")
const allnftRoutes=require("./routes/allnft.routes")
const paymentRoutes=require('./routes/payment.routes')



const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000
const http = require('http');
const server = http.createServer(app);


 const WebSocket = require('ws');

const wss = new WebSocket.Server({ server })

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    })
  })
})
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors());
app.use("/api/shows", showsRoutes);
app.use('/api/post', postRoutes);
app.use('/api/user', UserRoute);
app.use("/api/explore", exploreRoutes);
app.use("/api/allnft", allnftRoutes);
app.use("/api/payment", paymentRoutes);

server.listen(PORT, function () {
  console.log("listening on port 3000!");
});
