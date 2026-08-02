const express = require("express");

const router = express.Router();

const {

    getAllTeams,

    getTeamStats,

    getTopScoringTeams,

    getTeamWins,

    getTeamLosses,

    getGoalDifference,

    getAveragePossession

} = require("../controllers/teamController");


// Analytics Routes FIRST

router.get("/top-scoring", getTopScoringTeams);

router.get("/wins", getTeamWins);

router.get("/losses", getTeamLosses);

router.get("/goal-difference", getGoalDifference);

router.get("/possession", getAveragePossession);


// Basic Routes

router.get("/", getAllTeams);

router.get("/:team", getTeamStats);

module.exports = router;