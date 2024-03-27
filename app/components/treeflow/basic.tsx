"use client";

import React from 'react';

// Add ReactFlow
import ReactFlow, { Controls, MiniMap, Position, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

// Get the data from our "json" file
import { familyData as family } from './data.json';

// hot reload throws and error, useMemo can fix it?
// import { useMemo } from 'react';

type treeConfigObject = {
  name: string,
  genDimension: string,
  genAxis: string,
  parentHandleSource: Position,
  parentHandleTarget: Position,
  spouseHandleSource: Position,
  spouseHandleTarget: Position,
  nodeWidth: number,
  nodeWidthGap: number,
  nodeHeight: number,
  nodeHeightGap: number,
}

// I want to both vertical and horizontal options, variablizing it
const TreeConfig: { [key: string]: treeConfigObject } = {
  horizontal: {
    name: 'horizontal',
    genDimension: 'width',
    genAxis: 'x',
    parentHandleSource: Position.Right,
    parentHandleTarget: Position.Left,
    spouseHandleSource: Position.Bottom,
    spouseHandleTarget: Position.Top,
    nodeWidth: 250,
    nodeWidthGap: 75,
    nodeHeight: 100,
    nodeHeightGap: 50,
  },
  vertical: {
    name: 'vertical',
    genDimension: 'height',
    genAxis: 'y',
    // nodeHeight is the generational spacer
    // parental handles are top/bottom
    // spouse handles are left/right
    parentHandleSource: Position.Bottom,
    parentHandleTarget: Position.Top,
    spouseHandleSource: Position.Right,
    spouseHandleTarget: Position.Left,
    nodeWidth: 300,
    nodeWidthGap: 75,
    nodeHeight: 100,
    nodeHeightGap: 125,
  },
}

// Use currentConfig as the config in use
//const currentConfig: treeConfigObject = TreeConfig.vertical;
const currentConfig: treeConfigObject = TreeConfig.horizontal;

const nodeWidth: number = currentConfig.nodeWidth + currentConfig.nodeWidthGap;
const nodeHeight: number = currentConfig.nodeHeight + currentConfig.nodeHeightGap;

let currentGeneration = 1;
let currentSibling = 1;
let allNodes: Node[] = [];
let allEdges: Edge[] = [];

// Edges (connections) need a unique ID.
let edgeId: number = 0;
let children_offset: number = 0;

family.map((item: any, i: number) => {
  // If new generation, flag it as such, reset Sibling count and reset the offset.
  if (item.generation > currentGeneration) {
    currentGeneration = item.generation;
    currentSibling = 1;
    children_offset = 0;
  }

  // Allow a manual offset from each node data definition.
  const offsetX = ('offset' in item && 'x' in item.offset) ? item.offset.x : 0;
  const offsetY = ('offset' in item && 'y' in item.offset) ? item.offset.y : 0;

  // Setup the node/box.
  let node: any = {
    id: item.id,
    position: {},
    data: {
      label: item.id,
      img: "/public.jpg",
      subtitle: item.subtitle,
      dob: item.dob,
      dod: item.dod,
      generation: item.generation,
    },
    type: 'custom',
  };


  switch (currentConfig.name) {
    case 'horizontal':
      node.position.x = Math.round((item.generation - 1) * nodeWidth + offsetX);
      node.position.y = Math.round((currentSibling - 1) * nodeHeight + offsetY) + children_offset;
      break;
    case 'vertical':
      node.position.x = Math.round((currentSibling - 1) * nodeWidth + offsetX) + children_offset;
      node.position.y = Math.round((item.generation - 1) * nodeHeight + offsetY);
      break;
  }

  // Create the edges from the relations
  item.relations.map((eItem: any, eI: number) => {
    const target = (eItem.target === "_self") ? item.id : eItem.target;

    // Work out the handles to be used based on relationship
    let sourceHandle: Position;
    let targetHandle: Position;

    switch (eItem.relationship) {
      case "wife":
      case "husband":
        sourceHandle = currentConfig.spouseHandleSource;
        targetHandle = currentConfig.spouseHandleTarget;
        break;
      case "wife - martyred":
        sourceHandle = currentConfig.spouseHandleSource;
        targetHandle = currentConfig.spouseHandleTarget;
        // Special case to move the second wife... needs checking on horizontal
        node.position.x = node.position.x + 50;
        node.position.y = node.position.y + 75;
        break;
      case "son":
      case "daughter":
      default:
        sourceHandle = currentConfig.parentHandleSource;
        targetHandle = currentConfig.parentHandleTarget;
    }


    // This should be type Edge but it complains about the id type
    const newEdge: any = {
      id: edgeId,
      source: eItem.source,
      target: target,
      label: eItem.relationship || '',
      sourceHandle: sourceHandle,
      targetHandle: targetHandle,
    }
    edgeId++;

    allEdges.push(newEdge);
  });

  // Finally set the node onto the array.
  allNodes.push(node);

  // Set the children offset for the next node.
  if (currentGeneration > 1) {
    const children: number = item.children || 0;
    // Last piece of the puzzle for dynamic vars.. the children offset
    if (children) {
      const nodeOffset: number = (currentConfig.name === 'vertical') ? nodeWidth : nodeHeight;
      children_offset = Math.round(nodeOffset * (children / 2)) + (nodeOffset / 2);
    }

  }

  // Increment the sibling number
  currentSibling++;
});
//console.log('allEdges', allEdges);


const initialNodes = allNodes;
const initialEdges = allEdges;
// Add the initial data
//import { nodes as initialNodes, edges as initialEdges } from './TreeApp';

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
        defaultViewport={{ x: 0, y: 0, zoom: 0.25 }}
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
