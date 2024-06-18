import { memo, FC } from 'react';
import Image from 'next/image';
import { Handle, Position, NodeProps } from 'reactflow';

import moduleStyles from './style.module.css';

const CustomNode: FC<NodeProps> = ({ data, xPos, yPos }) => {
  const genClass = "gen" + data.generation;
  return (
    <div className={`${moduleStyles.node} ${moduleStyles[genClass]}`}>
      <Handle type="target" position={Position.Left} id={Position.Left} />
      <Handle type="target" position={Position.Top} id={Position.Top} />
      <div className='row1 text-right border-2 border-blue-500'>
        <Image
          //src={data.img || '/user-icon.png'}
          src={'/user-icon.png'}
          width={56}
          height={56}
          alt="Image of person"
          className={"float-left"}
        />
          <div className='font-bold mx-1 border-2 border-red-500'><a className='text-blue-500' href="#">{data.label}</a></div>
          {(data.subtitle) && <div className='whitespace-nowrap p-0 text-md text-right p-1'><strong>Title:</strong> {data.subtitle}</div>}
      </div>
      <div className='row2 px-2 text-right grid grid-flow-col justify-stretch'>
        {(data.dob) && <div className='grid text-md italic'>Lived {data.dob}{data.dod}</div>}
      </div>
      <Handle type="source" id={Position.Bottom} position={Position.Bottom} />
      <Handle type="source" id={Position.Right} position={Position.Right} />
    </div>
  );
};

export default memo(CustomNode);