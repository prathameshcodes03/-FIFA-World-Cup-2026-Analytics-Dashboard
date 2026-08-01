const express = require("express");

const router = express.Router();

const {

    getAllTeams,

    getTeamStats

} = require("../controllers/teamController");

router.get("/", getAllTeams);

router.get("/:team/stats", getTeamStats);

module.exports = router;