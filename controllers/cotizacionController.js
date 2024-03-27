const Cotizacion = require("../models/Cotizacion");

exports.addCotizacion = async(req,res)=>{
    try{
        let cotizacion;
        cotizacion = new Cotizacion(req.body);
        await cotizacion.save();
        res.send(cotizacion);

    }
    catch(error){
        console.log("Hubo un problema",error);
    }
}