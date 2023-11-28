// Table.js
import React from 'react';
import ReactCountryFlag from 'react-country-flag';

const CustomerTable = () => {
  const data = [
    { name: 'Maxwell', email: 'Maxwell@gmail.com', spend: 1000, country: 'US' },
    { name: 'Smith', email: 'smith@gmail.com', spend: 1500, country: 'CA' },
    { name: 'Alice Smith', email: 'alice@gmail.com', spend: 800, country: 'GB' },
    { name: 'Bob Johnson', email: 'bob@gmail.com', spend: 1200, country: 'FR' },
    { name: 'Eva Watsom', email: 'evawatson@gmail.com', spend: 2000, country: 'JP' },
  ];

  return (
    <div><b>Customers</b>
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Spend ($)</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>${row.spend}</td>
            <td>
              <ReactCountryFlag countryCode={row.country} svg style={{ width: '1.5em', height: '1.5em' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </div>
  );
};

export default CustomerTable;
