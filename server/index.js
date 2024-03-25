const express = require("express");
const Routes = require('./routes/item.routes')


// const db = require('./database');


const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/",Routes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
