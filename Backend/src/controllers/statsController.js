const readCSV = require("../utils/csvReader");

// ================= Dashboard Statistics =================

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

            averageAttendance: Math.round(totalAttendance / matches.length)

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Goals Per Round =================

const getGoalsPerRound = async (req, res) => {

    try {

        const matches = await readCSV();

        const roundMap = {};

        matches.forEach(match => {

            const round = match.ROUND;

            const goals = Number(match.TOTAL_GOALS) || 0;

            if (!roundMap[round]) {

                roundMap[round] = 0;

            }

            roundMap[round] += goals;

        });

        const data = Object.keys(roundMap).map(round => ({

            round,

            goals: roundMap[round]

        }));

        res.status(200).json({

            success: true,

            data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Goal Statistics =================

const getGoalStats = async (req, res) => {

    try {

        const matches = await readCSV();

        const goals = matches
            .map(match => ({

                match: `${match.HOME_TEAM} vs ${match.AWAY_TEAM}`,

                goals: Number(match.TOTAL_GOALS)

            }))
            .sort((a, b) => b.goals - a.goals);

        res.status(200).json({

            success: true,

            data: goals

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Attendance Statistics =================

const getAttendanceStats = async (req, res) => {

    try {

        const matches = await readCSV();

        const attendance = matches
            .map(match => ({

                match: `${match.HOME_TEAM} vs ${match.AWAY_TEAM}`,

                attendance: Number(match.ATTENDANCE)

            }))
            .sort((a, b) => b.attendance - a.attendance);

        res.status(200).json({

            success: true,

            data: attendance

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Result Distribution =================

const getResultDistribution = async (req, res) => {

    try {

        const matches = await readCSV();

        const resultMap = {};

        matches.forEach(match => {

            const result = match.MATCH_RESULT;

            resultMap[result] = (resultMap[result] || 0) + 1;

        });

        const data = Object.keys(resultMap).map(result => ({

            result,

            count: resultMap[result]

        }));

        res.status(200).json({

            success: true,

            data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Home vs Away Goals =================

const getHomeAwayGoals = async (req, res) => {

    try {

        const matches = await readCSV();

        let homeGoals = 0;
        let awayGoals = 0;

        matches.forEach(match => {

            homeGoals += Number(match.HOME_SCORE) || 0;
            awayGoals += Number(match.AWAY_SCORE) || 0;

        });

        res.status(200).json({

            success: true,

            data: [

                {

                    team: "Home Goals",

                    goals: homeGoals

                },

                {

                    team: "Away Goals",

                    goals: awayGoals

                }

            ]

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Team Participation =================

const getTeamParticipation = async (req, res) => {

    try {

        const matches = await readCSV();

        const teamMap = {};

        matches.forEach(match => {

            const home = match.HOME_TEAM;
            const away = match.AWAY_TEAM;

            teamMap[home] = (teamMap[home] || 0) + 1;
            teamMap[away] = (teamMap[away] || 0) + 1;

        });

        const data = Object.keys(teamMap)
            .map(team => ({

                team,

                matches: teamMap[team]

            }))
            .sort((a, b) => b.matches - a.matches);

        res.status(200).json({

            success: true,

            data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Top Goal Matches =================

const getTopGoalMatches = async (req, res) => {

    try {

        const matches = await readCSV();

        const data = matches
            .map(match => ({

                match: `${match.HOME_TEAM} vs ${match.AWAY_TEAM}`,

                goals: Number(match.TOTAL_GOALS)

            }))
            .sort((a, b) => b.goals - a.goals)
            .slice(0, 10);

        res.status(200).json({

            success: true,

            data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




const getMatchesByRound = async (req, res) => {

    try {

        const matches = await readCSV();

        const rounds = {};

        matches.forEach(match => {

            rounds[match.ROUND] = (rounds[match.ROUND] || 0) + 1;

        });

        const data = Object.entries(rounds).map(([round, matches]) => ({

            round,

            matches

        }));

        res.status(200).json({

            success: true,

            data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


const getAttendanceByRound = async (req, res) => {

    try {

        const matches = await readCSV();

        const attendance = {};

        matches.forEach(match => {

            const round = match.ROUND;

            attendance[round] =

                (attendance[round] || 0) +

                Number(match.ATTENDANCE);

        });

        const data = Object.entries(attendance)

            .map(([round, attendance]) => ({

                round,

                attendance

            }));

        res.status(200).json({

            success: true,

            data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



const getTopAttendance = async (req, res) => {

    try {

        const matches = await readCSV();

        const data = matches

            .map(match => ({

                match:

                    `${match.HOME_TEAM} vs ${match.AWAY_TEAM}`,

                attendance:

                    Number(match.ATTENDANCE)

            }))

            .sort((a, b) =>

                b.attendance - a.attendance

            )

            .slice(0, 10);

        res.status(200).json({

            success: true,

            data

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {
    getDashboardStats,
    getGoalStats,
    getAttendanceStats,
    getGoalsPerRound,
    getMatchesByRound,
    getAttendanceByRound,
    getTopAttendance,
    getTopGoalMatches,
    getResultDistribution,
    getHomeAwayGoals,
    getTeamParticipation
};