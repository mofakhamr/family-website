import ImageZoom from '@/components/imagezoom'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1 className="">Mohsen Mofakham</h1>
        <div className='container mx-auto'>
            <ImageZoom
              src="/family/mohsen.jpg"
              width={400}
              height={200}
              alt='Portrait of Mohsen Mofakham'
              className="w-1/2 sm:w-1/4 mx-auto"

            />
        </div>
        <h2>Page under construction</h2>
        <div className="text-left">
          <p>&nbsp;</p>          
        </div>
      </div>
    </main >
  );
}
