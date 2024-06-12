const mongoose = require("mongoose");

const DressSchema = new mongoose.Schema({
    Title:{
        type: String,
        required:true
    },
    Category:{
        type:String,
    },
    Image:{
        type:String
    },
    Link:{
        type:String
    }
})

module.exports = mongoose.model("dress", DressSchema);