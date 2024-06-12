const express = require("express");
const router = express.Router();
const nemesis = require("../controller/nemesis");

router.post("/movies",nemesis.movie);
router.post("/dress",nemesis.dress);
router.post("/games",nemesis.games);
router.get("/dress/data",nemesis.dressdata)

module.exports = router;