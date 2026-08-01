const express = require("express");

const router = express.Router();

const {

    getDashboardStats,

    getGoalStats,

    getAttendanceStats

} = require("../controllers/statsController");

router.get("/", getDashboardStats);

router.get("/goals", getGoalStats);

router.get("/attendance", getAttendanceStats);

module.exports = router;