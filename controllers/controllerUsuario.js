serviceUsuario = require('../services/serviceUsuario');
const controllerUsuario = {
    getUsuarios: async (req, res) => {
        try {
            const usuarios = await serviceUsuario.getUsuarios();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }

    },
    insertUsuario: async (req, res) => {
        try {
            const { nombre, email, password } = req.body;
            const result = await serviceUsuario.insertUsuario(nombre, email, password);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getUsuarioById: async (req, res) => {
        try {
            const { id_usuario } = req.params;
            const result = await serviceUsuario.getUsuarioById(id_usuario);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateUsuario: async (req, res) => {
        try {
            const { id_usuario } = req.params;
            const { nombre, email, password } = req.body;
            const result = await serviceUsuario.updateUsuario(id_usuario, nombre, email, password);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteUsuario: async (req, res) => {
        try {
            const { id_usuario } = req.params;
            const result = await serviceUsuario.deleteUsuario(id_usuario);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    patchUsuario: async (req, res) => {
        try {
            const { id_usuario } = req.params;
            const datos = req.body;
            const result = await serviceUsuario.patchUsuario(id_usuario, datos);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getUsuarioByEmail: async (req, res) => {
        try {
            const { email } = req.params;
            const result = await serviceUsuario.getUsuarioByEmail(email);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }   
    }
};
module.exports = controllerUsuario;
