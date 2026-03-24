const peliculasModel= require('../model/modelPelicula');
const peliculasService={
    getPeliculas: async()=>{
        const peliculas = await peliculasModel.getPeliculas();
        return peliculas;

    },
    insertPelicula: async(titulo, duracion, clasificacion, genero, sinopsis, estado)=>{
        return await peliculasModel.insertPelicula(titulo, duracion, clasificacion, genero, sinopsis, estado);
    },
    getPeliculaById: async(id_pelicula)=>{
        const result= await peliculasModel.getPeliculaById(id_pelicula);
        return result;

    },
    updatePelicula: async(id_pelicula, titulo, duracion, clasificacion, genero, sinopsis, estado)=>{
        const result= await peliculasModel.updatePelicula(id_pelicula, titulo, duracion, clasificacion, genero, sinopsis, estado);
        return result;
    },
    deletePelicula: async(id_pelicula)=>{
        const result= await peliculasModel.deletePelicula(id_pelicula);
        return result;
    },
    patchPelicula: async(id_pelicula, datos)=>{
    delete datos.id_pelicula;
    if(Object.keys(datos).length === 0){
        throw new Error('No se proporcionaron datos para actualizar');
    }
    const result = await peliculasModel.patchPelicula(id_pelicula, datos);
    return result;
    },
    
    getPeliculaByNombre: async(nombre)=>{
        const result= await peliculasModel.getPeliculaByNombre(nombre);
        return result;
    }
};
module.exports = peliculasService;
