import ImageZoom from '@/components/imagezoom'

import Flow from '@/components/treeflow/basic';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="text-center">
        <h1>Interactive family tree</h1>
        <p>A rework of the family tree in <a href="https://reactflow.dev/" target="_blank">ReactFlow</a>.</p>
      </div>
      <div className='container mx-auto'>
        <Flow />
      </div>

    </main >
  );
}
