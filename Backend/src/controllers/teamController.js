const readCSV = require("../utils/csvReader");

// Get All Teams
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

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Get Individual Team Statistics
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

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    getAllTeams,

    getTeamStats

};