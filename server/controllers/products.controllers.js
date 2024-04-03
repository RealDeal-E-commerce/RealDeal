const db = require('../database/index')



module.exports = { 

selectAll :async function(req,res){
    try {
        const product= await db.Product.findAll({})
        res.status(200).send(product)
        
    } catch (error) {
        throw error
        
    }

    },   
selectOne: async function(req, res) {
    try {
        const product = await db.Product.findOne({ where: { id: req.params.id } })
            res.status(200).json(product);
    
    } catch (error) {
        throw (error)
    }

    },
addOne:async function(req,res){
    try {
        const product = await db.Product.create(req.body)
    
    res.status(201).send(product)
    } catch (error) {
        throw error
    }
    },
deleteOne:async (req, res) => {
    try {
    const product = await db.Product.destroy({
        where: { id: req.params.id },
    })

    res.json(product);
    } catch (error) {
    throw error
    }
    },
UpdateOne :async (req, res) => {
    try {
    const product = await db.Product.update(req.body, {
        where: { id: req.params.id },
    })

    res.status(201).send(product)
    } catch (error) {
    throw error

} 
},
searchProducts : async (req, res) => {
    try {
        const { search } = req.params;
        const products = await db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${search}%`
                }
            }
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
}
