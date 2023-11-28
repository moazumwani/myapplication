import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const PieCharts = () => {
  const data = [
    { name: "United States", value: 400 },
    { name: "Italy", value: 200 },
    { name: "Others", value: 400 },
   
  ];
  console.log(data)

  return (
    <div>
      <h1>Top Countries</h1>
      <ResponsiveContainer width={400} height={400}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PieCharts;
