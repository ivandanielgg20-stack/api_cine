const sercviceSala = require('../services/serviceSala');
const controllerSala = {
    getSalas: async(req, res)=>{
        try {
            const result = await sercviceSala.getSalas();
            res.json(result);
        }
        catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    insertSala: async(req, res)=>{
        try {
            const {nombre, tipo, capacidad, estado} = req.body;
            const result = await sercviceSala.insertSala(nombre, tipo, capacidad, estado);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    getSalaById: async(req, res)=>{
        try {
            const {id_sala} = req.params;
            const result = await sercviceSala.getSalaById(id_sala);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    updateSala: async(req, res)=>{
        try {
            const {id_sala} = req.params;
            const {nombre, tipo, capacidad, estado} = req.body;
            const result = await sercviceSala.updateSala(id_sala, nombre, tipo, capacidad, estado);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    deleteSala: async(req, res)=>{
        try {
            const {id_sala} = req.params;
            const result = await sercviceSala.deleteSala(id_sala);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    patchSala: async(req, res)=>{
        try {
            const {id_sala} = req.params;
            const datos = req.body;
            const result = await sercviceSala.patchSala(id_sala, datos);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({error: error.message});
        }

    },
    updateSalaType: async(req, res)=>{
        try {
            const {id_sala} = req.params;
            const {tipo} = req.body;
            const result = await sercviceSala.updateSalaType(id_sala, tipo);
            res.json(result);
        }
        catch (error) {
            res.status(500).json({error: error.message});
        }

    }
}
module.exports = controllerSala;

