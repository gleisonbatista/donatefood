const db = require('./db')
//const usuario = require('./Usuario')
//const produto = require('./Produto')

const Entrega = db.sequelize.define(('entrega'), {
    dataEntrega: {
        type: db.Sequelize.STRING
    },
    statusEntrega: {
        type: db.Sequelize.STRING
    },
    produtoId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Produto',
          key: 'id'
        }
    },
    usuarioId: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Usuario',
          key: 'id'
        }  
    },
})

//Entrega.sync({force: true})

module.exports = Entrega