import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

import GoalsChart from "../components/charts/GoalsChart";
import ResultChart from "../components/charts/ResultChart";
import HomeAwayChart from "../components/charts/HomeAwayChart";
import HorizontalBarChart from "../components/charts/HorizontalBarChart";
import RoundBarChart from "../components/charts/RoundBarChart";

import useDashboard from "../hooks/useDashboard";

const Dashboard = () => {

    const {

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

    } = useDashboard();

    if (loading) {

        return (

            <h1 className="text-3xl text-center mt-20">

                Loading...

            </h1>

        );

    }

    return (

        <>

            <Navbar />

            <div className="max-w-7xl mx-auto p-8">

                {/* KPI Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <StatCard
                        title="Matches"
                        value={dashboard.totalMatches}
                    />

                    <StatCard
                        title="Goals"
                        value={dashboard.totalGoals}
                    />

                    <StatCard
                        title="Attendance"
                        value={dashboard.totalAttendance}
                    />

                    <StatCard
                        title="Avg Goals"
                        value={dashboard.averageGoals}
                    />

                </div>

                {/* Tournament Analytics */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

                    <GoalsChart data={goalsRound} />

                    <ResultChart data={results} />

                </div>

                <div className="mt-10">

                    <HomeAwayChart data={homeAwayGoals} />

                </div>

                {/* Team Analytics */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

                    <HorizontalBarChart

                        title="Top Scoring Teams"

                        data={topScoring}

                        xKey="goals"

                        yKey="team"

                    />

                    <HorizontalBarChart

                        title="Most Wins"

                        data={wins}

                        xKey="wins"

                        yKey="team"

                    />

                    <HorizontalBarChart

                        title="Most Losses"

                        data={teamLosses}

                        xKey="losses"

                        yKey="team"

                    />

                    <HorizontalBarChart

                        title="Goal Difference"

                        data={goalDifference}

                        xKey="goalDifference"

                        yKey="team"

                    />

                </div>

                {/* Match Analytics */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

                    <HorizontalBarChart

                        title="Average Possession"

                        data={possession}

                        xKey="possession"

                        yKey="team"

                    />

                    <HorizontalBarChart

                        title="Top Attendance Matches"

                        data={topAttendance}

                        xKey="attendance"

                        yKey="match"

                    />

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

                    <RoundBarChart

                        title="Matches By Round"

                        data={matchesRound}

                        xKey="round"

                        yKey="matches"

                    />

                    <RoundBarChart

                        title="Attendance By Round"

                        data={attendanceRound}

                        xKey="round"

                        yKey="attendance"

                    />

                </div>

                <div className="mt-10">

                    <HorizontalBarChart

                        title="Top Goal Matches"

                        data={topGoalMatches}

                        fill="#16A34A"

                        xKey="goals"

                        yKey="match"

                    />

                </div>

            </div>

        </>

    );

};

export default Dashboard;