module.exports = (sequelize, DataTypes) => {
    const Livre = sequelize.define('livres', {
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
    return Livre
  }
  