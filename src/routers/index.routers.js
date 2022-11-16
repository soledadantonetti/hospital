const { Router } = require('express')

const usuariosRouter = require("./usuariosRouter")
const pacientesRouter = require("./pacientesRouter")
const medicosRouter = require("./medicosRouter")
const tratamientosRouter = require("./tratatamientosRouter")

const rutas_init = () => {
    const router = Router()
    router.use('/usuarios', usuariosRouter)
    router.use('/pacientes', pacientesRouter)
    router.use('/medicos', medicosRouter)
    router.use('/tratamientos', tratamientosRouter)
    console.log('entro rutas init')
    
    return router
 
} 

module.exports = {rutas_init}
