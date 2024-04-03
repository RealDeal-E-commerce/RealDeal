const express = require("express");
const Routes = require('./routes/profileRoutes')
var cors = require('cors')
 
require('./database/index');


const app = express();
const PORT = process.env.PORT || 3001 

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/fashion ",Routes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
