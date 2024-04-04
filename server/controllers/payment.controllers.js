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
        const allnft = await db.Allnft.findOne({ where: { id: req.params.id } })
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
},
add: async function(req, res) {
    const url = "https://developers.flouci.com/api/generate_payment"
    const payload = {
      "app_token": "50e694b9-7593-4cd3-a07f-f9e3719eb546",
      "app_secret": "e7b59e0c-a252-457f-a02e-31bd2b2b0db7",
      "amount": req.body.amount,
      "accept_card": true,
      "session_timeout_secs": 1200,
      "success_link": "http://localhost:3000/success",
      "fail_link": "http://localhost:3000/fail", 
      "developer_tracking_id": "cfeeb12a-1f2b-4365-afb4-00d7ef3fc81d"
    };

    try {
      const result = await axios.post(url, payload); 
      res.send(result.data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  },
  verify: async function(req, res) {
    try {
      const result = await axios.get(`https://developers.flouci.com/api/verify_payment/${req.params.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'apppublic': '50e694b9-7593-4cd3-a07f-f9e3719eb546',
          'appsecret': 'e7b59e0c-a252-457f-a02e-31bd2b2b0db7'
        }
      });
      res.send(result.data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
  }
}