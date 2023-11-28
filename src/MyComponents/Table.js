// Table.js
import React from 'react';
// import ReactSalesFlag from 'react-Sales-flag';

const Table = () => {
  const data = [
    { source:"GitHub.com", visitors: 3500, spend: 1000, Sales: 258,Conversion:"1.1%" },
    { source:"Twitter", visitors: 4000, spend: 1500, Sales: 500,Conversion:"20%" },
    { source:" Google", visitors: 4500, spend: 800, Sales: 600,Conversion:"2.3%" },
    { source: "Meta", visitors:4500, spend: 1200, Sales: 650,Conversion:"4.5%" },
    { source:"Indiahackers.com", visitors:4500, spend: 2000, Sales: 750 ,Conversion:"6.2%"},
  ];

  return (
    <div>
<h2><b>Top Channels</b></h2>
<table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>source</th>
          <th>visitors</th>
          <th>Spend ($)</th>
          <th>Sales</th>
          <th>Conversion</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.source}</td>
            <td>{row.visitors}</td>
            <td>${row.spend}</td>
            <td>{row.Sales}</td>
            <td>{row.Conversion}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
