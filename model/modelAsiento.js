const {connection}= require('../config/db');
const modelAsiento={
    getAsientos: async()=>{
        const [rows] = await connection.query('SELECT * FROM Asiento');
        return rows;
    },
    insertAsiento: async(id_sala, fila, numero, estado)=>{
        const [rows] = await connection.query('INSERT INTO Asiento (id_sala, fila, numero, estado) VALUES (?, ?, ?, ?)', [id_sala, fila, numero, estado]);
        return rows;
    },
    getAsientoById: async(id_asiento)=>{
        const [rows] = await connection.query('SELECT * FROM Asiento WHERE id_asiento = ?', [id_asiento]);
        return rows[0];
    },
    updateAsiento: async(id_asiento, id_sala, fila, numero, estado)=>{
        const [rows] = await connection.query('UPDATE Asiento SET id_sala = ?, fila = ?, numero = ?, estado = ? WHERE id_asiento = ?', [id_sala, fila, numero, estado, id_asiento]);
        return rows;
    },
    deleteAsiento: async(id_asiento)=>{
        const [rows] = await connection.query('DELETE FROM Asiento WHERE id_asiento = ?', [id_asiento]);    
        return rows;
    },
    searchAvailableSeats: async (id_sala)=>{
        const [rows]= await connection.query(`SELECT id_asiento, fila, numero FROM asiento  WHERE id_sala = ?  AND estado = 'disponible' ORDER BY fila, numero`, [id_sala]);
        return rows;

    },
    getAsientosBySala: async (id_sala) => {
    const [rows] = await connection.query(
        `SELECT id_asiento, fila, numero, estado FROM Asiento WHERE id_sala = ?
         ORDER BY fila ASC, numero ASC`,[id_sala]);
    return rows;
    },
    getAsientoByFilaNumero: async (id_sala, fila, numero) => {
    const [rows] = await connection.query(
        `SELECT *  FROM Asiento WHERE id_sala = ? AND fila = ? AND numero = ?`,
        [id_sala, fila, numero]);
    return rows[0];
    }

}
module.exports= modelAsiento;


