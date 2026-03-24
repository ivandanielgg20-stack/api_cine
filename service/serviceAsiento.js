const modelAsiento= require('../model/modelAsiento');
const serviceAsiento={
    getAsientos: async()=>{
        const [rows] =await modelAsiento.getAsientos();
        return rows;


    },
    insertAsiento: async(id_sala, fila, numero, estado)=>{
         return  await modelAsiento.insertAsiento(id_sala, fila, numero, estado);
       
    },
     getAsientoById: async(id_asiento)=>{
        const result=await modelAsiento.getAsientoById(id_asiento);
        return result;

     },
      updateAsiento: async(id_asiento, id_sala, fila, numero, estado)=>{
        const result =await modelAsiento.updateAsiento(id_asiento, id_sala, fila, numero, estado)
        return result;

      },
      deleteAsiento: async(id_asiento)=>{
        const result= await modelAsiento.deleteAsiento(id_asiento)
        return result;

      },
      searchAvailableSeats: async (id_sala)=>{
        const result= await modelAsiento.searchAvailableSeats(id_sala)
        return result;

      },
      getAsientosBySala: async (id_sala) =>{
        const result= await modelAsiento.getAsientosBySala(id_sala);
        return result;

      },
      getAsientoByFilaNumero: async (id_sala, fila, numero) =>{
        const result =await modelAsiento.getAsientoByFilaNumero(id_sala, fila,numero);
        return result;
        
      }
}