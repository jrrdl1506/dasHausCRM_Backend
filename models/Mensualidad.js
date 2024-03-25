const mongoose = require('mongoose');

const MensualidadSchema = mongoose.Schema({
    es_enganche_o_mensualidad:{
        type:String,
        requires:true
    },
    periodo:{
        type:String,
        requires:true
    },
    pago:{
        type:String,
        requires:true
    },
    fecha_pago:{
        type:String,
        requires:true
    },
    interes:{
        type:String,
        requires:true
    },
    capitalAmortizado:{
        type:String,
        requires:true
    },
    saldoFinalDePeriodo:{
        type:String,
        requires:true
    }
});


module.exports = mongoose.model('Mensualidad',MensualidadSchema);