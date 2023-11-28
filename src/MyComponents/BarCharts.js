import React from "react";
import "./linechart.css";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
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


      
    return (
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
    );
};
 
export default BarCharts;