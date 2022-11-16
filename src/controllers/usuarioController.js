module.exports = {
    listar: async (req,res) => {

    },
    
    crear: async (req, res) => {

    },

    listarInfo: async (req,res) => {

    },
    
    prueba: async (req,res) => {
         console.log('Entro a prueba')
        try{
            console.log('Entro a prueba')

            res.json({
                message : 'Hola prueba'
        })


        }catch(err){
            console.log(err)
        }
    }
}