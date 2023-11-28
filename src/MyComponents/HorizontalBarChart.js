// HorizontalBarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Reason for Refund', values: [{ value: "Having difficulties using the product", color: '#8884d8' },{ value: 7, color: '#1114d9' }, { value: 5, color: '#82ca9d' },{ value: 10, color: '#85ba7d' },{ value: 13, color: '#62ca9d' }] },
  
];

const HorizontalBarChart = () => {
  return (
    <div width={80} height={30}>
        <BarChart width={600} height={400} data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      {data[0].values.map((entry, index) => (
        <Bar key={index} dataKey={`values[${index}].value`} fill={entry.color} stackId="stack" />
      ))}
    </BarChart>
  
    </div>
    );
};

export default HorizontalBarChart;
