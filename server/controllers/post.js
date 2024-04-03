const db = require('../database/index')



module.exports = { 

getAll :async function(req,res){
    try {
        const post= await db.Post.findAll({order: [ ['createdAt', 'DESC'] ]})
         res.status(200).send(post)
        
    } catch (error) {
        throw error
        
    }

    },   

addPost:async function(req,res){
    try {
        
        const post = await db.Post.create(req.body)
        res.status(201).json(post)
    } catch (error) {
        throw error
    }
    },
deleteOne:async (req, res) => {
    try {
    const post = await db.Post.destroy({
        where: { id: req.params.id },
    })

    res.json(post);
    } catch (error) {
    throw error
    }
    },

}
