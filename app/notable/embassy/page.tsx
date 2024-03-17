import ImageZoom from '@/components/imagezoom'

export default function Home() {

  const galleryPhotos = [
    { src: "/family/embassy-cover.jpg", alt: "Photo Album Cover" },
    { src: "/family/embassy-from-street.jpg", alt: "Embassy from Street" },
    { src: "/family/embassy-entrance-hall.jpg", alt: "Embassy Entrance hall" },
    { src: "/family/embassy-embassadors-office.jpg", alt: "Embassador's office" },
    { src: "/family/embassy-embassadors-office-2.jpg", alt: "Embassador's office (2)" },
    { src: "/family/embassy-persian-reception-room.jpg", alt: "Persian Reception Room" },
    { src: "/family/embassy-european-reception-room.jpg", alt: "European Reception Room" },
    { src: "/family/embassy-dining-room.jpg", alt: "Dining Room" },
    { src: "/family/embassy-dining-room-2.jpg", alt: "Dining Room (2)" },
    { src: "/family/embassy-from-garden.jpg", alt: "Embassy from Garden" },
    { src: "/family/embassy-garden-servants-quarter-garage.jpg", alt: "Embassy Garden, Servants Quarters & Garage" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1 className="">Persian Embassy in Bruxelles</h1>
        <h2>1924</h2>
        <p>These photograph were taken by ( Photographie d'Art Leon Berger) , (166 Chaussee de Charleroi, Bruxelles)in 1924..</p>
        <p>Towards the end of his years in office at Persian Embassy in Bruxells, Mahmoud Mofakham (Mohtasham-ed-Dole),
          commisioned a photographer to make a "Photodocumentary" of the premisses, as a souvenir. This was produced as an Album,
          which he presented to several people and iranian offices. I am privieged to have inherited the copy he send to his
          daughter,"Shoket Soltan".</p>

        <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {galleryPhotos.map((item, i) => {
            console.log(item);
            return <div key={i}>
              <ImageZoom
                  src={item.src}
                  width={400}
                  height={200}
                  alt={item.alt}
                  className='h-fit'
                />
              <p>{item.alt}</p>
            </div>;
          })
          }
        </div>
      </div>
    </main >
  );
}
