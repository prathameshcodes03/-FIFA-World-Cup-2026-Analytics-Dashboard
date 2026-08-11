import {
    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell,
    Legend
} from "recharts";

const COLORS = [

    "#2563eb",
    "#16a34a",
    "#dc2626"

];

const ResultChart = ({ data }) => {

    return (

        <section className="min-w-0 overflow-hidden rounded-xl bg-white p-4 text-slate-900 shadow-lg sm:p-5">

            <h2 className="mb-4 text-lg font-semibold sm:mb-5 sm:text-xl">

                Match Result Distribution

            </h2>

            <div className="h-64 sm:h-80 lg:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="count"

                        nameKey="result"

                        outerRadius="72%"

                        label={({ percent }) => `${Math.round(percent * 100)}%`}

                    >

                        {

                            data.map((entry,index)=>(

                                <Cell

                                    key={index}

                                    fill={COLORS[index % COLORS.length]}

                                />

                            ))

                        }

                    </Pie>

                    <Legend wrapperStyle={{ fontSize: 12 }} />

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>
            </div>

        </section>

    );

};

export default ResultChart;
