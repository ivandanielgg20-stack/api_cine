const { connection } = require('../config/db');

const modelCompra = {

    crearCompra: async (id_usuario, total) => {
        const [result] = await connection.query(
            `INSERT INTO Compra (id_usuario, fecha_compra, total, estado)
             VALUES (?, NOW(), ?, 'pendiente')`,
            [id_usuario, total]
        );
        return result.insertId;
    },

    actualizarTotal: async (id_compra, total) => {
        const [rows] = await connection.query(
            `UPDATE Compra SET total = ? WHERE id_compra = ?`,
            [total, id_compra]
        );
        return rows;
    },

    confirmarCompra: async (id_compra) => {
        const [rows] = await connection.query(
            `UPDATE Compra SET estado = 'pagada' WHERE id_compra = ?`,
            [id_compra]
        );
        return rows;
    }

};

module.exports = modelCompra;