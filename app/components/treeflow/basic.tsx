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

export default function App() {
  return (
    <div
      style={{ width: '90vw', height: '80vh' }}
    >
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        // fitView
        defaultViewport={{x: 0, y: 0, zoom: 0.25 }}
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
