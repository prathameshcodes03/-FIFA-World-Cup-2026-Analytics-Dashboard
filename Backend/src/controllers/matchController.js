const readCSV = require("../utils/csvReader");

// Get All Matches
const getAllMatches = async (req, res) => {
    try {
        const matches = await readCSV();

        res.status(200).json({
            success: true,
            totalMatches: matches.length,
            data: matches
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Matches By Team
const getMatchesByTeam = async (req, res) => {

    try {

        const { team } = req.params;

        const matches = await readCSV();

        const filteredMatches = matches.filter(match =>
            match.HOME_TEAM.toLowerCase() === team.toLowerCase() ||
            match.AWAY_TEAM.toLowerCase() === team.toLowerCase()
        );

        res.status(200).json({
            success: true,
            totalMatches: filteredMatches.length,
            data: filteredMatches
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get Matches By Round
const getMatchesByRound = async (req, res) => {

    try {

        const { round } = req.params;

        const matches = await readCSV();

        const filteredMatches = matches.filter(match =>
            match.ROUND.toLowerCase() === round.toLowerCase()
        );

        res.status(200).json({
            success: true,
            totalMatches: filteredMatches.length,
            data: filteredMatches
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    getAllMatches,
    getMatchesByTeam,
    getMatchesByRound
};