import ImageZoom from '@/components/imagezoom'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1 className="">Masood Mofakham</h1>
        <div className='container mx-auto'>
          <ImageZoom
              src="/family/masood.png"
              width={400}
              height={200}
              alt='Portrait of Masood Mofakham'
              className="w-1/2 sm:w-1/4 mx-auto"
            />
        </div>
        <h2>"Mofakham Soltan"</h2>
        <div className="text-left">
          <h2>Life</h2>
          <p>Born in Tabriz in 1889, Masood Mofakham (Mofakham el-Soltan) son of Mahmoud Mofakham, was home tutored together
            with his sisters and, due to his fathers movements, first studied in Petrograd (Russia) then completing his studies
            in Leuven University outside Bruxelles.He married Gohar Taj (daughter of Nayeb Gholamali, Equerry to the Qajar King)
            in Leuven in 1910. The ceremony was performed by their representatives in Tehran, as it was a marriage by "Proxy?.
            They had six sons, all of whom were born and educated in Tehran, attending Zaratostrian School.</p>
          <p>He died in February 1953 in Tehran and was buried in the family mausoleum.</p>

          <div className='container mx-auto'>
            <ImageZoom
                src={"/family/brothers.jpg"}
                alt="Masood's brothers"
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"

              />
          </div>
          <p className='text-center'>Masood's brothers</p>

          <h2>Brothers</h2>
          <p>His six sons were:</p>
          <ul className='list-disc ml-8'>
            <li key="1">Saiid (1912 ? 2003) - He followed a career in the military (cavalry). He married his cousin, Iran Dokht
             Farshi, and had four children (Pooran, Gity, Mahmoud and Rabie Banoo (Leyla).
            </li>
            <li key="2">Mohsen (1914 ? 2003) : ? He studied Political Science and followed the family tradition of a career in 
            the Diplomatic Corp. He married an Austrian girl (Hildegard) who he later divorced. He then married Farideh Moosavi 
            and they had two children (Mohamad and Shabnam).
            </li>
            <li key="3">Naser (#### ? 2004) : - He followed a career in journalism and worked in the Ministry of Fine Art in 
            Tehran. He married Gohar Khaje and they had a daughter ( Nazanin).
            </li>
            <li key="4">Jahangeer ( #### ? 2000) : ? He chose a career in merchandising and after a failed marriage to an 
            American woman with whom he had a daughter, he married Mehry Kay Ashian and they had three children (Masood Reza, 
            Maryam and Fateme).
            </li>
            <li key="5">Manouchehr (1930 - 1968) : ? Sadly, fighting a blood disorder for many years he died at the age of 38. 
            He never married. Mansoor (#### ? ####) : ? He died at the tender age of 16 from typhoid fever
            </li>
          </ul>
          <p>&nbsp;</p>
          
          <div className='container mx-auto'>
            <ImageZoom
                src={"/family/mofakhams_old.jpg"}
                alt="Mofakham old family"
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"

              />
          </div>
          <p className='text-center'>Mofakham old family</p>

          <h2>The Family</h2>
          <div className='container mx-auto'>
            <ImageZoom
                src={"/family/masood-2sons.jpg"}
                alt="Masood's two sons"
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"

              />
          </div>
          <p className='text-center'>Masood's two sons</p>

          <h2>Career</h2>
          <p>He started his career in the Finance Ministry and very soon became a high ranking official.</p>
          <p>In July 1941 he was chosen by Mosheer el-Dole Minister for Foreign Affairs to serve as Minister-Counsellor 
            to India.Having studied Political Science and being fluent in the Russian language in 1945 he received his 
            commission as the Minister-Counselor to the Georgian Embassy.</p>

            <h2>Accolades</h2>
            <p>In 1922 he received the Order of Couronne from the Belgium Foreign Ministry.</p>
            <div className='container mx-auto'>
            <ImageZoom
                src={"/family/ordre-couronne1.jpg "}
                alt="Order de la Couronne"
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"

              />
          </div>
          <p className='text-center'>Order de la Couronne</p>
          

        </div>
      </div>
    </main >
  );
}
