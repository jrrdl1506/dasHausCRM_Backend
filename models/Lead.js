const mongoose = require('mongoose');
const LeadSchema = mongoose.Schema({
    leadName:{
        type:String,
        requires:true

    },
    leadOrigin:{
        type:String,
        requires:true

    },
    leadEmail:{
        type:String,
        requires:true

    },
    leadNumber:{
        type:String,
        requires:true
    },
    leadModel:{
        type:String,
        requires:true
    },
    leadStatus:{
        type:String,
        requires:true
    }




});

module.exports = mongoose.model('Lead',LeadSchema);