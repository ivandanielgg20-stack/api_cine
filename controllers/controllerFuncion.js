const serviceFuncion = require('../service/serviceFuncion');

const controllerFuncion = {

    getFunciones: async (req, res) => {
        try {
            const result = await serviceFuncion.getFunciones();
            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    insertFuncion: async (req, res) => {
        const { id_pelicula, id_sala, fecha, hora, precio, estado } = req.body;

        try {
            const result = await serviceFuncion.insertFuncion(id_pelicula, id_sala, fecha, hora, precio, estado);
            res.json({ msg: "Función creada", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getFuncionById: async (req, res) => {
        const { id_funcion } = req.params;

        try {
            const result = await serviceFuncion.getFuncionById(id_funcion);

            if (!result) {
                return res.status(404).json({ msg: "Función no encontrada" });
            }

            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    updateFuncion: async (req, res) => {
        const { id_funcion } = req.params;
        const { id_pelicula, id_sala, fecha, hora, precio, estado } = req.body;

        try {
            const result = await serviceFuncion.updateFuncion(
                id_funcion, id_pelicula, id_sala, fecha, hora, precio, estado
            );

            res.json({ msg: "Función actualizada", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    deleteFuncion: async (req, res) => {
        const { id_funcion } = req.params;

        try {
            const result = await serviceFuncion.deleteFuncion(id_funcion);
            res.json({ msg: "Función cancelada", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    patchFuncion: async (req, res) => {
        const { id_funcion } = req.params;
        const datos = req.body;

        try {
            const result = await serviceFuncion.patchFuncion(id_funcion, datos);
            res.json({ msg: "Función actualizada parcialmente", result });
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },

    getFuncionesBySala: async (req, res) => {
        const { id_sala } = req.params;

        try {
            const result = await serviceFuncion.getFuncionesBySala(id_sala);
            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getFuncionesByPelicula: async (req, res) => {
        const { id_pelicula } = req.params;

        try {
            const result = await serviceFuncion.getFuncionesByPelicula(id_pelicula);
            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

};

module.exports = controllerFuncion;