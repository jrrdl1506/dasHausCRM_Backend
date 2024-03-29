const Lead = require('../models/Lead');

// ALTA LEADS 

exports.addLead = async (req, res) => {
    try {
        let lead;
        lead = new Lead(req.body);
        await lead.save();
        res.send(lead);

    }
    catch (error) {
        console.log("Hubo un problema");
    }
}

exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);

    }
    catch (error) {
        console.log("Hubo un problema");

    }
}

exports.getCategoryLeads = async (req, res) => {
    try {
        const leads = await Lead.find();


        const origenLeadOptions = [
            'RECOMENDACIÓN',
            'WATS APP y FACEBOOK',
            'REDES SOCIALES',
            'VISITA AL DESARROLLO',
            'ESPECTACULARES',
            'PRENSA Y REVISTAS',
            'RADIO',
            'FERIAS Y EXPOSICIONES',
            'VOLANTEO CREATIVO',
            'SINDICATOS',
            'VISITA A EMPRESAS',
            'FOLLETOS EN BANCOS',
            'CENTROS COMERCIALES',
            'OTROS'

        ];

        const conteoPorLeadOrigin = leads.reduce((conteo, lead) => {
            const leadOrigin = lead.leadOrigin;
            conteo[leadOrigin] = (conteo[leadOrigin] || 0) + 1;
            return conteo;
        }, {});

        origenLeadOptions.forEach(option => {
            if (!conteoPorLeadOrigin.hasOwnProperty(option)) {
                conteoPorLeadOrigin[option] = 0;
            }
        });

        const resultadoFinal = Object.entries(conteoPorLeadOrigin).map(([name, value]) => ({ name, value }));


        res.json(resultadoFinal);

    }
    catch (error) {
        console.log("Hubo un problema");

    }
}

exports.getLeadsProspectos = async (req, res) => {
    try {
        const leads = await Lead.find({ leadStatus: "EN PROCESO" });
        res.json(leads);
    } catch (error) {
        console.log("Hubo un problema", error);
        res.status(500).json({ error: "Hubo un problema al obtener los leads" });
    }
}


exports.getLeadsApartados = async (req, res) => {
    try {
        const leads = await Lead.find({ leadStatus: "APARTADO" });
        res.json(leads);
    } catch (error) {
        console.log("Hubo un problema", error);
        res.status(500).json({ error: "Hubo un problema al obtener los leads" });
    }
}

exports.getLeadsByVendor = async (req, res) => {
    try {
        const leads = await Lead.find({ leadVendor: req.body.id });

        res.send(leads);

    }
    catch (error) {
        console.log("Hubo un problema");
    }
}


exports.getApartadosConteo = async (req, res) => {
    try {
        const numeroLeadsApartados = await Lead.countDocuments({ leadStatus: "APARTADO" });
        res.json({ count: numeroLeadsApartados });
    } catch (error) {
        console.log("Hubo un problema", error);
        res.status(500).json({ error: "Hubo un problema al obtener el número de leads apartados" });
    }
}

exports.getLeadsGlobalConteo = async (req, res) => {
    try {
        const numeroLeads = await Lead.countDocuments();
        res.json({ count: numeroLeads });
    } catch (error) {
        console.log("Hubo un problema", error);
        res.status(500).json({ error: "Hubo un problema al obtener el número de leads apartados" });
    }
}

exports.getHitrateApartado = async (req, res) => {
    try {
        const numeroLeads = await Lead.countDocuments();
        const estadosLeads = ['APARTADO', 'CONTRATO', 'FIRMADO', 'VIVIENDA ENTREGADA'];
        const numeroLeadsApartados = await Lead.countDocuments({ leadStatus: { $in: estadosLeads } });
        const responseData = [
            { "name": "Leads sin apartado", "value": numeroLeads-numeroLeadsApartados },
            { "name": "Leads con apartado", "value": numeroLeadsApartados }
          ];
          
          res.json(responseData);

    } catch (error) {
        console.log("Hubo un problema", error);
        res.status(500).json({ error: "Hubo un problema al obtener el número de leads apartados" });
    }
}

exports.getApartadoPorCanal = async (req, res) => {
    try {
        const leads = await Lead.find({ leadStatus: "APARTADO" });


        const origenLeadOptions = [
            'RECOMENDACIÓN',
            'WATS APP y FACEBOOK',
            'REDES SOCIALES',
            'VISITA AL DESARROLLO',
            'ESPECTACULARES',
            'PRENSA Y REVISTAS',
            'RADIO',
            'FERIAS Y EXPOSICIONES',
            'VOLANTEO CREATIVO',
            'SINDICATOS',
            'VISITA A EMPRESAS',
            'FOLLETOS EN BANCOS',
            'CENTROS COMERCIALES',
            'OTROS'

        ];

        const conteoPorLeadOrigin = leads.reduce((conteo, lead) => {
            const leadOrigin = lead.leadOrigin;

            // Inicializa la propiedad en 0 si no existe
            conteo[leadOrigin] = (conteo[leadOrigin] || 0) + 1;

            return conteo;
        }, {});

        // Asegúrate de agregar las opciones faltantes con un valor de 0
        origenLeadOptions.forEach(option => {
            if (!conteoPorLeadOrigin.hasOwnProperty(option)) {
                conteoPorLeadOrigin[option] = 0;
            }
        });

        // Convierte el objeto en un array de objetos
        const resultadoFinal = Object.entries(conteoPorLeadOrigin).map(([name, value]) => ({ name, value }));


        res.json(resultadoFinal);

    }
    catch (error) {
        console.log("Hubo un problema");

    }
}



exports.getApartadoPorprototipo = async (req, res) => {
    try {
        const leads = await Lead.find({ leadStatus: "APARTADO" });

        const conteoPorLeadOrigin = leads.reduce((conteo, lead) => {
            const leadOrigin = lead.leadModel;

            conteo[leadOrigin] = (conteo[leadOrigin] || 0) + 1;

            return conteo;
        }, {});

        const resultadoFinal = Object.entries(conteoPorLeadOrigin).map(([name, value]) => ({ name, value }));


        res.json(resultadoFinal);

    }
    catch (error) {
        console.log("Hubo un problema");
    }
}


//recuperar leads por vendedor


exports.getVendorAcomulado = async (req, res) => {
    try {
        const leads = await Lead.find();

        const conteoPorLeadOrigin = leads.reduce( (conteo, lead) => {
            
            
            const leadOrigin = lead.leadVendor;

            conteo[leadOrigin] = (conteo[leadOrigin] || 0) + 1;

            return conteo;
            
        }, {});

        const resultadoFinal = Object.entries(conteoPorLeadOrigin).map(([name, value]) => ({ name, value }));


        res.json(resultadoFinal);

    }
    catch (error) {
        console.log("Hubo un problema");
    }
}


/*Proceso de avanzar leads*/

exports.anvanzarLead = async (req, res) => {
    const leadId = req.body.id;
  console.log(req.body.id)

  try {
    const lead = await Lead.findById(leadId);
    if (!lead) {
      return res.status(404).json({ error: 'Lead no encontrado' });
    }

    const estadosSecuenciales = ['EN PROCESO', 'APARTADO', 'CONTRATO GENERADO', 'FIRMADO', 'VIVIENDA ENTREGADA']; 

    const indiceActual = estadosSecuenciales.indexOf(lead.leadStatus);

    if (indiceActual !== -1 && indiceActual < estadosSecuenciales.length - 1) {
      lead.leadStatus = estadosSecuenciales[indiceActual + 1];

      await lead.save();

      res.json(lead);
    } else {
      res.status(400).json({ error: 'No hay un próximo estado en la secuencia para este lead.' });
    }
  } catch (error) {
    console.error("Hubo un problema", error);
    res.status(500).json({ error: 'Hubo un problema al actualizar el lead por ID.' });
  }
  };

  exports.getLeadsMes = async (req, res) => {
    try {
        const leads = await Lead.find();

        const conteoPorLeadOrigin = leads.reduce((conteo, lead) => {
            const leadOrigin = lead.currentDate;

            conteo[leadOrigin] = (conteo[leadOrigin] || 0) + 1;

            return conteo;
        }, {});

        const resultadoFinal = Object.entries(conteoPorLeadOrigin).map(([name, value]) => ({ name, value }));


        res.json(resultadoFinal);


    } catch (error) {
        console.log("Hubo un problema", error);
        res.status(500).json({ error: "Hubo un problema al obtener los leads" });
    }
}