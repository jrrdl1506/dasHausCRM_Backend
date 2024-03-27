const mongoose = require('mongoose');
const Mensualidad = require('../models/Mensualidad').schema;

const CotizacionSchema = mongoose.Schema({
    m2:{
        type:Number,
        requires:true
    },
    costo_m2:{
        type:Number,
        requires:true
    },
    precioSinEnganche:{
        type:Number,
        requires:true
    },
    tieneEnganche:{
        type:String,
        requires:true
    },
    enganche:{
        type:Number,
        requires:true
    },
    plazos:{
        type:Number,
        requires:true
    },
    pagosEnganche:[Mensualidad],
    mensualidades:[Mensualidad]

})

module.exports = mongoose.model('Cotizacion',CotizacionSchema);