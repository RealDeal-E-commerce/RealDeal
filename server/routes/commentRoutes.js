const express = require("express");
const router = express.Router();

const{createComment} = require("../controller/commentController");
router.post('/postId/createComment', createComment);

module.exports=router;