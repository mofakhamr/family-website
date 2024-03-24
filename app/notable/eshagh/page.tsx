import ImageZoom from '@/components/imagezoom'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1 className="">Eshagh Mofakham</h1>
        <div className='container mx-auto'>
          <ImageZoom
              src="/family/eshag-1926.jpg"
              width={400}
              height={200}
              alt='Portrait of Eshagh Mofakham'
              className="w-1/2 sm:w-1/4 mx-auto"

            />
        </div>
        <h2>"Mofakham Doleh"</h2>
        <div className="text-left">
          <h2>Life</h2>
          <p>Prince Eshagh Khan (1861 - 1939) as he was known, son of Mirza Abdol Ghany and grandson of Haj Hassan ali Khoi was
            not born to royalty but the title was given to him by the then Qajar King "Soltan Ahmad Shah" (this title was not
            hereditary).

          </p>
          <p>Born in Tabriz, a major town of southern Azerbaijan province in Northern Iran. To begin with he was home tutored by
            his father and after the end of his schooling studies, he started his career in the Foreign Ministry with the help of
            Mirza Najafali Khan Karpardaz.On his return to Iran from Egypt in 1899 he married Zahra Peernia ( Jalil ol Saltaneh)
            (1886 - 1969). They had two sons and one daughter.
          </p>
          <div className='container mx-auto'>
            <ImageZoom
                src={"/family/esh_wife.jpg"}
                alt="Portrait of Eshagh and his wife"
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"

              />
          </div>
          <p>Parveez (1907 - 1945) was born and educated in Switzerland and  married a Swiss girl. He contracted (TB) and due to
            this illness spent the last few years of his life in a sanitorium. He had two daughters.

          </p>
          <p>Irandokht (1909 - 1993) she was born in Switzerland but went to Iran, where she married Hosain Sahebjam. They
            returned to Switzerland. Her husband later died from TB. They had a son called Fereydoun Sahebjam.

          </p>
          <p>Jamsheed (1910 - 1984) was born and educated in Switzerland. At the age of 21 he returned to Iran in order to take
            part in the war (WWII ) on the Iranian side. He stated to Iranian officials that as he was born in the embassy
            compound to Iranian parents, therefore he was an Iranian. He did not marry.He died at the age of 74. Amongst his
            notable achievements he was Director of the Finance Ministry, Director of Iran and German Technical School and lastly
            Director of Industry and Commerce, to mention a few.

          </p>
          <p>In 1925, with the change of the dynasty in Iran from Ahmad Shah Qajar to Reza Shah Pahlavi, he did not accept the new
            ruler and called the Shah "illiterate, uneducated and said should not govern". No longer carrying out his duties
            (retiring from political life), he bought a house in Nice and moved to the South of France with his family. He died
            in 1939  and his body was taken to Iran and buried in a Mausoleum (which became the family mausoleum ) in the South
            of Tehran. His wife Zahra died in 1969 and was also buried in the Mausoleum.

          </p>
          <div className='container mx-auto'>
            <ImageZoom
                src="/family/thebegin.jpg"
                width={400}
                height={200}
                alt='Portrait of Eshagh Mofakam'
                className="w-1/2 sm:w-1/4 mx-auto"

              />
          </div>

          <h2>Career</h2>
          <p>His first job was in the embassy in Constantinople (Istanbul) Turkey. He was familiar with european languages,
            culture and traditions. At the time of Mirza Mahmoud Khan Ala-ol-molk Diba's move from St Petersburg, to Istanbul,
            he recommended Ishagh as Head Consulate to Cairo, a post he held for four years.Marrying Zahra, daughter of Nsrolah
            Mosheer-Dole, Minister for Forein Affairs (who later became the first Prime Minister in Iran), helped his career
            along.He began his career as an "Ambassador at Large" (this is a representative of the King "Muzaffar ad-Din Shah"
            and the Country with no specific Office).South Americas - in 1885 he travelled via Washington DC  to Rio de Janeiro
            (Brazil) and Buenos Aires (Argentina) and signed an Alliance with Julio Argentino Roca on behalf of the King Muzaffar
            ad-Din Shah.USA - in 1889 he took a permanent Office in Washington DC until 1903.Austria - in 1904 he took up the
            Office of  Ambassador in Vienna until 1909.Belgium - in 1905, for a short time, he took up the Ambassadorship to
            Bruxelles.Italy - in 1911 he became the Ambassador to Rome until 1917.Russia - in1917 he took up the Ambassadorship
            to St. Petersburg until 1921.</p>


          <table className='min-w-full text-center text-sm font-light text-surface dark:text-white'>
            <thead className='border-b border-neutral-200 bg-[#332D2D] font-medium text-white dark:border-white/10'>
              <tr className=''>
                <th scope="col" className=" px-6 py-4">Country</th>
                <th scope="col" className=" px-6 py-4">Office</th>
                <th scope="col" className=" px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>Turkey</td>
                <td>nominated attache in
                  Constantinople</td>
                <td>1878</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>Egypt</td>
                <td>Head Consulate to Cairo, four years.</td>
                <td>1880 - 1884</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>S. America:( Brazil, Argentina, Mexico etc.)</td>
                <td><span>&nbsp;</span>Persian Envoy Extraordinaire and Minister Plenipotentiary</td>
                <td>1885 - 1889</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>USA</td>
                <td>Permanent Office in
                  Washington DC</td>
                <td>1899-1903</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>Belgium</td>
                <td>Ambassador in
                  brussels</td>
                <td>1905</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>Austria</td>
                <td>Ambassador in Vienna</td>
                <td>1904-1909</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>Italy</td>
                <td>Ambassador in Rome</td>
                <td>1911-1921</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td><span>&nbsp;</span>St. Petersburg, Russia</td>
                <td>Ambassador in Russia</td>
                <td>1917 - 1921</td>
              </tr>
            </tbody>
          </table>


          <p></p>
          <h2>Accolades</h2>
          <p>He was granted the title of
          <a href="http://mofakham.co.uk/images/notable/prince1.jpg" target="_blank" className='text-blue-500'>"Prince"</a>
            by King Sultan Ahmad Shah Qajar (1909-1925). 
            <a href="/family/scanlegiondehonour.jpg" target="_blank" className='text-blue-500'>Commander of the French Legion</a>
            of Honor - The medal was awarded on 14 August 1900 at the Iranian Embassy in Washington DC.
          </p>
          <div className='flex mx-auto justify-between'>
               <ImageZoom
                src="/family/prince1.jpg"
                width={400}
                height={200}
                alt='Medals'
                className="w-1/2 sm:w-1/4 mx-auto"
              />
              <ImageZoom
                src="/family/scanlegiondehonour.jpg"
                width={400}
                height={200}
                alt='Legion de Honour'
                className="w-1/2 sm:w-1/4 mx-auto"
              />

              <ImageZoom
                src="/family/medals.jpg"
                width={400}
                height={200}
                alt='Medals'
                className="w-1/2 sm:w-1/4 mx-auto"
              />
          </div>

          <h2>Commander of the Legion of Honor</h2>
          <p>On the occasion of the celebration The German Ambassador's young wife came forward and said "Mr. Ambassador,
            you are so fortunate to have this decoration, my husband would never have this good fortune." Mofakham promptly
            came up with the following answer "Your husband is much more fortunate than I, because I would never be able to
            have a wife as beautiful as you".
          </p>
          <p>"Extract from The Administrative and Social History of the Qajar Period: From Mozaffar ed-Din Shah to Vosuq
            od-Dowleh's Anglo-Persian agreement"</p>
        </div>
      </div>

    </main>
  );
}
