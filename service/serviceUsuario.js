const usuarioModel = require('../model/usuarioModel');
const usuarioService = {
    getUsuarios: async () => {
        const usuarios = await usuarioModel.getUsuarios();
        return usuarios;
    },
    insertUsuario: async (nombre, email, password) => {
        return await usuarioModel.insertUsuario(nombre, email, password);
    },
    getUsuarioById: async (id_usuario) => {
        const result = await usuarioModel.getUsuarioById(id_usuario);
        return result;
    },
    updateUsuario: async (id_usuario, nombre, email, password) => {
        const result = await usuarioModel.updateUsuario(id_usuario, nombre, email, password);
        return result;
    },
    deleteUsuario: async (id_usuario) => {
        const result = await usuarioModel.deleteUsuario(id_usuario);
        return result;
    },
    patchUsuario: async (id_usuario, datos) => {
        delete datos.id_usuario;
        if (Object.keys(datos).length === 0) {
            throw new Error('No se proporcionaron datos para actualizar');
        }
        const result = await usuarioModel.patchUsuario(id_usuario, datos);
        return result;
    },
    getUsuarioByEmail: async (email) => {
        const result = await usuarioModel.getUsuarioByEmail(email);
        return result;
    }
};
module.exports = usuarioService;
