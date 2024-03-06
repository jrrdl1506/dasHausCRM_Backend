const mongoose = require('mongoose');
const InventarioSchema = mongoose.Schema({
    lote:{
        type:String,
        requires:true
    },
    modeloCasa:{
        type:String,
        requires:true

    },
    precioVenta:{
        type:String,
        requires:true

    },
    medidas:{
        type:String,
        requires:true
    },
    colindancia:{
        type:String,
        requires:true
    },
    estado:{
        type:String,
        requires:true
    }

});

module.exports = mongoose.model('Inventario',InventarioSchema);