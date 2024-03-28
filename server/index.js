const express = require("express");
// const ProductRoutes = require('./routes/product')
require('./database/index')

const productRoutes=require("./routes/products.routes")







const app = express();
const PORT = process.env.PORT || 3000

// app.use('/api/product', ProductRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/product", productRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
