import {

    FaFutbol,

    FaUsers,

    FaChartLine,

    FaTrophy,

    FaCalendar

} from "react-icons/fa";

import KpiCard from "./KpiCard";

import SkeletonCard from "./SkeletonCard";

const KpiGrid = ({ stats, loading }) => {

    if (loading) {

        return (

            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5">

                {[...Array(5)].map((_, index) => (

                    <SkeletonCard key={index} />

                ))}

            </div>

        );

    }

    return (

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5">

            <KpiCard

                title="Matches"

                value={stats.totalMatches}

                subtitle="Total matches played"

                icon={<FaCalendar />}

                color="text-blue-400"

            />

            <KpiCard

                title="Goals"

                value={stats.totalGoals}

                subtitle="Tournament goals"

                icon={<FaFutbol />}

                color="text-yellow-400"

            />

            <KpiCard

                title="Avg Goals"

                value={stats.averageGoals}

                subtitle="Goals per match"

                icon={<FaChartLine />}

                color="text-green-400"

            />

            <KpiCard

                title="Attendance"

                value={stats.totalAttendance}

                subtitle="Overall attendance"

                icon={<FaUsers />}

                color="text-purple-400"

            />

            <KpiCard

                title="Avg Attendance"

                value={stats.averageAttendance}

                subtitle="Per match"

                icon={<FaTrophy />}

                color="text-red-400"

            />

        </div>

    );

};

export default KpiGrid;