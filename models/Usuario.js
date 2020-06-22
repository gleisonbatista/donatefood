const db = require('./db');

const Usuario = db.sequelize.define(('usuario') , {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    },
    tipoUsuario: {
        //type: db.Sequelize.ENUM('S','E')
        type: db.Sequelize.STRING
    },
});
//Usuario.sync({force: true})

module.exports = Usuario