//Conexão com banco de dados
const Sequelize = require('sequelize');
const sequelize = new Sequelize('donateapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}