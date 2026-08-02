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

<div className="bg-white rounded-xl shadow-lg p-5">

<h2 className="text-xl font-semibold mb-5">

Home vs Away Goals

</h2>

<ResponsiveContainer width="100%" height={350}>

<PieChart>

<Pie

data={data}

dataKey="goals"

nameKey="team"

outerRadius={120}

label

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

<Legend/>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

)

}

export default HomeAwayChart;