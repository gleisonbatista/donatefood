const express = require('express')
const Usuario = require('../models/Usuario')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const router = express.Router()

//Rota de Acesso a listagem
router.get('/list', (req, res) => {
    Usuario.findAll({ order: [['id', 'DESC']] }).then((usuarios) => {
        res.render('usuario/list', { usuarios: usuarios })
    })
})
//Rota de Acesso do formulario de Cadastro
router.get('/add', (req, res) => {
    res.render('usuario/add')
})
//Rota de Inserção do dados no Banco de dados
router.post('/insert', (req, res) => {
    bcrypt.genSalt(10, (erro, salt) => {
        bcrypt.hash(req.body.nome, salt, (erro, hash) => {
            if (erro) {
                req.flash('error_msg', 'Houve um erro durante o salvamento do registro')
                res.redirect('/usuarios/add')
            } 
            Usuario.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: hash,
                tipoUsuario: req.body.tipoUsuario
            }).then(() => {
                req.flash('success_msg', 'Usuário Cadastrado com Sucesso.')
                res.redirect('/usuario/list')
            }).catch((erro) => {
                req.flash('error_msg','Erro ao cadastar, tente novamente')
                res.redirect('/usuario/list')
            })

        })
    })
    
})
//Rota de Acesso ao formulario de edição
router.get('/edit/:id', (req, res) => {
    Usuario.findOne({ where: { id: req.params.id } }).then((usuario) => {
        res.render('usuario/edit', {usuario: usuario})
    }).catch()
})
//Rota de Atualização do dados no Banco de Dados
router.post('/update', (req, res) => {
    Usuario.findOne({where:{id: req.body.id}}).then((usuario) => {
        usuario.nome = req.body.nome,
        usuario.email = req.body.email,
        usuario.tipoUsuario = req.body.tipoUsuario,
        usuario.save().then(() => {
            req.flash('success_msg', 'Registro Atualizado com Sucesso.')
            res.redirect('/usuario/list')
        }).catch((erro) => {
            req.flash('error_msg', 'Erro ao Atualizar o Registro, tente novamente')
            res.redirect('/usuario/list',)
        })
    })
})
//Rota de Exclusão de dados no Banco de Dados
router.get('/deletar/:id', (req, res) => {
    Usuario.destroy({where:{id: req.params.id}}).then(() => {
        req.flash('success_msg', 'Registro excluido com sucesso')
        res.redirect('/usuario/list')
    }).catch((erro) => {
        req.flash('erro_msg', 'Erro ao Excluir o Registro, tente novamente')
        res.redirect('/usuario/list')
    })
})
module.exports = router
