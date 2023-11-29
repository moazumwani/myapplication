import React from "react";
import "./linechart.css";
import { PieChart, Pie, Tooltip } from "recharts";

const PieCharts = () => {
  const data = [
    { name: "United States", value: 400 },
    { name: "Italy", value: 200 },
    { name: "Others", value: 400 },
  ];
  const dataTB = [
    {
      source: "GitHub.com",
      visitors: 3500,
      spend: 1000,
      Sales: 258,
      Conversion: "1.1%",
    },
    {
      source: "Twitter",
      visitors: 4000,
      spend: 1500,
      Sales: 500,
      Conversion: "20%",
    },
    {
      source: " Google",
      visitors: 4500,
      spend: 800,
      Sales: 600,
      Conversion: "2.3%",
    },
    {
      source: "Meta",
      visitors: 4500,
      spend: 1200,
      Sales: 650,
      Conversion: "4.5%",
    },
    {
      source: "Indiahackers.com",
      visitors: 4500,
      spend: 2000,
      Sales: 750,
      Conversion: "6.2%",
    },
  ];
  // console.log(data);

  return (
    <div className="container-pie-table">
     <div className="container-piechart">
      
     <h1  className="text-xl font-bold mb-4 mx-auto">Top Countries</h1>

    <div className="piechart-wrapper">
      <PieChart width={300} height={250}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={100}
          cy={140}
          outerRadius={90}
          fill="#8884d8"
        />
        <Tooltip />
      </PieChart>

      <div className="legend">
        <ul className="legend-list">
          {data.map((entry, index) => (
            <li key={index} className="legend-item">
              <span className="legend-bullet">&#8226;</span>
              <span className="legend-label">{entry.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

      <div className="container-table relative overflow-x-auto ">
        <table className="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400" style={{ width: "100%" }}>
        <caption className="text-xl text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 mb-1">
            Top Channels
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Source</th>
              <th scope="col" className="px-6 py-3">Visitors</th>
              <th scope="col" className="px-6 py-3">Spend ($)</th>
              <th scope="col" className="px-6 py-3">Sales</th>
              <th scope="col" className="px-6 py-3">Conversion</th>
            </tr>
          </thead>
          <tbody>
            {dataTB.map((row, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <td class="px-6 py-4">{row.source}</td>
                <td class="px-6 py-4">{row.visitors}</td>
                <td class="px-6 py-4">${row.spend}</td>
                <td class="px-6 py-4">{row.Sales}</td>
                <td class="px-6 py-4">{row.Conversion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PieCharts;
