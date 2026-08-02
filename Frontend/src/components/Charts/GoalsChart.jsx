import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

const GoalsChart = ({ data }) => {

    return (

        <div className="bg-white rounded-xl shadow-lg p-5">

            <h2 className="text-xl font-semibold mb-5">

                Goals By Round

            </h2>

            <ResponsiveContainer width="100%" height={350}>

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="round" />

                    <YAxis />

                    <Tooltip />

                    <Bar dataKey="goals" radius={[8,8,0,0]} />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

};

export default GoalsChart;