// DecisionTree.js
import React from 'react';
import {AnimatedTree, Tree} from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';
import './DecisionTree.css';
// import React from 'react';
// import Tree from 'react-d3-tree';




const myTreeData = [
  {
    name: 'Parent Node',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    nodeSvgShape: {
      shape: 'circle',
      shapeProps: {
        r: 10,
        fill: 'blue',
      },
    },
    children: [
      {
        name: 'Inner Node',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
            width: 20,
            height: 20,
            x: -10,
            y: -10,
            fill: 'red',
          },
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];
console.log(myTreeData)

const DecisionTree = () => {
  return (
    <div className='container-dct' >
      <Tree
        data={myTreeData}
        height={600}
        width={800}
        svgProps={{
          transform: 'rotate(90)',
        }}
        animated
      />
    </div>
  );
};

export default DecisionTree;
