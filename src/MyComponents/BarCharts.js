import React from "react";
import "./linechart.css";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend,AreaChart, Area} from 'recharts';
const BarCharts = () => {
    const data = [
        {
          name: 'Dec 23',
          direct: 4000,
          Indirect: 2400,
          amt: 2400,
        },
        {
          name: 'Jan 23',
          direct: 3000,
          Indirect: 1398,
          amt: 2210,
        },
        {
          name: 'Feb 23',
          direct: 2000,
          Indirect: 9800,
          amt: 2290,
        },
        {
          name: 'Mar 23',
          direct: 2780,
          Indirect: 3908,
          amt: 2000,
        },
        {
          name: 'Apr 23',
          direct: 1890,
          Indirect: 4800,
          amt: 2181,
        },
        {
          name: 'May 23',
          direct: 2390,
          Indirect: 3800,
          amt: 2500,
        },
        {
          name: 'Jun 23',
          direct: 3490,
          Indirect: 4300,
          amt: 2100,
        },
      ];
      const dataSAC = [
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
  

      
    return (
        <div className="conatiner-BA-SAC">
          <div className="container-Barcharts">
            
            <h4><b>Direct vs Indirect</b></h4>
    <BarChart
      width={450}
      height={260}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
    label={{ value: '$', angle: -90, position: 'insideLeft' }}
    tickFormatter={(value) => `$${value}`}
  />
      <Tooltip />
      <Legend />
      <Bar dataKey="Indirect" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
      <Bar dataKey="direct" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
    </BarChart>
  
    </div>

    <div className='container-StackedAreachart'>
       
       <h3><b>AVG Order Value. <br/>$72 </b></h3>
       {/* <h4><b>$72</b></h4> */}
       <AreaChart
         width={450}
         height={250}
         data={dataSAC}
         margin={{
          top: 5,
        right: 30,
        left: 20,
        bottom: 5,
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

        </div>
    );
};
 
export default BarCharts;