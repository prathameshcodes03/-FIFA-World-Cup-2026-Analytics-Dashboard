const readCSV = require("../utils/csvReader");

// ================= Get All Teams =================

const getAllTeams = async (req, res) => {

    try {

        const matches = await readCSV();

        const teams = new Set();

        matches.forEach(match => {

            teams.add(match.HOME_TEAM);
            teams.add(match.AWAY_TEAM);

        });

        res.status(200).json({

            success: true,
            totalTeams: teams.size,
            data: [...teams].sort()

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

// ================= Individual Team =================

const getTeamStats = async (req, res) => {

    try {

        const { team } = req.params;

        const matches = await readCSV();

        const teamMatches = matches.filter(match =>

            match.HOME_TEAM.toLowerCase() === team.toLowerCase() ||

            match.AWAY_TEAM.toLowerCase() === team.toLowerCase()

        );

        res.status(200).json({

            success: true,

            team,

            matchesPlayed: teamMatches.length,

            matches: teamMatches

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// ================= Top Scoring Teams =================

const getTopScoringTeams = async (req, res) => {

    try {

        const matches = await readCSV();

        const teamGoals = {};

        matches.forEach(match => {

            const home = match.HOME_TEAM;
            const away = match.AWAY_TEAM;

            teamGoals[home] =

                (teamGoals[home] || 0) + Number(match.HOME_SCORE);

            teamGoals[away] =

                (teamGoals[away] || 0) + Number(match.AWAY_SCORE);

        });

        const data = Object.entries(teamGoals)

            .map(([team, goals]) => ({

                team,

                goals

            }))

            .sort((a, b) => b.goals - a.goals);

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

// ================= Team Wins =================

const getTeamWins = async (req, res) => {

    try {

        const matches = await readCSV();

        const wins = {};

        matches.forEach(match => {

            if (match.MATCH_RESULT === "Home Win") {

                wins[match.HOME_TEAM] =

                    (wins[match.HOME_TEAM] || 0) + 1;

            }

            else if (match.MATCH_RESULT === "Away Win") {

                wins[match.AWAY_TEAM] =

                    (wins[match.AWAY_TEAM] || 0) + 1;

            }

        });

        const data = Object.entries(wins)

            .map(([team, wins]) => ({

                team,

                wins

            }))

            .sort((a, b) => b.wins - a.wins);

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

// ================= Team Losses =================

const getTeamLosses = async (req, res) => {

    try {

        const matches = await readCSV();

        const losses = {};

        matches.forEach(match => {

            if (match.MATCH_RESULT === "Home Win") {

                losses[match.AWAY_TEAM] =

                    (losses[match.AWAY_TEAM] || 0) + 1;

            }

            else if (match.MATCH_RESULT === "Away Win") {

                losses[match.HOME_TEAM] =

                    (losses[match.HOME_TEAM] || 0) + 1;

            }

        });

        const data = Object.entries(losses)

            .map(([team, losses]) => ({

                team,

                losses

            }))

            .sort((a, b) => b.losses - a.losses);

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

// ================= Goal Difference =================

const getGoalDifference = async (req, res) => {

    try {

        const matches = await readCSV();

        const teams = {};

        matches.forEach(match => {

            const home = match.HOME_TEAM;
            const away = match.AWAY_TEAM;

            if (!teams[home]) {

                teams[home] = {

                    scored: 0,

                    conceded: 0

                };

            }

            if (!teams[away]) {

                teams[away] = {

                    scored: 0,

                    conceded: 0

                };

            }

            teams[home].scored += Number(match.HOME_SCORE);

            teams[home].conceded += Number(match.AWAY_SCORE);

            teams[away].scored += Number(match.AWAY_SCORE);

            teams[away].conceded += Number(match.HOME_SCORE);

        });

        const data = Object.entries(teams)

            .map(([team, stats]) => ({

                team,

                goalDifference:

                    stats.scored - stats.conceded

            }))

            .sort((a, b) => b.goalDifference - a.goalDifference);

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

// ================= Average Possession =================

const getAveragePossession = async (req, res) => {

    try {

        const matches = await readCSV();

        const possession = {};

        matches.forEach(match => {

            if (!possession[match.HOME_TEAM]) {

                possession[match.HOME_TEAM] = {

                    total: 0,

                    games: 0

                };

            }

            if (!possession[match.AWAY_TEAM]) {

                possession[match.AWAY_TEAM] = {

                    total: 0,

                    games: 0

                };

            }

            possession[match.HOME_TEAM].total += Number(match.HOME_POSSESSION);

            possession[match.HOME_TEAM].games++;

            possession[match.AWAY_TEAM].total += Number(match.AWAY_POSSESSION);

            possession[match.AWAY_TEAM].games++;

        });

        const data = Object.entries(possession)

            .map(([team, stats]) => ({

                team,

                possession:

                    Number((stats.total / stats.games).toFixed(2))

            }))

            .sort((a, b) => b.possession - a.possession);

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

    getAllTeams,

    getTeamStats,

    getTopScoringTeams,

    getTeamWins,

    getTeamLosses,

    getGoalDifference,

    getAveragePossession

};