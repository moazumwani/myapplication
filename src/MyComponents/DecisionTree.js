// DecisionTree.js
import React from 'react';
import Tree from 'react-d3-tree';

import './linechart.css';

const treeData = {
  name: 'Decision Tree',
  children: [
    {
      name: 'Premium ',
    },
    {
      name: 'MainStream ',
    },
    {
      name: 'Low Budget ',
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
      name: 'Entry ',
    },
  ],
};

const DecisionTree = () => {
 

  const nodeSvgShape = {
    shape: 'rect',
    shapeProps: {
      width: 120,
      height: 30,
      x: -60,
      y: -15,
      fill:'red',
    },
  };

  return (
    <div className='container-styles'>
      <Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: 150, y: 70 }}
        collapsible={false}
        depthFactor={50}
        nodeSvgShape={nodeSvgShape}
      />
    </div>
  );
};

export default DecisionTree;
