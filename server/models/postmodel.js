const mongoose = require("mongoose");

// posts model
const proSchema = new mongoose.Schema({
    patient_blood:{
        type:String
    },
    patient_name:{
        type:String
    },
    patient_age:{
        type:String
    },
    when_needed:{
        type:String
    },
    mobile_no:{
        type:String
    },
    mobile_no2:{
        type:String
    },
    blood_units_needed:{
        type:String
    },
    patient_address:{
        type:String
    },
    hospital_name:{
        type:String
    },
    purpose:{
        type:String
    }    
})

//now create collection
const post_model = new mongoose.model("fyp-col", proSchema);
module.exports = post_model;