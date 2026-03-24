const {connection} = require('../config/db');
const peliculas={
    getPeliculas: async()=>{
        const [rows] = await connection.query('SELECT * FROM Pelicula');
        return rows;
    },
    //titulo, duracion, clasificacion, genero, sinopsis, estado
    insertPelicula: async(titulo, duracion, clasificacion, genero, sinopsis, estado)=>{
        const [rows] = await connection.query('INSERT INTO Pelicula (titulo, duracion, clasificacion, genero, sinopsis, estado) VALUES (?, ?, ?, ?, ?, ?)', [titulo, duracion, clasificacion, genero, sinopsis, estado]);
        return rows;
    },
    getPeliculaById: async(id_pelicula)=>{
        const [rows] = await connection.query('SELECT * FROM Pelicula WHERE id_pelicula = ?', [id_pelicula]);
        return rows[0];
    },
    updatePelicula: async(id_pelicula, titulo, duracion, clasificacion, genero, sinopsis, estado)=>{
        const [rows] = await connection.query('UPDATE Pelicula SET titulo = ?, duracion = ?, clasificacion = ?, genero = ?, sinopsis = ?, estado = ? WHERE id_pelicula = ?', [titulo, duracion, clasificacion, genero, sinopsis, estado, id_pelicula]);
        return rows;
    },
    deletePelicula: async(id_pelicula)=>{
        const [rows] = await connection.query('update Pelicula set estado= "inactiva" where id_pelicula = ?', [id_pelicula]);
        return rows;
    },
    patchPelicula: async(id_pelicula, datos)=>{
        const campos = [];
        const valores = [];
        for (let key in datos) {
            campos.push(`${key} = ?`);
            valores.push(datos[key]);
        }
        valores.push(id_pelicula);
        const sql = `
        UPDATE Pelicula 
        SET ${campos.join(', ')} 
        WHERE id_pelicula = ?
    `;
        const [rows] = await connection.query(sql, valores);
         return rows;
    },
    getPeliculaByNombre: async(nombre)=>{
        const [rows] = await connection.query('SELECT * FROM Pelicula WHERE titulo LIKE ?', [`%${nombre}%`]);
        return rows[0];
    }
}
module.exports = peliculas;

