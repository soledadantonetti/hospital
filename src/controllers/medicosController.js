module.exports = {
    listar: async (req,res) => {
        try {
            console.log('Listar medicos')
            res.json('Listado de médicos')
        } catch (error) {
            console.log(error)   
        }
        
    }

}