// DecisionTree.js
import React from 'react';
import Tree from 'react-d3-tree';
import "./linechart.css";
const treeData = {
  name: 'Decision Tree',
  children: [
    {
      name: 'Premium 30%|45%',
    },
    {
      name: 'MainStream 30%|45%',
    },
    {
      name: 'Low Budget 30%|45%',
      children: [
        {
          name: 'Local',
          children: [
            { name: 'Brand 1' },
            { name: 'Brand 2' },
            { name: 'Additional 1' },
            { name: 'Additional 2' },
            { name: 'Additional 3' },
          ],
        },
        {
          name: 'International',
          children: [
            { name: 'Brand 3' },
            { name: 'Brand 4' },
            { name: 'Brand 5' },
            { name: 'Additional 4' },
            { name: 'Additional 5' },
            { name: 'Additional 6' },
          ],
        },
        {
          name: 'Region',
        },
      ],
    },
    {
      name: 'Entry 30%|45%',
    },
  ],
};

const DecisionTree = () => {
  const containerStyles = {
    width: '100%',
    height: '500px',
    border: '1px solid #ccc',
  };

  return (
    <div className='container-Styles' >
      <Tree data={treeData} orientation="vertical" />
    </div>
  );
};

export default DecisionTree;
