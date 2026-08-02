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

        <div className="bg-white rounded-xl shadow-lg p-5">

            <h2 className="text-xl font-semibold mb-5">

                Match Result Distribution

            </h2>

            <ResponsiveContainer width="100%" height={350}>

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="count"

                        nameKey="result"

                        outerRadius={120}

                        label

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

                    <Legend/>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

};

export default ResultChart;