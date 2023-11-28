import React from "react";
import "./linechart.css";
import { PieChart, Pie, Tooltip} from "recharts";

const PieCharts = () => {
  const data = [
    { name: "United States", value: 400 },
    { name: "Italy", value: 200 },
    { name: "Others", value: 400 },
   
  ];
  console.log(data)

  return (
    <div className="container-piechart">
      <h1>Top Countries</h1>
      
        <PieChart width={300} height={250}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={120}
            cy={130}
            outerRadius={70}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
      
    </div>
  );
};
export default PieCharts;
