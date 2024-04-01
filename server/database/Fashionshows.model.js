const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const porducts = sequelize.define('prod', {
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
  return porducts
}