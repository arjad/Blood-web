const mongoose = require("mongoose");
const { string } = require("yup");

//user model
const usermodel = new mongoose.Schema({
    fname:{
        type:String,
    },
    lname:{
        type:String,
    },
    blood:{
        type:String,
    },
    email:{
        type:String,
    },
    pass:{
        type:String,
    },
    phoneno:{
        type:String,
    },
    last_donated:{
        type:String,
    },
    city:{
        type:String,
    },
    country:{
        type:String,
    },
    area:{
        type:String,
    }, 
    country:{
        type:String,
    },
    pucit:{
        type:String
    }
})
//now create collection
const user = new mongoose.model("user-col", usermodel);
module.exports = user;
