import Comment from '../database/index'

module.exports={
    createComment:async(req,res)=>{
        const id = req.params.postId;
        const {comment,firstname} = req.body;

        try{
            if(id){
                const createdComment = await Comment.create({
                    postId:id,
                    comment,
                    firstname:firstname ? username:'admin'
                });
                res.status(201).json(createdComment);
            }else{
                res.status(404).json({message:'Comment with this postId is not found'})
            }
        }catch(error){
            res.status(404).json({message:error})
        }
    },

    getAllComments:async(req,res)=>{
        const id = req.params.postId;
        try{
            if(id){
                const posts = await Comment.find({postId:id})
                res.json(posts)
            }
        }
        catch(error){
            res.status(401).json({message:'you have a problem'})
        }
    }
}