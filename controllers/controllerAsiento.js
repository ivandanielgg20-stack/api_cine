const serviceAsiento = require('../service/serviceAsiento');

const controllerAsiento = {

    getAsientos: async (req, res) => {
        try {
            const result = await serviceAsiento.getAsientos();
            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

   
    insertAsiento: async (req, res) => {
        const { id_sala, fila, numero, estado } = req.body;

        try {
            const result = await serviceAsiento.insertAsiento(id_sala, fila, numero, estado);
            res.json({ msg: "Asiento creado", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getAsientoById: async (req, res) => {
        const { id_asiento } = req.params;

        try {
            const result = await serviceAsiento.getAsientoById(id_asiento);

            if (!result) {
                return res.status(404).json({ msg: "Asiento no encontrado" });
            }

            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    updateAsiento: async (req, res) => {
        const { id_asiento } = req.params;
        const { id_sala, fila, numero, estado } = req.body;

        try {
            const result = await serviceAsiento.updateAsiento(id_asiento, id_sala, fila, numero, estado);
            res.json({ msg: "Asiento actualizado", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },
    deleteAsiento: async (req, res) => {
        const { id_asiento } = req.params;

        try {
            const result = await serviceAsiento.deleteAsiento(id_asiento);
            res.json({ msg: "Asiento eliminado", result });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },


    searchAvailableSeats: async (req, res) => {
        const { id_sala } = req.params;

        try {
            const result = await serviceAsiento.searchAvailableSeats(id_sala);
            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },

    getAsientosBySala: async (req, res) => {
        const { id_sala } = req.params;

        try {
            const result = await serviceAsiento.getAsientosBySala(id_sala);
            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    },


    getAsientoByFilaNumero: async (req, res) => {
        const { id_sala, fila, numero } = req.params;

        try {
            const result = await serviceAsiento.getAsientoByFilaNumero(id_sala, fila, numero);

            if (!result) {
                return res.status(404).json({ msg: "Asiento no encontrado" });
            }

            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

};

module.exports = controllerAsiento;