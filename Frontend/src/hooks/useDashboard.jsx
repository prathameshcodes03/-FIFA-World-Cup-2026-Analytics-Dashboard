import { useEffect, useState } from "react";
import API from "../services/api";

const useDashboard = () => {

    const [dashboard, setDashboard] = useState(null);
    const [goalsRound, setGoalsRound] = useState([]);
    const [results, setResults] = useState([]);
    const [homeAwayGoals, setHomeAwayGoals] = useState([]);
    const [topScoring, setTopScoring] = useState([]);
    const [wins, setWins] = useState([]);
    const [goalDifference, setGoalDifference] = useState([]);
    const [possession, setPossession] = useState([]);
    const [teamLosses, setTeamLosses] = useState([]);
    const [matchesRound, setMatchesRound] = useState([]);
    const [attendanceRound, setAttendanceRound] = useState([]);
    const [topAttendance, setTopAttendance] = useState([]);
    const [topGoalMatches, setTopGoalMatches] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {

                setLoading(true);
                setError(null);

                const responses = await Promise.allSettled([

                    API.get("/stats/dashboard"),

                    API.get("/stats/goals-round"),

                    API.get("/stats/results"),

                    API.get("/stats/home-away-goals"),

                    API.get("/teams/top-scoring"),

                    API.get("/teams/wins"),

                    API.get("/teams/goal-difference"),

                    API.get("/teams/possession"),

                    API.get("/teams/losses"),

                    API.get("/stats/matches-round"),

                    API.get("/stats/attendance-round"),

                    API.get("/stats/top-attendance"),

                    API.get("/stats/top-goals")

                ]);

                const [
                    dashboardRes,
                    goalsRes,
                    resultsRes,
                    homeAwayRes,
                    topScoringRes,
                    winsRes,
                    goalDifferenceRes,
                    possessionRes,
                    teamLossesRes,
                    matchesRoundRes,
                    attendanceRoundRes,
                    topAttendanceRes,
                    topGoalMatchesRes
                ] = responses;

                // Dashboard
                if (dashboardRes.status === "fulfilled") {
                    setDashboard(dashboardRes.value.data);
                }

                // Goals by round
                if (goalsRes.status === "fulfilled") {
                    setGoalsRound(goalsRes.value.data?.data ?? []);
                }

                // Match results
                if (resultsRes.status === "fulfilled") {
                    setResults(resultsRes.value.data?.data ?? []);
                }

                // Home vs away goals
                if (homeAwayRes.status === "fulfilled") {
                    setHomeAwayGoals(
                        homeAwayRes.value.data?.data ?? []
                    );
                }

                // Top scoring teams
                if (topScoringRes.status === "fulfilled") {
                    setTopScoring(
                        topScoringRes.value.data?.data ?? []
                    );
                }

                // Team wins
                if (winsRes.status === "fulfilled") {
                    setWins(
                        winsRes.value.data?.data ?? []
                    );
                }

                // Goal difference
                if (goalDifferenceRes.status === "fulfilled") {
                    setGoalDifference(
                        goalDifferenceRes.value.data?.data ?? []
                    );
                }

                // Possession
                if (possessionRes.status === "fulfilled") {
                    setPossession(
                        possessionRes.value.data?.data ?? []
                    );
                }

                // Team losses
                if (teamLossesRes.status === "fulfilled") {
                    setTeamLosses(
                        teamLossesRes.value.data?.data ?? []
                    );
                }

                // Matches by round
                if (matchesRoundRes.status === "fulfilled") {
                    setMatchesRound(
                        matchesRoundRes.value.data?.data ?? []
                    );
                }

                // Attendance by round
                if (attendanceRoundRes.status === "fulfilled") {
                    setAttendanceRound(
                        attendanceRoundRes.value.data?.data ?? []
                    );
                }

                // Top attendance
                if (topAttendanceRes.status === "fulfilled") {
                    setTopAttendance(
                        topAttendanceRes.value.data?.data ?? []
                    );
                }

                // Matches with most goals
                if (topGoalMatchesRes.status === "fulfilled") {
                    setTopGoalMatches(
                        topGoalMatchesRes.value.data?.data ?? []
                    );
                }

                // Check failed requests
                const failedRequests = responses.filter(
                    (response) => response.status === "rejected"
                );

                if (failedRequests.length > 0) {

                    console.error(
                        "Some dashboard API requests failed:",
                        failedRequests
                    );

                    setError(
                        "Some dashboard data could not be loaded."
                    );
                }

            } catch (err) {

                console.error(
                    "Dashboard API error:",
                    err
                );

                setError(
                    "Unable to load dashboard data."
                );

            } finally {

                setLoading(false);

            }
        };

        fetchData();

    }, []);

    return {

        dashboard,

        goalsRound,

        results,

        homeAwayGoals,

        topScoring,

        wins,

        goalDifference,

        possession,

        teamLosses,

        matchesRound,

        attendanceRound,

        topAttendance,

        topGoalMatches,

        loading,

        error

    };

};

export default useDashboard;