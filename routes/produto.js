const express = require('express')
const Produto = require('../models/Produto')
const bodyParser = require('body-parser')
const router = express.Router()

//Rota de Acesso a listagem
router.get('/list', (req, res) => {
    Produto.findAll({ order: [['id', 'DESC']] }).then((produto) => {
        res.render('produto/list', { produto: produto })
    })
})
//Rota de Acesso do formulario de Cadastro
router.get('/add', (req, res) => {
    res.render('produto/add')
})
//Rota de Inserção do dados no Banco de dados
router.post('/insert', (req, res) => {
    Produto.create({
        descricao: req.body.descricao,
        dataValidade: req.body.dataValidade,
        localColeta: req.body.localColeta,
        statusProduto: req.body.statusProduto
    }).then(() => {
        req.flash('success_msg', 'Produto Cadastrado com Sucesso.')
        res.redirect('/produto/list')
    }).catch((erro) => {
        req.flash('error_msg','Erro ao cadastar, tente novamente')
        res.redirect('/produto/list')
    })
})
//Rota de Acesso ao formulario de edição
router.get('/edit/:id', (req, res) => {
    Produto.findOne({ where: { id: req.params.id } }).then((produto) => {
        res.render('produto/edit', {produto: produto})
    }).catch()
})
//Rota de Atualização do dados no Banco de Dados
router.post('/update', (req, res) => {
    Produto.findOne({where:{id: req.body.id}}).then((produto) => {
        produto.descricao = req.body.descricao,
        produto.dataValidade = req.body.dataValidade,
        produto.localColeta = req.body.localColeta,
        produto.statusProduto = req.body.statusProduto,
        produto.save().then(() => {
            req.flash('success_msg', 'Registro Atualizado com Sucesso.')
            res.redirect('/produto/list')
        }).catch((erro) => {
            req.flash('error_msg', 'Erro ao Atualizar o Registro, tente novamente')
            res.redirect('/produto/list',)
        })
    })
})
//Rota de Exclusão de dados no Banco de Dados
router.get('/deletar/:id', (req, res) => {
    Produto.destroy({where:{id: req.params.id}}).then(() => {
        req.flash('success_msg', 'Registro excluido com sucesso')
        res.redirect('/produto/list')
    }).catch((erro) => {
        req.flash('erro_msg', 'Erro ao Excluir o Registro, tente novamente')
        res.redirect('/produto/list')
    })
})
module.exports = router
