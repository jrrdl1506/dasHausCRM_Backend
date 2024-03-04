const Lead = require('../models/Lead');


// ALTA LEADS 

exports.addLead = async(req,res) => {
    try{
        let lead;
        lead= new Lead(req.body);
        await lead.save();
        res.send(lead);

    }
    catch(error){
        console.log("Hubo un problema");
    }
}

exports.getLeads = async(req,res) =>{
    try{
        const leads = await Lead.find();
        res.json(leads);

    }
    catch(error){
        console.log("Hubo un problema");

    }
}