require("dotenv").config();
const mongoose = require("mongoose");

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const connectDatabase = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL,connectionParams);
        console.log("database connected");
    }
    catch(err){
        console.log(err);
        throw err;
    }
};
module.exports = connectDatabase;