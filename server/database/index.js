//MPZMLG3DZYE2GWHQY3PTUSXC
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('db', 'root', 'Yh1010100', {
    host: 'localhost',
    dialect: 'mysql',
});


sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((error) => {
        console.error('Unable to connect to the database: ', error)
    })


const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
        type: DataTypes.ENUM('client','fashionDesigner','admin'),
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
});



const Product = sequelize.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
  
    color: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.ENUM('Clothing', 'Art', 'Fashion'),
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fashionDesigner: {
        type: DataTypes.STRING,
        allowNull: true
    }
})
const Cart = sequelize.define('cart', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});
const Conversation = sequelize.define('conversation', {
    // You can add additional properties here, such as timestamps or conversation metadata
});


const Message = sequelize.define('message', {
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
});

User.belongsToMany(User, { as: 'participants', through: Conversation });
Conversation.belongsToMany(User, { as: 'participants', through: 'ConversationParticipants' });
Conversation.hasMany(Message);
Message.belongsTo(Conversation);
Message.belongsTo(User, { as: 'sender' });
User.hasMany(Message);
User.hasMany(Product);
Product.belongsTo(User);
User.hasOne(Cart);
Cart.belongsTo(User);


// sequelize.sync({ force: true })
//     .then(() => {
//         console.log('Models synced with the database.')
//     })
//     .catch((error) => {
//         console.error('Unable to sync models with the database: ', error)
//     });
 


module.exports.Product=Product;
module.exports.User=User;
module.exports.Cart=Cart;
module.exports.sequelize=sequelize;
module.exports.Conversation=Conversation
module.exports.Message=Message
