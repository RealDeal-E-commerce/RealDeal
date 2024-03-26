module.exports = (connection, DataTypes) => {
  const Profile = connection.define(
    "profile",
    {
      name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      age:{
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }
  );

  return Profile;
};
