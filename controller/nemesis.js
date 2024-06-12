const moviesModel = require("../Models/movies");
const GamesModel = require("../Models/games");
const DressModel = require("../Models/Dress");

const AuthService = require('../services/auth.service');
const AuthServiceInstance = new AuthService()

const movie = async(req,res) =>{
    const {Title,Category,Image,Link} = req.body;
    try{
        const newMovie = await AuthServiceInstance.createMovie(Title,Category,Image,Link);
        res.json(newMovie);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("error in creating movie");
    }
};


const dress = async(req,res) =>{
    const {Title,Category,Image,Link} = req.body;
    try{
        const newDress = await AuthServiceInstance.createDress(Title,Category,Image,Link);
        res.json(newDress);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("error in creating dress");
    }
};

const games = async(req,res)=>{
    const {Title,Category,Image,Link} = req.body;
    try{
        const newGames = await AuthServiceInstance.createGame(Title,Category,Image,Link);
        res.json(newGames);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("error in creating games")
    }
}

const dressdata = async(req,res)=>{
    try{
        const data = await DressModel.find({});
        res.status(200).json(data);
    }
    catch(err){
        res.status(400).json({message: "not able to find data"});
    }

}

const moviedata = async(req,res)=>{
    try{
        const mdata = await moviesModel.find({});
        res.status(200).json(mdata);
    }
    catch(err){
        res.status(400).json({message: "not able to find movie"});
    }
}

const gamesdata = async(req,res)=>{
    try{
        const gdata = await GamesModel.find({});
        res.status(200).json(gdata);
    }
    catch(err){
        res.status(400).json({message: "not able to find game"});
    }
}

module.exports = {movie,dress,games,dressdata,moviedata,gamesdata};