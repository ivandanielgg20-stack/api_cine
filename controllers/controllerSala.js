const serviceSala = require('../service/serviceSala');

const controllerSala = {

    getSalas: async (req, res) => {
        try {
            const result = await serviceSala.getSalas();
            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },


    insertSala: async (req, res) => {
        try {
            const { nombre, tipo, capacidad, estado } = req.body;

            const result = await serviceSala.insertSala(
                nombre,
                tipo,
                capacidad,
                estado
            );

            res.json({ msg: "Sala creada", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },


    getSalaById: async (req, res) => {
        try {
            const { id_sala } = req.params;

            const result = await serviceSala.getSalaById(id_sala);

            if (!result) {
                return res.status(404).json({ msg: "Sala no encontrada" });
            }

            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    updateSala: async (req, res) => {
        try {
            const { id_sala } = req.params;
            const { nombre, tipo, capacidad, estado } = req.body;

            const result = await serviceSala.updateSala(
                id_sala,
                nombre,
                tipo,
                capacidad,
                estado
            );

            res.json({ msg: "Sala actualizada", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    deleteSala: async (req, res) => {
        try {
            const { id_sala } = req.params;

            const result = await serviceSala.deleteSala(id_sala);

            res.json({ msg: "Sala eliminada", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

  
    patchSala: async (req, res) => {
        try {
            const { id_sala } = req.params;
            const datos = req.body;

            const result = await serviceSala.patchSala(id_sala, datos);

            res.json({ msg: "Sala actualizada parcialmente", result });
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },

    // 📌 Actualizar solo tipo (endpoint específico)
    updateSalaType: async (req, res) => {
        try {
            const { id_sala } = req.params;
            const { tipo } = req.body;

            const result = await serviceSala.updateSalaType(id_sala, tipo);

            res.json({ msg: "Tipo de sala actualizado", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

};

module.exports = controllerSala;