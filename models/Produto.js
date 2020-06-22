const db = require('./db')

const Produto = db.sequelize.define(('produto'), {
    descricao:{
        type: db.Sequelize.TEXT
    },
    dataValidade:{
        type: db.Sequelize.DATE
    },
    localColeta:{
        type: db.Sequelize.STRING
    },
    statusProduto:{
        type: db.Sequelize.STRING
    },

})

//Produto.sync({force: true})

module.exports = Produto