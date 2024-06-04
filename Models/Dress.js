const mongoose = require("mongoose");

const DressSchema = new mongoose.Schema({
        Title:{
        type:String,
    },
    Category:{
        type:String
    },
    Image:{
        type:String
    }
})

module.exports = mongoose.model("dress", DressSchema);