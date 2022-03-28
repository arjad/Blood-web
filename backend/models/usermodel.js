const mongoose = require("mongoose");

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
    }    
})
//now create collection
const user = new mongoose.model("user-col", usermodel);
module.exports = user;
