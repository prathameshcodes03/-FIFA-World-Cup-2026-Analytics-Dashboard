const express = require("express");

const router = express.Router();

const {
    getAllMatches,
    getMatchesByTeam,
    getMatchesByRound
} = require("../controllers/matchController");

router.get("/", getAllMatches);

router.get("/team/:team", getMatchesByTeam);

router.get("/round/:round", getMatchesByRound);

module.exports = router;