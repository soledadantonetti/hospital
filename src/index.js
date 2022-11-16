const express = require('express') 
const globalConstats = require('./const/globalConstants.js')
const routerConfif = require('./routers/index.routers')

const configuracionApi = (app)=>{
    app.use(express.json()) //Esto permite que Express entienda JSON
    app.use(express.urlencoded({extended:true}));
    return
}

const configuracionRouter = (app) => {
    app.use('/api/' , routerConfif.rutas_init())
}

const init = () => {
    console.log('entro a init')
    const app = express()
    configuracionApi(app)
    configuracionRouter(app)
    app.listen(globalConstats.PORT)
    console.log("Corre en http://localhost:" + globalConstats.PORT)
    
}


init(); 
 