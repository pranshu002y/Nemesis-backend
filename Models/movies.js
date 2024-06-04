const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
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
module.exports = mongoose.model("movies",MoviesSchema);
