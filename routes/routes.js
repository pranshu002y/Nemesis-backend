const express = require("express");
const router = express.Router();
const nemesis = require("../controller/nemesis");

router.post("/movies",nemesis.movie);
router.post("/dress",nemesis.dress);
router.post("/games",nemesis.games);

module.exports = router;