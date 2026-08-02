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

    useEffect(() => {

        const fetchData = async () => {

            try {

                const results = await Promise.allSettled([

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

                ] = results.map(r => r.status === "fulfilled" ? r.value : null);

                setDashboard(dashboardRes?.data ?? null);

                setGoalsRound(goalsRes?.data?.data ?? []);

                setResults(resultsRes?.data?.data ?? []);

                setHomeAwayGoals(homeAwayRes?.data?.data ?? []);

                setTopScoring(topScoringRes?.data?.data ?? []);

                setWins(winsRes?.data?.data ?? []);

                setGoalDifference(goalDifferenceRes?.data?.data ?? []);

                setPossession(possessionRes?.data?.data ?? []);

                setTeamLosses(teamLossesRes?.data?.data ?? []);

                setMatchesRound(matchesRoundRes?.data?.data ?? []);

                setAttendanceRound(attendanceRoundRes?.data?.data ?? []);

                setTopAttendance(topAttendanceRes?.data?.data ?? []);

                setTopGoalMatches(topGoalMatchesRes?.data?.data ?? []);

                const failed = results.filter(r => r.status === "rejected");

                if (failed.length) {

                    console.log("Some dashboard requests failed:", failed);

                }

            }

            catch (err) {

                console.log(err);

            }

            finally {

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

        loading

    };

};

export default useDashboard;