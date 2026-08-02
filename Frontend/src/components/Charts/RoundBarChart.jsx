import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

const RoundBarChart = ({ title, data, xKey, yKey }) => {

    return (

        <div className="bg-white rounded-xl shadow-lg p-5">

            <h2 className="text-xl font-semibold mb-5">
                {title}
            </h2>

            <ResponsiveContainer width="100%" height={350}>

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey={xKey} />

                    <YAxis />

                    <Tooltip />

                    <Bar dataKey={yKey} radius={[8, 8, 0, 0]} />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

};

export default RoundBarChart;