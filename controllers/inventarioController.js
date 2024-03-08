const Inventario = require("../models/Inventario");

exports.addInventario = async(req,res)=>{
    try{
        let inventario;
        inventario = new Inventario(req.body);
        await inventario.save();
        res.send(inventario);

    }
    catch(error){
        console.log("Hubo un problema");
    }
}

exports.getInventario = async(req,res) =>{
    try{
      
    
        const inventario = await Inventario.find();
        res.json(inventario);

    }
    catch(error){
        console.log("Hubo un problema");
    }
}
