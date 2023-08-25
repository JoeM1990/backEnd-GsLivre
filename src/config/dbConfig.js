module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'monkila1234',
    DB: 'genieData',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}