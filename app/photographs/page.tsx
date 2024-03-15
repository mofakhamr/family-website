'use client'
import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Home() {

  const galleryPhotos = [
    { src: "/misc/pic-1.jpg", alt: "Center, Iran Farshi with her step sister and step brothers." },
    { src: "/misc/pic-2.jpg", alt: "Irandokht and Saiid Mofakham's wedding photo." },
    { src: "/misc/pic-3.jpg", alt: "Gohar-Taj and son Saiid Mofakham" },
    { src: "/misc/pic-4.jpg", alt: "Mahmoud Mofakham with Ataback Priminister to Ahmad Shah" },
    { src: "/misc/pic-5.jpg", alt: "Mahmoud Khan leaving the palace after audience with Alfonso Xlll King of Spain" },
    { src: "/misc/pic-6.jpg", alt: "I wish I knew the name of the person standing between the two brothers, Mahmoud & Ishagh Mofakham" },
    { src: "/misc/pic-7.jpg", alt: "Posing for a photo, Mahmoud Khan" },
    { src: "/misc/pic-8.jpg", alt: "Mofakham Soltan 1903 in Poona (India) with a number of Merchants" },
    { src: "/misc/pic-9.jpg", alt: "Mahmoud Khan in Cairo" },
    { src: "/misc/pic-10.jpg", alt: "Mofakham-ed dolein Cairo (Egypt)" },
    { src: "/misc/pic-11.jpg", alt: "Posing for photo" },
    { src: "/misc/pic-12.jpg", alt: "Irandokht Farshi (Mofakham) at the age of 4" },
    { src: "/misc/pic-13.jpg", alt: "Mofakham-Ed-Doleh (Prince) in Austria" },
    { src: "/misc/pic-14.jpg", alt: "Sadigh Saltaneh - Prince Mofakham - Hakim el Molk" },
    { src: "/misc/pic-15.jpg", alt: "Delhi India with some foreign dignatories Celebration of Edward Vll coronation" },
    { src: "/misc/pic-16.jpg", alt: "Prince Mofakham in the company of Mr and Mrs Sereuville, Lausanne, October 1937" },
    { src: "/misc/pic-17.jpg", alt: "Mofakham-ol-soltan with Shah and Priminister and a few highranking Politician and Ambassadors" },
    { src: "/misc/pic-18.jpg", alt: "In presence of Atabak and Mozaffar ad Din Shah Qajar" },
    { src: "/misc/pic-19.jpg", alt: "Mofakham, Farshi and Mostofi families" },
    { src: "/misc/pic-20.jpg", alt: "Farshi with Mohsan Mofakham" },
    { src: "/misc/pic-21.jpg", alt: "Hossain Saheb-Jaam" },
    { src: "/misc/pic-22.jpg", alt: "Mofakham's passport photo" },
    { src: "/misc/pic-23.jpg", alt: "Masood Mofakham" },
    { src: "/misc/pic-24.jpg", alt: "Strawl with Ladies in Spain I believe. DRINKING?" },
    { src: "/misc/pic-25.jpg", alt: "UK Mofakhams" },
    { src: "/misc/pic-26.jpg", alt: "My Boys" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1>Photographs</h1>
        <p>These photographs are those not included eleswhere.</p>

        <div className="md:grid md:gap-12 md:grid-cols-5 lg:grid-cols-5 mx-12 mb-2">
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
