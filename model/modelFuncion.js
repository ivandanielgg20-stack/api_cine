const { connection } = require('../config/db');

const modelFuncion = {

    getFunciones: async () => {
        const [rows] = await connection.query('SELECT * FROM Funcion');
        return rows;
    },

    insertFuncion: async (id_pelicula, id_sala, fecha, hora, precio, estado) => {
        const [rows] = await connection.query(
            `INSERT INTO Funcion (id_pelicula, id_sala, fecha, hora, precio, estado)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [id_pelicula, id_sala, fecha, hora, precio, estado]
        );
        return rows;
    },

    getFuncionById: async (id_funcion) => {
        const [rows] = await connection.query(
            'SELECT * FROM Funcion WHERE id_funcion = ?',
            [id_funcion]
        );
        return rows[0];
    },

    updateFuncion: async (id_funcion, id_pelicula, id_sala, fecha, hora, precio, estado) => {
        const [rows] = await connection.query(
            `UPDATE Funcion 
             SET id_pelicula = ?, id_sala = ?, fecha = ?, hora = ?, precio = ?, estado = ?
             WHERE id_funcion = ?`,
            [id_pelicula, id_sala, fecha, hora, precio, estado, id_funcion]
        );
        return rows;
    },

    deleteFuncion: async (id_funcion) => {
        const [rows] = await connection.query(
            `UPDATE Funcion SET estado = 'cancelada' WHERE id_funcion = ?`,
            [id_funcion]
        );
        return rows;
    },

    patchFuncion: async (id_funcion, datos) => {
        const campos = [];
        const valores = [];

        for (let key in datos) {
            campos.push(`${key} = ?`);
            valores.push(datos[key]);
        }

        valores.push(id_funcion);

        const sql = `
            UPDATE Funcion
            SET ${campos.join(', ')}
            WHERE id_funcion = ?
        `;

        const [rows] = await connection.query(sql, valores);
        return rows;
    },

    getFuncionesBySala: async (id_sala) => {
        const [rows] = await connection.query(
            'SELECT * FROM Funcion WHERE id_sala = ?',
            [id_sala]
        );
        return rows;
    },

    getFuncionesByPelicula: async (id_pelicula) => {
        const [rows] = await connection.query(
            'SELECT * FROM Funcion WHERE id_pelicula = ?',
            [id_pelicula]
        );
        return rows;
    }

};

module.exports = modelFuncion;