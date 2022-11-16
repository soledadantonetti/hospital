const router = require("express").Router()

const controllersRouter = require("../controllers/tratamientosController")

router.get("/", controllersRouter.listar)

module.exports = router