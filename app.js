//Módulos NodeJS
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParse = require('body-parser')
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path')

const usuario = require('./routes/usuario')
const produto = require('./routes/produto')
const entrega = require('./routes/entrega')

const app = express()

//CONFIGUREAÇÕES DOS MÓDULOS
//Session
app.use(session({
    secret: 'session',
    resave: true,
    saveUninitialized: true  
}))

//Flash
app.use(flash())

//Midlleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    next()
})

//Body-parser
app.use(bodyParse.urlencoded({extended: true}))
app.use(bodyParse.json())

//handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Public
app.use(express.static(path.join(__dirname, 'public')))

//Rotas
app.get('/', (req, res) => {
    res.render('usuario/login')
})
app.use('/usuario', usuario)
app.use('/produto', produto)
app.use('/entrega', entrega)


const port = 3000
app.listen(port, () => {
    console.log('Servidor rodando...')
})