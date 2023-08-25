module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titre: {
        type: DataTypes.TEXT,
      },
      auteur: {
        type: DataTypes.TEXT, 
      },
      
    }
    )
    return User
  }
  