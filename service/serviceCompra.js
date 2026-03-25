const { connection } = require('../config/db');

const modelBoleto = {

    crearBoleto: async (id_compra, id_funcion, id_asiento, precio) => {
        const [rows] = await connection.query(
            `INSERT INTO Boleto (id_compra, id_funcion, id_asiento, precio, estado)
             VALUES (?, ?, ?, ?, 'reservado')`,
            [id_compra, id_funcion, id_asiento, precio]
        );
        return rows;
    },

    verificarAsiento: async (id_funcion, id_asiento) => {
        const [rows] = await connection.query(
            `SELECT * FROM Boleto
             WHERE id_funcion = ? AND id_asiento = ?
             AND estado IN ('reservado','pagado')`,
            [id_funcion, id_asiento]);
        return rows.length > 0;
    },

    confirmarBoletos: async (id_compra) => {
        const [rows] = await connection.query(
            `UPDATE Boleto SET estado = 'pagado'
             WHERE id_compra = ?`,
            [id_compra]);
        return rows;
    }

};

module.exports = modelBoleto;