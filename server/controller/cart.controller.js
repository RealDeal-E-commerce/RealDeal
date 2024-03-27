
const db = require('../db/index');

// Create
const createCart = async (req, res) => {
    try {
        const Cart = new db.Cart(req.body);
        await Cart.save();
        res.status(201).json(Cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read
const getCart = async (req, res) => {
    try {
        const id = req.params.id;
        await db.Cart.findAll({ where: { userId: id } }).then((cart) => {
            if (cart) {
                res.json(cart);
            } else {
                res.status(404).json({ error: 'Cart not found' });
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  

 

// Update
const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const Cart = await db.Cart.update(body, {
            where: {
              id:id
            }
          })
        res.json(Cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a Cart
const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        await db.Cart.destroy({
            where: {
              id: id
            }})
        res.json({ message: 'Cart deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAllCarts = async (req, res) => {
    try {
        const { userId } = req.params;
        await db.Cart.destroy({
            where: { userId },
           
        });
        res.json({ message: 'Carts deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCart,
    getCart,
    updateCart,
    deleteCart,
    deleteAllCarts,
};


