const modelFuncion = require('../model/modelFuncion');

const serviceFuncion = {

    getFunciones: async () => {
        return await modelFuncion.getFunciones();
    },

    insertFuncion: async (id_pelicula, id_sala, fecha, hora, precio, estado) => {
        return await modelFuncion.insertFuncion(id_pelicula, id_sala, fecha, hora, precio, estado);
    },

    getFuncionById: async (id_funcion) => {
        return await modelFuncion.getFuncionById(id_funcion);
    },

    updateFuncion: async (id_funcion, id_pelicula, id_sala, fecha, hora, precio, estado) => {
        return await modelFuncion.updateFuncion(id_funcion, id_pelicula, id_sala, fecha, hora, precio, estado);
    },

    deleteFuncion: async (id_funcion) => {
        return await modelFuncion.deleteFuncion(id_funcion);
    },

    patchFuncion: async (id_funcion, datos) => {
        delete datos.id_funcion;

        if (Object.keys(datos).length === 0) {
            throw new Error("No hay datos para actualizar");
        }

        return await modelFuncion.patchFuncion(id_funcion, datos);
    },

    getFuncionesBySala: async (id_sala) => {
        return await modelFuncion.getFuncionesBySala(id_sala);
    },

    getFuncionesByPelicula: async (id_pelicula) => {
        return await modelFuncion.getFuncionesByPelicula(id_pelicula);
    }

};

module.exports = serviceFuncion;