const db = require('../database/index')
const axios = require('axios')


module.exports = { 

selectAll :async function(req,res){
    try {
        const explore= await db.Explore.findAll({})
        res.status(200).send(explore)
        
    } catch (error) {
        throw error
        
    }

    },   
selectOne: async function(req, res) {
    try {
        const explore = await db.Explore.findOne({ where: { id: req.params.id } })
            res.status(200).json(explore);
    
    } catch (error) {
        throw (error)
    }

    },
addOne:async function(req,res){
    try {
        const explore = await db.Explore.create(req.body)
    
    res.status(201).send(explore)
    } catch (error) {
        throw error
    }
    },
deleteOne:async (req, res) => {
    try {
    const explore = await db.Explore.destroy({
        where: { id: req.params.id },
    })

    res.json(explore);
    } catch (error) {
    throw error
    }
    },
UpdateOne :async (req, res) => {
    try {
    const explore = await db.Explore.update(req.body, {
        where: { id: req.params.id },
    })

    res.status(201).send(explore)
    } catch (error) {
    throw error

} 
}
}
