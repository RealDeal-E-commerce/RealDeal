const express = require("express");
// const Routes = require('./routes/item.routes')
const cors = require("cors");

 
require('./database/index');


const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

// app.use("/api/",Routes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
