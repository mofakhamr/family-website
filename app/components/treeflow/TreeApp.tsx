









    // @No longer in use, now available in basic.tsx









// hot reload throws and error, useMemo can fix it?
// import { useMemo } from 'react';
import { Position } from 'reactflow';

import { familyData as family } from './data.json';


const nodeWidth: number = 300 + 75; // actual height + gap
const nodeHeight: number = 125 + 100; // actual height + 50% gap

let currentGeneration = 1;
let currentSibling = 1;
let allNodes: Node[] = [];
let allEdges: Edge[] = [];

// Edges need a unique ID.
let edgeId: number = 0;

let children_offset: number = 0;
family.map((item: any, i: number) => {
    // Check if this is a new generation, to set the correct Y position.
    if (item.generation > currentGeneration) {
        // Remember this is the current Generation.
        currentGeneration = item.generation;
        // Reset the sibling count for this generation.
        currentSibling = 1;
        // Rest the current offset for children
        children_offset = 0;
    }

    // Todo: Improve this - if there is an offset, set it
    const offsetX = 'offset' in item ? item.offset.x : 0;
    const offsetY = 'offset' in item ? item.offset.y : 0;

    // Setup the node/box.
    let node: any = {
        id: item.id,
        position: {
            x: Math.round((currentSibling - 1) * nodeWidth + offsetX) + children_offset,
            y: Math.round((item.generation - 1) * nodeHeight + offsetY),
        },
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

    // Create the edges from the relations
    item.relations.map((eItem: any, eI: number) => {
        const target = (eItem.target === "_self") ? item.id : eItem.target;

        // Work out the handles to be used based on relationship
        let sourceHandle: Position = Position.Bottom;
        let targetHandle: Position = Position.Top;
        switch (eItem.relationship) {
            case "son":
            case "daughter":
                // use default
                break;
            case "wife - martyred":
                sourceHandle = Position.Right;
                targetHandle = Position.Left;
                // Special case to move the second wife.
                node.position.x = node.position.x + 50;
                node.position.y = node.position.y + 75;
                break;
            case "wife":
            case "husband":
                sourceHandle = Position.Right;
                targetHandle = Position.Left;
                break;
            default:
                sourceHandle = Position.Top;
                targetHandle = Position.Bottom;
        }

        const newEdge = {
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
        children_offset = (children) ? (nodeWidth * children) : children_offset;
        // console.log('------------', node);
        // console.log(item.id + '__nodeWidth * children', nodeWidth * children);

    }

    // Increment the sibling number
    currentSibling++;
});
console.log('allEdges', allEdges);

export const nodes: Node[] = allNodes;
export const edges: Edge[] = allEdges;


