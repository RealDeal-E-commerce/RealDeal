const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');

const connection = new Sequelize('ecommerce', 'root', 'Baha1998@', {
  host: 'localhost',
  dialect:'mysql'
});


async function connectionTest (){     
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  }
  connectionTest()

  const db={}

db.Products=require('./Fashionshows.model')(connection,DataTypes)
db.Explore=require('./Explore.model')(connection,DataTypes)
db.Allnft=require('./allnft.model')(connection,DataTypes)

 //connection.sync({force:true}) 


module.exports = db;