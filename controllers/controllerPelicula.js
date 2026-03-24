const servicePelicula = require('../service/servicePelicula');
const controllerPelicula = {
    getPeliculas: async(req, res)=>{
        try {
            const peliculas = await servicePelicula.getPeliculas();
            res.json(peliculas); 
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    insertPelicula: async(req, res)=>{
        try {
            const {titulo, duracion, clasificacion, genero, sinopsis, estado} = req.body;
            const result = await servicePelicula.insertPelicula(titulo, duracion, clasificacion, genero, sinopsis, estado);
            res.json(result);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    getPeliculaById: async(req, res)=>{
        try{
            const {id_pelicula} = req.params;
            const result = await servicePelicula.getPeliculaById(id_pelicula);
            res.json(result);
        }catch(error){
            res.status(500).json({error: error.message});

        }
    },
    updatePelicula: async(req, res)=>{
        try{    
            const {id_pelicula} = req.params;
            const {titulo, duracion, clasificacion, genero, sinopsis, estado} = req.body;
            const result = await servicePelicula.updatePelicula(id_pelicula, titulo, duracion, clasificacion, genero, sinopsis, estado);
            res.json(result);
        }catch(error){
            res.status(500).json({error: error.message});
        }
    },
    deletePelicula: async(req, res)=>{
        try{
            const {id_pelicula} = req.params;
            const result = await servicePelicula.deletePelicula(id_pelicula );
            res.json(result);
        }
        catch(error){
            res.status(500).json({error: error.message});
        }
    },
    patchPelicula: async(req, res)=>{
        try{
            const {id_pelicula} = req.params;
            const datos = req.body;
            const result = await servicePelicula.patchPelicula(id_pelicula, datos);
            res.json(result);
        }
        catch(error){
            res.status(500).json({error: error.message});
        }
    },
    getPeliculaByNombre: async(req, res)=>{
        try{
            const {nombre} = req.params;
            const result = await servicePelicula.getPeliculaByNombre(nombre);
            res.json(result);
        }
        catch(error){
            res.status(500).json({error: error.message});
        }
    }
};
module.exports = controllerPelicula;
