const router = require('express').Router()

const pacientesController = require('../controllers/pacientesController')

router.get('/', pacientesController.listar)

router.post('/', pacientesController.crear)

router.get('/1/', pacientesController.informacion1)

router.get('/:idPaciente', pacientesController.listarInfo)

module.exports = router
