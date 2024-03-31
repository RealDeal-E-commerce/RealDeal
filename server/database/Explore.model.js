const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
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
  return explore
}