'use client'
import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Home() {

  const galleryPhotos = [
    { src: "/mausoleum/mausoleum-jamsheed.jpg", alt: "Jamsheed" },
    { src: "/mausoleum/mausoleum-zahra.jpg", alt: "Zahra" },
    { src: "/mausoleum/mausoleum-masood.jpg", alt: "Masood" },
    { src: "/mausoleum/mausoleum-manuchehr.jpg", alt: "Manuchehr" },
    { src: "/mausoleum/mausoleum-court-yard.jpg", alt: "Court yard" },
    { src: "/mausoleum/mausoleum-light.jpg", alt: "Ceiling Light" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1>Mausoleum</h1>
        <p>The Mofakham family mausoleum was built in August 1939 as the resting place for Mirza Es-hagh Mofakham
          (Mofakham-ed-dole). On the arrival of his body from Europe, it was transported from the South of Iran with full
          military honours, and was placed in the mausoleum. A few years later his wife Zahra Mofakham (Jalilo Saltaneh) was
          placed there and it eventually became the "Mofakham family mausoleum"It is located in the holy shrine of Hazrat Abdul
          Azim Hasani (A.S.) in the South of Tehran near Rey city.</p>

        <h2>Entrance</h2>
        <div className='container mx-auto'>
          <Zoom>
            <Image
              src="/mausoleum/mausoleum-entrance.jpg"
              width={400}
              height={200}
              alt="Mausoleum Entrance"
              className="w-1/2 sm:w-1/4 mx-auto"
            /></Zoom>
          <p>Mausoleum Entrance</p>
          <Zoom>
            <Image
              src="/mausoleum/mausoleum-main-chamber.jpg"
              width={400}
              height={200}
              alt="Mausoleum main chamber"
              className="w-1/2 sm:w-1/4 mx-auto"
            /></Zoom>
          <p>Mausoleum main chamber</p>
        </div>
        <h2>Some of the family buried in the mausoleum</h2>
        <div className="grid gap-4 md:gap-12 grid-cols-3 md:grid-cols-6 lg:grid-cols-6 mx-12 mb-2">
          {galleryPhotos.map((item, i) => {
            console.log(item);
            return <div>
              <Zoom>
                <Image
                  src={item.src}
                  width={400}
                  height={200}
                  alt={item.alt}
                  
                /></Zoom>
              <p className='text-center'>{item.alt}</p>
            </div>;
          })
          }
        </div>
      </div>
    </main >
  );
}
