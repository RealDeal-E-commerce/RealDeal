const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');


// Create a new Sequelize instance
const sequelize = new Sequelize('blogs', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql',


});

async function connectionTest (){     
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    }
    connectionTest()

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
        type: DataTypes.TEXT,
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
const Post = sequelize.define('post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
   
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
const allnft = sequelize.define('nft', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    UncommenRare: {
        type: DataTypes.INTEGER,
        allowNull :false,
    },
    price: {
            type: DataTypes.INTEGER,
            
          },
      
      imgUrl: {
        type: DataTypes.STRING,
        allowNull :false
      },
      genre: {
      type: DataTypes.STRING,
      
    },
    status: {
        type: DataTypes.STRING,
        
      },
      comingSoon: {
        type: DataTypes.STRING,
        
      },
  });
  
  const explore = sequelize.define('exp', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    imgP: {
        type: DataTypes.STRING,
        allowNull :false,
    },
    name: {
            type: DataTypes.STRING,
            
          },
      
      imgB: {
        type: DataTypes.STRING,
        allowNull :false
      },
    description: {
      type: DataTypes.STRING,
      
    },
  });

  const shows = sequelize.define('shows', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    showing: {
      type: DataTypes.STRING,
      
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull :false
    },
  });


User.belongsToMany(User, { as: 'participants', through: Conversation });
Conversation.hasMany(Message);
Message.belongsTo(Conversation);
Message.belongsTo(User);
User.hasMany(Product);
Product.belongsTo(User);
User.hasOne(Cart);
Cart.belongsTo(User);
User.hasMany(Post);
Post.belongsTo(User);


// sequelize.sync({ force: true })

 



//   const db={}

// db.Products=require('./Fashionshows.model')(connection,DataTypes)


// sequelize.sync({force:true}) 


module.exports.Product=Product;
module.exports.User=User;
module.exports.Cart=Cart;
module.exports.sequelize=sequelize;
module.exports.Conversation=Conversation
module.exports.Message=Message
module.exports.Post=Post
module.exports.Allnft=allnft
module.exports.explore=explore
module.exports.shows=shows



