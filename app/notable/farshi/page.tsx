'use client'
import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1 className="">Mirza Agha Farshi</h1>
        <div className='container mx-auto'>
          <Zoom>
            <Image
              src="/family/young-farshi.jpg"
              width={400}
              height={200}
              alt='Portrait of Mirza Agha Farshi'
              className="w-1/2 sm:w-1/4 mx-auto"

            /></Zoom>
        </div>
        <h2>"Abdol Azeem"</h2>
        <div className="text-left">
          < h2>Life</h2>
          <p>Born in Tabriz, Southern Azarbaijan, son of a merchant, he followed in his father's footsteps and became a very
            wealthy merchant. After losing his first wife, with whom he had five children, he married Rabeeh Banoo, daughter
            of Mahmoud Mofakham. He had a son, Hassan, and three daughters, Iran Dokht, Turan Dokht and Ozma.</p>
          <div className='container mx-auto'>
            <Zoom>
              <Image
                src="/family/farshi-family.jpg"
                width={400}
                height={200}
                alt='Farshi Family'
                className="w-1/2 sm:w-1/4 mx-auto"

              /></Zoom>
          </div>
          <h2>Career</h2>
          <p>During the years which led to the Constitutional Revolution, he was a fundemental participant with the leaders and
            sympathisers of the movement. Among them, the most famous people were Sattar Khan, Bagher Khan, Seqat-ol-Eslam
            Tabrizi and Haji Mirza Aqa Farshi and the founder Haji Mehdi Kuzeh Kanaani. He then went on to be elected the
            Azarbaijan member of Majlees (Parliament) in the first Parliament in Iran. He held that position until he died.</p>
          <div className='container mx-auto'>
            <Zoom>
              <Image
                src="/family/tabree-mps.jpg"
                width={400}
                height={200}
                alt='Tabree MPs'
                className="w-1/2 sm:w-1/4 mx-auto"

              /></Zoom>
          </div>
          <p>Azarbaijan MPs in the first Parliament</p>
          <div className='container mx-auto'>
            <Zoom>
              <Image
                src="/family/farshi.jpg"
                width={400}
                height={200}
                alt='Tabree MPs'
                className="w-1/2 sm:w-1/4 mx-auto"

              /></Zoom>
          </div>

        </div>


      </div>
    </main >
  );
}
