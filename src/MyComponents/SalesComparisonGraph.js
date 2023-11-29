import React from "react";
import "./linechart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const SalesComparisonGraph = () => {
  // Sample data (replace this with your actual sales data)
  const previousData = [
    { name: "Jan", sales: 3000 },
    { name: "Feb", sales: 5000 },
    { name: "Mar", sales: 8000 },
    { name: "Apr", sales: 6000 },
    { name: "May", sales: 9000 },
    { name: "Jun", sales: 7000 },
  ];

  const currentData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 5500 },
    { name: "Mar", sales: 7500 },
    { name: "Apr", sales: 6500 },
    { name: "May", sales: 8500 },
    { name: "Jun", sales: 8000 },
  ];
  const dollarFormatter = (value) => `$${value}`;
  const data = [
    { name: "Jan 23", sales: 1000, refunds: 200 },
    { name: "Feb 23", sales: 100, refunds: 900 },
    { name: "Mar 23", sales: 1500, refunds: 800 },
    { name: "Apr 23", sales: 1200, refunds: 1300 },
    { name: "May 23", sales: 1500, refunds: 900 },
    { name: "Jun 23", sales: 1500, refunds: 1800 },
    { name: "JUL 23", sales: 500, refunds: 1300 },
  ];

  return (
    <div className="container-bar-sales">
      <div className="container-BarChart">
        <b>Sales Vs Refunds</b>
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
            label={{ value: "", angle: -90, position: "insideLeft" }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" stackId="a" fill="#8884d8" />
          <Bar dataKey="refunds" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="container-salesComp">
        <h3>
          <b>Sales over time(all stores)</b>
        </h3>
        <LineChart
          width={450}
          height={260}
          data={previousData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={dollarFormatter} />
          <Tooltip formatter={dollarFormatter} />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            name="Previous Sales"
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#82ca9d"
            name="Current Sales"
            data={currentData}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default SalesComparisonGraph;
