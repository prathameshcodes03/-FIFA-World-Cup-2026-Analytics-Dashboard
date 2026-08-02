import {

ResponsiveContainer,

BarChart,

Bar,

XAxis,

YAxis,

Tooltip,

CartesianGrid

} from "recharts";

const HorizontalBarChart=({

title,

data,

xKey,

yKey

})=>{

return(

<div className="bg-white rounded-xl shadow-lg p-5">

<h2 className="text-xl font-semibold mb-5">

{title}

</h2>

<ResponsiveContainer width="100%" height={350}>

<BarChart

layout="vertical"

data={data.slice(0,10)}

>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis type="number"/>

<YAxis

type="category"

dataKey={yKey}
width={140}

/>

<Tooltip/>

<Bar

dataKey={xKey}

radius={[0,8,8,0]}

/>

</BarChart>

</ResponsiveContainer>

</div>

)

}

export default HorizontalBarChart;