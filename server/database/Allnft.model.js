const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
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
  return allnft
}