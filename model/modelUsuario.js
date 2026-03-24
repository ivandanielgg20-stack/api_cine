const {connection} = require('../config/db');
const Modelusuarios={
    getUsuarios: async()=>{
        const [rows] = await connection.query('SELECT * FROM Usuario');
        return rows;
    },
    insertUsuario: async(nombre, email, pass, estado)=>{
        const [rows]= await connection.query('insert into Usuario(nombre, email, pass, estado) values(?, ?, ?, ?)', [nombre, email, pass, estado]);
        return rows;
    },
    getUsuarioById: async(id_usuario)=>{
        const [rows] = await connection.query('SELECT * FROM Usuario WHERE id_usuario = ?', [id_usuario]);
        return rows[0];
    },
    updateUsuario: async(id_usuario, nombre, email, pass, estado)=>{
        const [rows] = await connection.query('update Usuario set nombre = ?, email = ?, pass = ?, estado = ? where id_usuario = ?', [nombre, email, pass, estado, id_usuario]);
        return rows;
    },
    deleteUsuario: async(id_usuario)=>{
        const [rows] = await connection.query('update Usuario set estado= "inactivo" where id_usuario = ?', [id_usuario]);
        return rows;
    },
    patchUsuario: async(id_usuario, datos)=>{
        const campos = [];
        const valores = [];
        for (let key in datos) {
            campos.push(`${key} = ?`);
            valores.push(datos[key]);
        }
        valores.push(id_usuario);
        const sql = `
        UPDATE Usuario
        SET ${campos.join(', ')}
        WHERE id_usuario = ?
    `;
        const [rows] = await connection.query(sql, valores);
         return rows;
    },
    getUsuarioByEmail: async(email)=>{
        const [rows] = await connection.query('SELECT * FROM Usuario WHERE email = ?', [email]);
        return rows[0];
    },
}
module.exports = Modelusuarios;
