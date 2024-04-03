const { Comment } = require('../database/index');
const { Post } = require('../database/index');
const { User } = require('../database/index');


module.exports = {
    createComment: async (req, res) => {
        const postId = req.params.postId;
        const { content, userId } = req.body;

        try {
            
            const postExists = await Post.findByPk(postId);
            if (!postExists) {
                return res.status(404).json({ message: 'Post with this ID does not exist' });
            }

         const userExists = await User.findByPk(userId);
            if (!userExists) {
                return res.status(404).json({ message: 'User with this ID does not exist' });
            }

          const createdComment = await Comment.create({
                postId: postId,
                content: content,
                userId: userId
              })

            res.status(201).json(createdComment);
        }  catch (error) {
            console.error('Error creating comment:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },


    getAllComments: async (req, res) => {

        const postId = req.params.postId;

         try {
           
            const postExists = await Post.findByPk(postId);
             if (!postExists) {
                 return res.status(404).json({ message: 'Post with this ID does not exist' });
             }

           
            const comments = await Comment.findAll({ where: { postId: postId } });
               res.json(comments);
        } catch (error) {
            console.error('error fetching comments:', error);
            res.status(500).json({ message: 'error happend' });
        }
    },

    updateComment: async (req, res) => {
        const commentId = req.params.commentId;
        const { content } = req.body;

        try {
            
            const comment = await Comment.findByPk(commentId);
            if (!comment) {
                return res.status(404).json({ message: 'Comment with this ID does not exist' });
            }comment.content = content;
            await comment.save();

        res.json(comment);
        } catch (error) {
            console.error('error updating comment:', error);
            res.status(500).json({ message: 'update error' });
        }
    },

    deleteComment: async (req, res) => {
        const commentId = req.params.commentId;

        try {
            // Check if the comment exists
            const comment = await Comment.findByPk(commentId);
            if (!comment) {
                return res.status(404).json({ message: 'Comment not found' });
            }

            // Delete the comment
            await comment.destroy();

            res.json({ message: 'Comment deleted successfully' });
        } catch (error) {
            console.error('Error deleting comment:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
};
