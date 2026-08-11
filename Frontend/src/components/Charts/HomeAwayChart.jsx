import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Tooltip,
    Cell,
    Legend
} from "recharts";

const COLORS=[

"#1e40af",

"#f59e0b"

];

const HomeAwayChart=({data})=>{

return(

<section className="min-w-0 overflow-hidden rounded-xl bg-white p-4 text-slate-900 shadow-lg sm:p-5">

<h2 className="mb-4 text-lg font-semibold sm:mb-5 sm:text-xl">

Home vs Away Goals

</h2>

<div className="h-64 sm:h-80 lg:h-[350px]">
<ResponsiveContainer width="100%" height="100%">

<PieChart>

<Pie

data={data}

dataKey="goals"

nameKey="team"

outerRadius="72%"

label={({ percent }) => `${Math.round(percent * 100)}%`}

>

{

data.map((item,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

))

}

</Pie>

<Legend wrapperStyle={{ fontSize: 12 }}/>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</section>

)

}

export default HomeAwayChart;
