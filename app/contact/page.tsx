import ImageZoom from '@/components/imagezoom'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1>Contact</h1>
        <p>All information contained in these pages are the copyright of the author.</p>
        <p>Please feel free To contact for use and copy via email:</p>
        <p>mac@mofakham.com</p>

        <div className='container mx-auto'>
          <ImageZoom
            src="/misc/mahmoud.png"
            width={400}
            height={200}
            alt="Mausoleum Entrance"
            className="w-1/2 sm:w-1/4 mx-auto"
          />
          <p>Mahmoud Mofakham</p>
        </div>
      </div>
    </main >
  );
}
