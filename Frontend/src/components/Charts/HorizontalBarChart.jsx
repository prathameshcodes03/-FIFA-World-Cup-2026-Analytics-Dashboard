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

<section className="min-w-0 overflow-hidden rounded-xl bg-white p-4 text-slate-900 shadow-lg sm:p-5">

<h2 className="mb-4 text-lg font-semibold sm:mb-5 sm:text-xl">

{title}

</h2>

<div className="h-72 sm:h-80 lg:h-[350px]">
<ResponsiveContainer width="100%" height="100%">

<BarChart

layout="vertical"

data={data.slice(0,10)}

margin={{ top: 8, right: 12, left: 0, bottom: 4 }}

>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis type="number"/>

<YAxis

type="category"

dataKey={yKey}
width={90}
tick={{ fontSize: 11 }}
tickFormatter={(value) => value.length > 13 ? `${value.slice(0, 12)}…` : value}

/>

<Tooltip/>

<Bar

dataKey={xKey}

radius={[0,8,8,0]}

/>

</BarChart>

</ResponsiveContainer>

</div>

</section>

)

}

export default HorizontalBarChart;
