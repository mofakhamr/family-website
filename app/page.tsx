'use client'
import Image from "next/image";
import Link from 'next/link'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-16">
      <div className="sm:max-w-5xl">
        <h1 className="text-center">Welcome to the Mofakham Family History pages</h1>
        <p className="italic text-center">These pages are dedicated to all the MOFAKHAMs in the world, either by Birth or Marriage.</p>
        <div className="text-left">
          <h2>Foreword</h2>
          <p>The tradition in many countries of registering births, deaths and marriage by the church provides a very good basis
            for research into ancestry and genealogy. Sadly, this is not possible in the case of my ancestors, as there was no
            such system in early times Iran (Persia). Information was passed down by word of mouth via individuals, within families
            and, on some rare occasions by written words.
          </p>
          <p>
            The only recorded cases were that of nobility and political figures and those active in the Diplomatic Corp. Luckily
            for me some of my ancestral family are part of such groups and it gave me the opportunity to research their life
            history.
          </p>
          <p>- M.Mofakham</p>
          <h2>Acknowledgment</h2>
          <p>I have been collecting this information for the many years. However, the vast majority of the information is due to
            the efforts and forethought of two people, my uncle, Mohsen Mofakham (1914 - 2003) and my father, Saiid Mofakham
            (1912 - 2003). I dedicate this to them
          </p>
        </div>
        <p className="text-center">
          "GOD REST THEIR SOULS"
        </p>
      </div>

    </main>
  );
}
