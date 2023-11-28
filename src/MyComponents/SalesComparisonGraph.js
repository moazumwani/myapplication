import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SalesComparisonGraph = () => {
  // Sample data (replace this with your actual sales data)
  const previousData = [
    { name: 'Jan', sales: 3000 },
    { name: 'Feb', sales: 5000 },
    { name: 'Mar', sales: 8000 },
    { name: 'Apr', sales: 6000 },
    { name: 'May', sales: 9000 },
    { name: 'Jun', sales: 7000 },
  ];

  const currentData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 5500 },
    { name: 'Mar', sales: 7500 },
    { name: 'Apr', sales: 6500 },
    { name: 'May', sales: 8500 },
    { name: 'Jun', sales: 8000 },
  ];
  const dollarFormatter = (value) => `$${value}`;
  return (
    <div>
<h3><b>Sales over time(all stores)</b></h3>
<LineChart width={600} height={300} data={previousData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={dollarFormatter} />
      <Tooltip formatter={dollarFormatter} />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Previous Sales" />
      <Line type="monotone" dataKey="sales" stroke="#82ca9d" name="Current Sales" data={currentData} />
    </LineChart>
    </div>
   
  );
};

export default SalesComparisonGraph;
