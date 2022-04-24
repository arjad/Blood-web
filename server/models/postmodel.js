const mongoose = require("mongoose");

// posts model
const proSchema = new mongoose.Schema({
    patient_blood:{
        type:String
    },
    patient_name:{
        type:String
    },
    pucit_roll:{
        type:String
    },
    mobile_no:{
        type:String
    },
    email:{
        type:String
    },
    patient_address:{
        type:String
    },
    patient_city:{
        type:String
    },
    hospital_name:{
        type:String
    },
})

//now create collection
const post_model = new mongoose.model("fyp-col", proSchema);
module.exports = post_model;