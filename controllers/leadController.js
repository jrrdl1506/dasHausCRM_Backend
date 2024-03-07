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


exports.getLeadsApartados = async (req, res) => {
    try {
        const leads = await Lead.find({ leadStatus: "APARTADO" });
        res.json(leads);
    } catch (error) {
        console.log("Hubo un problema", error);
        res.status(500).json({ error: "Hubo un problema al obtener los leads" });
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
        const numeroLeadsApartados = await Lead.countDocuments({ leadStatus: "APARTADO" });

        const porcentajeLeadsApartados = (numeroLeadsApartados / numeroLeads) * 100;

        res.json({ porcentajeLeadsApartados });

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