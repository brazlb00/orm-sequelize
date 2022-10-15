const {Router} = require('express')
const NivelController = require('../controlers/NivelController')

const router = Router()

router.get('/niveis', NivelController.pegaTodosOsNiveis)
router.get('/niveis/:id', NivelController.pegaUmNivel)  //o : recebe o id como parâmetro da requisição
router.post('/niveis', NivelController.criaUmNivel)

module.exports = router
