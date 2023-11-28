// DecisionTree.js
import React from 'react';

const DecisionTree = () => {
  return (
    <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
      {/* Root Node */}
      <ellipse cx="200" cy="50" rx="40" ry="20" fill="#3498db" />
      <text x="200" y="55" fill="#fff" textAnchor="middle" alignmentBaseline="middle">
        Root
      </text>

      {/* Left Node */}
      <ellipse cx="100" cy="150" rx="40" ry="20" fill="#27ae60" />
      <text x="100" y="155" fill="#fff" textAnchor="middle" alignmentBaseline="middle">
        Decision 1
      </text>

      {/* Right Node */}
      <ellipse cx="300" cy="150" rx="40" ry="20" fill="#e74c3c" />
      <text x="300" y="155" fill="#fff" textAnchor="middle" alignmentBaseline="middle">
        Decision 2
      </text>

      {/* Connecting Lines */}
      <line x1="200" y1="70" x2="100" y2="130" stroke="#3498db" strokeWidth="2" />
      <line x1="200" y1="70" x2="300" y2="130" stroke="#3498db" strokeWidth="2" />
    </svg>
  );
};

export default DecisionTree;

