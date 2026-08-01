const readCSV = require("../utils/csvReader");

// Dashboard Statistics
const getDashboardStats = async (req, res) => {

    try {

        const matches = await readCSV();

        let totalGoals = 0;

        let totalAttendance = 0;

        matches.forEach(match => {

            totalGoals += Number(match.TOTAL_GOALS) || 0;

            totalAttendance += Number(match.ATTENDANCE) || 0;

        });

        res.status(200).json({

            success: true,

            totalMatches: matches.length,

            totalGoals,

            averageGoals: (totalGoals / matches.length).toFixed(2),

            totalAttendance,

            averageAttendance:
                Math.round(totalAttendance / matches.length)

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Goal Statistics
const getGoalStats = async (req, res) => {

    try {

        const matches = await readCSV();

        const goals = matches.map(match => ({

            match:

                `${match.HOME_TEAM} vs ${match.AWAY_TEAM}`,

            goals: Number(match.TOTAL_GOALS)

        }));

        res.status(200).json({

            success: true,

            data: goals

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Attendance Statistics
const getAttendanceStats = async (req, res) => {

    try {

        const matches = await readCSV();

        const attendance = matches.map(match => ({

            match:

                `${match.HOME_TEAM} vs ${match.AWAY_TEAM}`,

            attendance: Number(match.ATTENDANCE)

        }));

        res.status(200).json({

            success: true,

            data: attendance

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    getDashboardStats,

    getGoalStats,

    getAttendanceStats

};