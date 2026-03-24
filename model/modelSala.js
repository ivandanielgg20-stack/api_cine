const {connection} = require('../config/db');
const salas={
    getSalas: async()=>{
        const [rows]=await connection.query('SELECT * FROM Sala');
        return rows;
    },
    insertSala: async(nombre, tipo, capacidad,estado)=>{
        const [result]=await connection.query('INSERT INTO Sala (nombre, tipo, capacidad, estado) VALUES (?, ?, ?, ?)', [nombre, tipo, capacidad, estado]);
        return result;
    },
    getSalaById: async(id_sala)=>{
        const [rows]=await connection.query('SELECT * FROM Sala WHERE id_sala = ?', [id_sala]);
        return rows;
    },
    updateSala: async(id_sala, nombre, tipo, capacidad, estado)=>{
        const [result]=await connection.query('UPDATE Sala SET nombre = ?, tipo = ?, capacidad = ?, estado = ? WHERE id_sala = ?', [nombre, tipo, capacidad, estado, id_sala]);
        return result;
    },
    updateSalaType: async(id_sala, tipo)=>{
        const [result]=await connection.query('UPDATE Sala SET tipo = ? WHERE id_sala = ?', [tipo, id_sala]);
        return result;
    },
    
    deleteSala: async(id_sala)=>{
        const [result]=await connection.query('UPDATE Sala SET estado = "inactiva" WHERE id_sala = ?', [id_sala]);
        return result;
    },
    patchSala: async(id_sala, datos)=>{
        const campos = [];
        const valores = [];
        for (let key in datos) {
            campos.push(`${key} = ?`);
            valores.push(datos[key]);
        }
        valores.push(id_sala);
        const sql = `
        UPDATE Sala
        SET ${campos.join(', ')}
        WHERE id_sala = ?
    `;
        const [rows] = await connection.query(sql, valores);
         return rows;
    }   
}
module.exports = salas;
