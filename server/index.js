const express = require("express");
let app = express();
const cors=require('cors')
require ("./database/index.js")
const UserRoute = require('./routes/User.routes.js')
const cloudinary = require('cloudinary').v2;
const fileUpload = require('express-fileupload');
cloudinary.config({ 
  cloud_name: 'dnirskhlb', 
  api_key: '923833964889333', 
  api_secret: 'w5jbvyj66Jt-pJu09V-NuZp5iS0' 
});

app.use(fileUpload());
app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(cors())
app.use('/api/user', UserRoute);
// app.use('/api/product', ProductRoutes);
// app.use('/api/cart', cartRoutes);
app.post('/upload/image', async (req, res) => {
  try {
    const fileStr = req.files.file.data.toString('base64'); 
    const uploadResponse = await cloudinary.uploader.upload("data:image/jpeg;base64," + fileStr, { 
      upload_preset: 'ygjfen9u',
    });
    res.json({ imageUrl: uploadResponse.Url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
let port = 3000;


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
