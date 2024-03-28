const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('commerce', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql',
});

// connection check :
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((error) => {
        console.error('Unable to connect to the database: ', error)
    })

// Define the User model
const User = sequelize.define('user', {
    FirstName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    LastName:{
        type:DataTypes.STRING,
        
        allowNull: false
    },
    Email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    Password:{
        type:DataTypes.STRING,
       
        allowNull: false
    },
    Role: {
        type: DataTypes.ENUM('Client', 'Fashion designer'),
        allowNull: false
    },
    PicturePath:{
        type:DataTypes.STRING,
        defaultValue:"",
    },
    Followe:{
        type:DataTypes.JSON,
        defaultValue:[],
    },
    Date:{
        type:DataTypes.JSON,
        defaultValue:[],
    },
});

const Post=sequelize.define('post',{

        FirstName:DataTypes.STRING,
            
        LastName:DataTypes.STRING,
        description:DataTypes.STRING,
        picturePath:DataTypes.STRING,
        userpicturePath:DataTypes.STRING,
        likes:{
           type:Map,
           of:Boolean
        },
        comment:{
            type:DataTypes.JSON,
            defaultValue:[]
        }
    
})
// Define the Product model
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
    sizes: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('men', 'women', 'kids'),
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
    
});


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
const Admin = sequelize.define('admin', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
});

// Establish the association between User and Product

User.hasOne(Cart);
Cart.belongsTo(User);
User.hasMany(Post);
Post.belongsTo(User);
Admin.hasMany(Post);
Post.belongsTo(Admin);

// Sync the models with the database
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
module.exports.Post=Post;
module.exports.Admin=Admin;

