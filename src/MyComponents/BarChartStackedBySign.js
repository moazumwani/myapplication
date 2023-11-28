import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan 23', sales: 1000, refunds: 200 },
  { name: 'Feb 23', sales: 100, refunds: 900 },
  { name: 'Mar 23', sales: 1500, refunds: 800 },
  { name: 'Apr 23', sales: 1200, refunds: 1300 },
  { name: 'May 23', sales: 1500, refunds: 900 },
  { name: 'Jun 23', sales: 1500, refunds: 1800 },
  { name: 'JUL 23', sales: 500, refunds: 1300 },
]

const BarChartStackedBySign = () => {
  return (
    <div><b>Sales Vs Refunds</b>
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
        label={{ value: '$', angle: -90, position: 'insideLeft' }}
        tickFormatter={(value) => `$${value}`}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" stackId="a" fill="#8884d8" />
      <Bar dataKey="refunds" stackId="a" fill="#82ca9d" />
    </BarChart>
    </div>
  );
};

export default BarChartStackedBySign;
