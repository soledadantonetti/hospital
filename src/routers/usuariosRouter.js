const router = require('express').Router()

const usuarioController = require('../controllers/usuarioController')

//router.get('/', usuarioController.listar)

router.post('/', usuarioController.crear)

router.get('/', usuarioController.prueba)



router.get('/:idUsuario', usuarioController.listarInfo)

console.log("entro router")

module.exports = router
