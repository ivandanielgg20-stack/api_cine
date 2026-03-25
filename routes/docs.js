var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('dashboard', {
        title: '🎬 Cine API Docs',
        modulos: [

            {
                nombre: "🎟️ Asientos",
                id: "asientos",
                rutas: [
                    { metodo: "GET", ruta: "/api/asientos" },
                    { metodo: "POST", ruta: "/api/asientos" },
                    { metodo: "GET", ruta: "/api/asientos/:id_asiento" },
                    { metodo: "PUT", ruta: "/api/asientos/:id_asiento" },
                    { metodo: "DELETE", ruta: "/api/asientos/:id_asiento" },
                    { metodo: "GET", ruta: "/api/asientos/sala/:id_sala" },
                    { metodo: "GET", ruta: "/api/asientos/disponibles/:id_sala" }
                ]
            },

            {
                nombre: "🎥 Funciones",
                id: "funciones",
                rutas: [
                    { metodo: "GET", ruta: "/api/funciones" },
                    { metodo: "POST", ruta: "/api/funciones" },
                    { metodo: "GET", ruta: "/api/funciones/:id_funcion" },
                    { metodo: "PUT", ruta: "/api/funciones/:id_funcion" },
                    { metodo: "PATCH", ruta: "/api/funciones/:id_funcion" },
                    { metodo: "DELETE", ruta: "/api/funciones/:id_funcion" }
                ]
            },

            {
    nombre: "🎬 Películas",
    id: "peliculas",
    rutas: [
         {metodo:"GET", ruta: "/api/peliculas"},
        { metodo: "GET", ruta: "/api/getPeliculas" },
        { metodo: "POST", ruta: "/api/insertPelicula" },
        { metodo: "GET", ruta: "/api/getPeliculaById/:id_pelicula" },
        { metodo: "PUT", ruta: "/api/updatePelicula/:id_pelicula" },
        { metodo: "DELETE", ruta: "/api/deletePelicula/:id_pelicula" },
        { metodo: "PATCH", ruta: "/api/patchPelicula/:id_pelicula" },
        { metodo: "GET", ruta: "/api/getPeliculaByNombre/:nombre" }
    ]
},

            {
    nombre: "👤 Usuarios",
    id: "usuarios",
    rutas: [
        {metodo:"GET", ruta: "/api/usuarios"},
        { metodo: "GET", ruta: "/api/getUsuarios" },
        { metodo: "POST", ruta: "/api/insertUsuario" },
        { metodo: "GET", ruta: "/api/getUsuarioById/:id_usuario" },
        { metodo: "PUT", ruta: "/api/updateUsuario/:id_usuario" },
        { metodo: "DELETE", ruta: "/api/deleteUsuario/:id_usuario" },
        { metodo: "PATCH", ruta: "/api/patchUsuario/:id_usuario" },
        { metodo: "GET", ruta: "/api/getUsuarioByEmail/:email" }
    ]
},

            {
                nombre: "💳 Compras",
                id: "compras",
                rutas: [
                    { metodo: "POST", ruta: "/api/compras" },
                    { metodo: "PATCH", ruta: "/api/compras/:id/pagar" }
                ]
            },

            {
                nombre: "🎦 Salas",
                id: "salas",
                rutas: [
                    { metodo: "GET", ruta: "/api/salas" },
                    { metodo: "POST", ruta: "/api/salas" },
                    { metodo: "GET", ruta: "/api/salas/:id" },
                    { metodo: "PUT", ruta: "/api/salas/:id" },
                    { metodo: "PATCH", ruta: "/api/salas/:id" },
                    { metodo: "DELETE", ruta: "/api/salas/:id" }
                ]
            }

        ]
    });
});

module.exports = router;