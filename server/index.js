const express = require("express");
const productRoutes=require("./routes/products.routes")
const exploreRoutes=require("./routes/explore.routes")
const allnftRoutes=require("./routes/allnft.routes")
const paymentRoutes=require("./routes/payment.routes")





// const db = require('./database');


const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/product", productRoutes);
app.use("/api/explore", exploreRoutes);
app.use("/api/allnft", allnftRoutes);
app.use("/api/payment", paymentRoutes);




app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
