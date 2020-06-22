const express = require('express')
const Entrega = require('../models/Entrega')
const bodyParser = require('body-parser')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Rota de Entrega')
})

module.exports = router