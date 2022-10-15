const {Router} = require('express')
const { pegaTodasAsTurmas } = require('../controlers/TurmaController')
const TurmaController = require('../controlers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmaController.pegaUmaTurma)
router.post('/turmas', TurmaController.criaUmaTurma)

module.exports = router
