const mongoose = require("mongoose");

const GamesSchema = new mongoose.Schema({
    Title:{
        type: String,
        required:true
    },
    Category:{
        type:String,
    },
    Image:{
        type:String
    }
})
module.exports = mongoose.model("games",GamesSchema);
