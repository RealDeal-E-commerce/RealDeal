const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');


// Create a new Sequelize instance
const sequelize = new Sequelize('blogs', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql',


});



// Define the User model
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
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      }
});

User.belongsToMany(User, { as: 'participants', through: Conversation });
Conversation.hasMany(Message);
Message.belongsTo(Conversation);
Message.belongsTo(User);
User.hasMany(Product);
Product.belongsTo(User);
User.hasOne(Cart);
Cart.belongsTo(User);


// sequelize.sync({ force: true })

 

async function connectionTest (){     
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
  connectionTest()

//   const db={}

// db.Products=require('./Fashionshows.model')(connection,DataTypes)


// sequelize.sync({force:true}) 


module.exports.Product=Product;
module.exports.User=User;
module.exports.Cart=Cart;
module.exports.sequelize=sequelize;
module.exports.Conversation=Conversation
module.exports.Message=Message




