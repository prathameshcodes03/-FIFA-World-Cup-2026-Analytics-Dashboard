const express = require("express");
const router = express.Router();

const {
    getDashboardStats,
    getGoalStats,
    getAttendanceStats,
    getGoalsPerRound,
    getMatchesByRound,
    getAttendanceByRound,
    getTopAttendance,
    getResultDistribution,
    getTopGoalMatches,
    getHomeAwayGoals,
    getTeamParticipation
} = require("../controllers/statsController");

router.get("/dashboard", getDashboardStats);
router.get("/goals", getGoalStats);
router.get("/goals-round", getGoalsPerRound);
router.get("/attendance", getAttendanceStats);
router.get("/top-attendance", getTopAttendance);
router.get("/results", getResultDistribution);
router.get("/home-away-goals", getHomeAwayGoals);
router.get("/team-participation", getTeamParticipation);
router.get("/top-goal-matches", getTopGoalMatches);
router.get("/matches-round", getMatchesByRound);
router.get("/attendance-round", getAttendanceByRound);
router.get("/top-goal-matches", getTopGoalMatches);
router.get("/top-goals", getTopGoalMatches);

module.exports = router;