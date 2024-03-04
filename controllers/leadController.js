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

exports.getCategoryLeads = async(req,res) =>{
    try{
        const leads = await Lead.find();

        const conteoPorLeadOrigin = leads.reduce((conteo, lead) => {
            const leadOrigin = lead.leadOrigin;
            conteo[leadOrigin] = (conteo[leadOrigin] || 0) + 1;
            return conteo;
          }, {});
          
          // Transforma el objeto conteo en un array con el formato deseado
          const resultadoFormateado = Object.keys(conteoPorLeadOrigin).map(leadOrigin => ({
            name: leadOrigin,
            value: conteoPorLeadOrigin[leadOrigin]
          }));

        res.json(resultadoFormateado);

    }
    catch(error){
        console.log("Hubo un problema");

    }
}

