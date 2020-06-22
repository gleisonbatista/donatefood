const localStrategy = require('passport-strategy')
const bcrypt = require('bcryptjs')
const Usuario = require('../models/Usuario')
require('../models/Usuario')

module.exports = (passport) => {
    passport.use(new localStrategy({usernameFild: email}, (email, senha, done) => {
        Usuario.findOne({email: email}).then((usuario) => {
            if (!usuario) {
                return done(null, false, {message: 'ESta conta não existe'})
            }
            bcrypt.compare(senha, usuario.senha, (erro, senhaCorreta) => {
                if (senhaCorreta) {
                    return done(null, user)
                } else {
                    return done(null, false, {message: 'Senha Incorreta'})
                }
            })
        })
    }))
}
