const { Sequelize } = require("sequelize");
const {host,user,database,password} = require("./config");
const connection = new Sequelize(database, user, password, {
  host: host,  
  dialect: "mysql",
});

async function testconnection() {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}


testconnection();

    // connection
    //     .sync({ alter: true })
    //     .then(() => {
    //       console.log("Profile table created successfully!");
    //     })
    //     .catch((error) => {
    //       console.error("Unable to create table : ", error);
    //     });

















// const db = {};

// db.Product = require("./products")(connection, DataTypes);
// db.Category = require("./category")(connection, DataTypes);

// db.Category.hasMany(db.Product);
// db.Product.belongsTo(db.Category);

// connection.sync({ force: true });

// module.exports = db;
