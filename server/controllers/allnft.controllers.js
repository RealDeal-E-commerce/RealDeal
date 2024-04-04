const db = require('../database/index.js')
const axios = require('axios')


module.exports = { 

    selectAll :async function(req,res){
        try {
          const {status, genre} = req.query;
          const whereClause = {};
          if (status) {
            whereClause.status = status;
          }
          if (genre) {
            whereClause.genre = genre;
          }
      
          const allnft= await db.Allnft.findAll({where: whereClause})
          res.status(200).send(allnft)
        } catch (error) {
          throw error
        }
      },  
selectOne: async function(req, res) {
    try {
        const allnft = await db.Allnft.findOne({ where: { UncommenRare: req.params.UncommenRare } })
            res.status(200).json(allnft);
    
    } catch (error) {
        throw (error)
    }

    },
addOne:async function(req,res){
    try {
        const allnft = await db.Allnft.create(req.body)
    
    res.status(201).send(allnft)
    } catch (error) {
        throw error
    }
    },
deleteOne:async (req, res) => {
    try {
    const allnft = await db.Allnft.destroy({
        where: { id: req.params.id },
    })

    res.json(allnft);
    } catch (error) {
    throw error
    }
    },
UpdateOne :async (req, res) => {
    try {
    const allnft = await db.Allnft.update(req.body, {
        where: { id: req.params.id },
    })

    res.status(201).send(allnft)
    } catch (error) {
    throw error

} 

  }
}