const serviceCompra = require('../service/serviceCompra');

const controllerCompra = {

    crearCompra: async (req, res) => {
        const { id_usuario, id_funcion, asientos, precio } = req.body;

        try {
            const result = await serviceCompra.crearCompraCompleta(
                id_usuario,
                id_funcion,
                asientos,
                precio
            );

            res.json({
                msg: "Compra creada",
                result
            });

        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },

    confirmarCompra: async (req, res) => {
        const { id_compra } = req.params;

        try {
            const result = await serviceCompra.confirmarCompra(id_compra);
            res.json(result);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

};

module.exports = controllerCompra;