import React from "react";
import "./linechart.css";
import {
  LineChart,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Legend,
  Line,
} from "recharts";

const LineCharts = () => {
  

  const data = [
    {
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // console.log(data);

  return (
    <div className="container ">
      
        <div className="linechart1  ">
          <span2>
            <h2>Acne Plus</h2>
            <p2>Sales</p2>
            <h3>$24.780</h3>
          </span2>
          <LineChart
            width={360}
            height={260}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis height={60} />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>

        <div className="linechart2">
          <h2>Acne Advanced</h2>
          <p2>Sales</p2>
          <h3>$17.780</h3>
          <LineChart
            width={360}
            height={260}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={60} />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* <LineChart 
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart> */}

        <div className="linechart3">
          <h2>Acne Professional</h2>
          <p2>Sales</p2>
          <h3>$9.780</h3>
          <LineChart
            width={360}
            height={260}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={60} />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
     
    </div>
  );
};
export default LineCharts;
