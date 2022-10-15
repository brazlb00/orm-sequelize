const bodyParser = require('body-parser')
const turmas = require('./turmasRooute')
const pessoas = require('./pesssoasRoute')
const niveis = require('./niveisRoute')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(turmas)
    app.use(niveis)
    app.get('/', (req, res) => res.send('Olá!'))
}