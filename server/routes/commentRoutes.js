const express = require("express");
const router = express.Router();

const { createComment, getAllComments, updateComment, deleteComment } = require("../controllers/commentController");

router.post('/:postId/comment', createComment); 
router.get('/:postId/comment', getAllComments); 
router.delete('/comments/:commentId', deleteComment); 
router.put('/comments/:commentId', updateComment); 

module.exports = router;
