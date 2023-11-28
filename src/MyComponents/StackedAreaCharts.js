import React from 'react';
import "./linechart.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';



const StackedAreaCharts = () => {
    const data = [
        {
          name: 'WED 20',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Today',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  

console.log(data)

  return (
    <div className='container-StackedAreachart'>
       
        <h3><b>AVG Order Value</b></h3>
        <h4><b>$72</b></h4>
        <AreaChart
          width={450}
          height={286}
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: 50,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      
    </div>
  );
};
export default StackedAreaCharts;
