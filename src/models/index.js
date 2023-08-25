const dbConfig =  require ('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate().then(() => {
    console.log ('Connection Bd effectue')
}).catch(err => {
    console.log('Erreur de connection Bd'+err)
})

const db= {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.livre = require('./livre.js')(sequelize, DataTypes)


db.sequelize.sync({ force: false }).then(() => {
    console.log('Synchronisation reussie')
})

module.exports = db