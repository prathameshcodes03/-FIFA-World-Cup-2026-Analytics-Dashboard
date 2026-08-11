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

        <section className="min-w-0 overflow-hidden rounded-xl bg-white p-4 text-slate-900 shadow-lg sm:p-5">

            <h2 className="mb-4 text-lg font-semibold sm:mb-5 sm:text-xl">
                {title}
            </h2>

            <div className="h-64 sm:h-80 lg:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">

                <BarChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 4 }}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey={xKey} tick={{ fontSize: 11 }} interval="preserveStartEnd" />

                    <YAxis />

                    <Tooltip />

                    <Bar dataKey={yKey} radius={[8, 8, 0, 0]} />

                </BarChart>

            </ResponsiveContainer>
            </div>

        </section>

    );

};

export default RoundBarChart;
