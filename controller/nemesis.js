const moviesModel = require("../Models/movies");
const GamesModel = require("../Models/games");
const DressModel = require("../Models/Dress");

const AuthService = require('../services/auth.service');
const AuthServiceInstance = new AuthService()

const movie = async(req,res) =>{
    const {Title,Category,Image} = req.body;
    try{
        const newMovie = await AuthServiceInstance.createMovie(Title,Category,Image);
        res.json(newMovie);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("error in creating movie");
    }
};


const dress = async(req,res) =>{
    const {Title,category,Image} = req.body;
    try{
        const newDress = await AuthServiceInstance.createDress(Title,category,Image);
        res.json(newDress);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("error in creating dress");
    }
};

const games = async(req,res)=>{
    const {Title,Category,Image} = req.body;
    try{
        const newGames = await AuthServiceInstance.createGame(Title,Category,Image);
        res.json(newGames);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("error in creating games")
    }
}

module.exports = {movie,dress,games};