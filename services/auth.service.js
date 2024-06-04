const moviesModel = require("../Models/movies");
const DressModel = require("../Models/Dress");
const GamesModel = require("../Models/games");

class AuthService{
    
    createMovie = async(Title,Category,Image,Link)=>{
        try{
            let existingMovie = await moviesModel.findOne({Title});

            if(existingMovie){
                return{
                    error:"Movie exists"
                };
            }
            const newMovie = new moviesModel({
                Title,Category,Image,Link
            });
            await newMovie.save();
            return {success :"movie created"};
        } 
        catch(err){
            console.log(err.message);
            return { error: 'Error in creating product' };
        }
    }


    createGame = async(Title,Image,Category,Link)=>{
        try{
            let existingGame = await GamesModel.findOne({Title});
            if(existingGame){
                return{
                    error:"game exist"
                };
            }
            const newGame = new GamesModel({
                Title,Category,Image,Link
            });
            await newGame.save();
            return{success:"Game generated"};
        }
        catch(err){
            console.log(err.message);
            return{error:"error in generating game"}
        }
    }

    createDress = async(Title,Image,Category,Link)=>{
        try{
            let existingDress = await DressModel.findOne({Title});
            if(existingDress){
                return{
                    error:"game exist"
                };
            }
            const newDress = new DressModel({
                Title,Category,Image,Link
            });
            await newDress.save();
            return{success:"dress generated"};
        }
        catch(err){
            console.log(err.message);
            return{error:"error in generating game"}
        }
    }


}
module.exports = AuthService;