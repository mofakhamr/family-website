"use client";

import React from 'react';

import ReactFlow, { Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

// Add the initial data 
import { nodes as initialNodes, edges as initialEdges } from './TreeApp';

// Add a custom node for better handles
import CustomNode from './CustomNode';
const nodeTypes = {
  custom: CustomNode,
};


const minimapStyle = {
  height: 180,
};
console.log(minimapStyle);

export default function App() {
  return (
    <div
      style={{ width: '90vw', height: '90vh' }}
    >
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap 
        nodeStrokeWidth={3} 
        pannable={true}
        zoomable={true}
      />

      </ReactFlow>
    </div>
  );
}
