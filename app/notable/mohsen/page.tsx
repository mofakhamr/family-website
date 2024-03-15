'use client'
import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1 className="">Mohsen Mofakham</h1>
        <div className='container mx-auto'>
          <Zoom>
            <Image
              src="/family/mohsen.jpg"
              width={400}
              height={200}
              alt='Portrait of Mohsen Mofakham'
              className="w-1/2 sm:w-1/4 mx-auto"

            /></Zoom>
        </div>
        <h2>Page under construction</h2>
        <div className="text-left">
          <p>&nbsp;</p>          
        </div>
      </div>
    </main >
  );
}
