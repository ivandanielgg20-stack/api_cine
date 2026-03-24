const salaModel = require('../model/salaModel');
const salaService = {
    getSalas: async()=>{
        return await salaModel.getSalas();
    },
    insertSala: async(nombre, tipo, capacidad, estado)=>{
        const result = await salaModel.insertSala(nombre, tipo, capacidad, estado);
        return result;
    },
    getSalaById: async(id_sala)=>{
        const result = await salaModel.getSalaById(id_sala);
        return result;
    },
    updateSala: async(id_sala, nombre, tipo, capacidad, estado)=>{
        const result = await salaModel.updateSala(id_sala, nombre, tipo, capacidad, estado);
        return result;
    },
    deleteSala: async(id_sala)=>{
        const result = await salaModel.deleteSala(id_sala);
        return result;
    },
    patchSala: async(id_sala, datos)=>{
        delete datos.id_sala;
        if(Object.keys(datos).length === 0){
            throw new Error('No se proporcionaron datos para actualizar');
        }
        const result = await salaModel.patchSala(id_sala, datos);
        return result;
        
    },
    updateSalaType: async(id_sala, tipo)=>{
        const result = await salaModel.updateSalaType(id_sala, tipo);
        return result;
    }

}
module.exports = salaService;
