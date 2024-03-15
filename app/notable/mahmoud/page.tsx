'use client'
import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1 className="">Mahmoud Mofakham</h1>
        <div className='container mx-auto'>
          <Zoom>
            <Image
              src="/family/mahmoud-mofakham.jpg"
              width={400}
              height={200}
              alt='Portrait of Mahmoud Mofakham'
              className="w-1/2 sm:w-1/4 mx-auto"

            /></Zoom>
        </div>
        <h2>"Mohtasham Doleh"</h2>
        <div className="text-left">
          <h2>Life</h2>
          <p>Born to Mirza Abdol Ghani on 15 May 1871 in Tabriz, (a main town of Southern Azerbaijan ). After his Primary and
            Ancient studies he entered into service at the Foreign Ministry. He married Khadije Soltan Khanoom and they had
            one son and two daughters.
          </p>
          <p>Masood: ? Mofakham El Soltan ?(1888 ? 1952) Rabieh Soltan: (1893 ? 1978 ) born in Tabriz; home tutored; married
            Mirza Abdol Azeem Farshi ?Mirza Agha?, a well known merchant in Azerbaijan. They had one son and three daughters
            Shokat Soltan: (1898 ? ???? ) born in Tabriz; home educated; married Fatollah Kiamars ?Babayoff? They had no
            children.
          </p>
          <div className='container mx-auto'>
            <Zoom>
              <Image
                src={"/family/rab_masood.jpg"}
                alt="Portrait of Eshagh and his wife"
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"

              /></Zoom>
          </div>
          <p className='text-center'>Rabieh Soltan & Masood</p>
          <p>He lost his wife to "Cholera" in 1906 - she died in Kermanshah and was buried in Najaf. Mohtasham-ed-dole died
            in Belgium in 1943. His body was sent to Iran by the Belgium Government. Sadly, due to WWII, the transport was
            delayed in Italy for four years. Eventually his remains were carried on board a battleship to Southern Iran and
            transported with military honours to Tehran. He was buried in the Mofakham mausoleum.
          </p>

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
                <th scope="col" className=" px-6 py-4">Position</th>
                <th scope="col" className=" px-6 py-4">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>Iran</td>
                <td>Ministery for Foreign Affairs in Teheran.	</td>
                <td>1893 - 1896</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>Belgium</td>
                <td>First Secretary to the Persian Legateship in Brussels.</td>
                <td>1896 - 1899</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td></td>
                <td>Promoted to Counsellor.	</td>
                <td>1899 - 1901</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>India</td>
                <td>Resident Minister and the Consulate General in Calcutta.</td>
                <td>1901 - 1906</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>Georgia</td>
                <td>Consulate-General </td>
                <td>1906 - 1907</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td>Belgium</td>
                <td>Ambassador in brussels	</td>
                <td>1907 - 1925</td>
              </tr>
            </tbody>
          </table>

          <p>&nbsp;</p>


          <p>He spent his working career in the Persian Foreign Ministry (Qajar Dynasty). He first received the title of
            "Mofakham-el-Soltan" (later given to his son, Masood Mofakham) and later was changed to "Mohtasham-ed-Dolleh".
            He was the Iranian representative in many countries. Turkey:- 1888 he was nominated Attach? in Constantinople.
            Egypt:- he consequently transferred to Cairo, where he remained until 1891. Egypt:- in 1893 he was appointed
            Deputy Ambassador Charge de Affair until 1896. Belgium:- in 1896 he was appointed First Secretary to the Persian
            Legateship in Bruxelles and in 1899 he was promoted to Counsellor until 1901. Iran:- in 1901 he left Bruxelles
            to take up the post of Minister for Foreign Affairs in Teheran. India:- in 1902 he was promoted to Resident
            Minister at the Consulate General in Calcutta until 1906. Georgia:? in 1906 he was appointed Persian
            Consulate-General until 1907.* Europe:- in 1907 he was responsible for diplomatic missions in Europe. Belgium:-
            in 1908 he arrived in Bruxelles as the Persian Envoy Extraordinaire and Minister Plenipotentiary at the Royal
            Court of Belgium until 1925. * In 1906 there was assassination attempt on his life in Tiblisi, but his deputy
            (Saleh Khan) got killed. During his last posting as Ambassador to Belgium, he received the title of
            "Sheikh-al-Soffara" (Chief of Ambassadors) for the exceptional services he rendered at this post.</p>


          <div className='container mx-auto'>
            <Zoom>
              <Image
                src={"/family/office_e.jpg"}
                alt="Embassador's Office in Bruxells."
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"

              /></Zoom>
          </div>
          <p className='text-center'>Embassador's Office in Bruxells.</p>

          <h2>Accolades</h2>

          <p>At the beginning of the war, after refusing the right of passage, Belgium was occupied by the German army, who
            used the country as a corridor to North Europe. King, Government and Foreign Ambassadors fled the occupied capital
            (Bruxelles). He remained and opened the Embassy's doors to all those who were desperately looking for (political)
            shelter. There are countless notes and letters from people from all walks of life asking for his intervention with
            the occupied forces, or sending their gratitude for saving their sons, fathers or husbands from certain death.
            After the King and Goverment returned at the end of the war a "bust" of him was commissioned and a famous painter
            painted a full length oil portrait of him in gratitude for his services.</p>


          <div className='container mx-auto'>
            <Zoom>
              <Image
                src={"/family/oilpainting.jpg"}
                alt="Oil Painting."
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"

              /></Zoom>
          </div>
          <p>In a ceremony, in the presence of all the dignatories whose lives were one way or another affected by him and many
            Belgium VIPs, he was presented with a " Guest Book " and a large bronze plaque. It was commisioned by the ?"Commitee
            of Free Belgium". It was 75 centimeter in diameter and mounted on a mahogany stand. (sadly, I am unaware of the
            whereabouts of this plaque and would welcome any news, especially a photograph). However, at the time, there were
            some smaller replicas produced (of which I am the proud owner of one)</p>
          <div className='flex mx-auto justify-between'>
            <Zoom>
              <Image
                src={"/family/plaque.jpg"}
                alt="Plaques"
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"
              /></Zoom>
            <Zoom>
              <Image
                src={"/family/plaque_back.jpg"}
                alt="Plaques"
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"
              /></Zoom>
          </div>

          <div className='items-center text-center'>
            <h2>Inscribed on the back is:</h2>
            <p>Belgian Nation - Persian Minister</p>
            <p>Remaining in the midst of German Occupation</p>
            <p>1914 -1918</p>
            <p>In recognition of unfailing invaluable services</p>
          </div>
          <p>&nbsp;</p>
          <p>In 1909 he was invited to become a member of the "Cercle Royal du Parc ", which was a great honour.</p>

          <div className='container mx-auto'>
            <Zoom>
              <Image
                src={"/family/magazine.jpg"}
                alt="Magazine article -THE PERSIAN LEGATESHIP"
                width={400}
                height={200}
                className="w-1/2 sm:w-1/4 mx-auto"
              /></Zoom>
          </div>
          <p className='text-center'>Translation of the above magazine article into English.</p>

          <p>His Excellence Mahmoud Khan Mofakham, Persian Minister at the Royal Court of Belgium had a brilliant career.
            It was after an exceptional education in Persia and in Europe that he was nominated Attach? in Constantinople
            in 1888. Transferred consequently to Cairo, he remained there until 1891, when he returned to Persia for three
            years. Cairo saw his return in 1894 as First Secretary to the Diplomatic Office, where he was also entrusted with
            the management of the Consulate Administration. It was at the end of 1896 that he was appointed First Secretary
            to the Persian Legateship in Bruxelles and in 1899 he was promoted to Counsellor. He left Bruxeles in 1901 to
            take up the post of Minister for Foreign Affairs in Teheran. </p>
          <p>In 1902 he was promoted to Resident Minister at the
            Consulate General in Calcutta. In 1906 he was given the Persian Consulate-General in Tiblis. In 1907 he was
            responsible for diplomatic missions in Europe. In February 1908 he arrived in Bruxelles as Persian Envoy
            Extraordinaire and Minister Plenipotentiary at the Royal Court of Belgium. So, from the age of 18, his Excellence
            Mahmoud Khan Mofakham represented Persia in Belgium. Of all the members of the Diplomatic Corps he is the only
            one to be given accredition in our country under the reign of Leopold II. During his long stay in our country
            Mahmoud Khan contributed enormously to the consolidation between Persia and Belgium and he was always totally
            and patriotically devoted to his job. </p>
          <p>During the four year occupation of the war he devoted himself tirelessly
            to alleviate the suffering of the Belgian people; he shared our worries and our sadness; he faithfully remained
            at his post. This distinguished diplomat acquired very special recognition from the Belgians. This was expressed
            during a ceremony held in his honour on 1st April 1919 and which brought together all Belgians from all
            different social backgrounds. One was reminded of his Excellence Mahmoud Khan?s deeds and how he saved many
            people through his tireless intervention with the occupier. </p>
          <p>Horrific punishments were commuted thanks to his
            intervention, his protection and the pressure he put on the Germans to save our martyrs. It was through his
            efforts that exiled workers were able to return to their families. This was all done free of charge. He also
            helped war invalids during the occupation. All of this was remembered during the moving ceremony. A great friend
            has left us. Wanting to recognise these great deeds during the war, the King awarded him the Ribbon of the Order
            of Leopold on his return to Belgium. We still remember His Excellence Mahmoud Khan. We sincerely and deeply
            regret his parting. Translated by: Kind Freind Karin Tearle.</p>

          <h2><a href="/embassy">Embassy in Bruxells</a></h2>
          <a href="/embassy" className='text-blue-500'>Read more about the Embassy</a>
          <p>For his services to the King (Kajar) and Country he received :</p>

          <table className='min-w-full text-center text-sm font-light text-surface dark:text-white'>
            <thead className='border-b border-neutral-200 bg-[#332D2D] font-medium text-white dark:border-white/10'>
              <tr className=''>
                <th scope="col" className="w-2/6 px-6 py-4">Order</th>
                <th scope="col" className=" px-6 py-4">Description</th>
                <th scope="col" className=" px-6 py-4">Awarded by</th>
                <th scope="col" className=" px-6 py-4">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-neutral-200 dark:border-white/10 '>
                <td><div className='container mx-auto   -2'>
                  <Zoom>
                    <Image
                      src={"/family/H0027-L03928519.jpg"}
                      alt="The Qajar Order of Imperial Effigy."
                      width={400}
                      height={200}
                      className="w-1/2 sm:w-1/4 mx-auto"
                    /></Zoom>
                </div></td>
                <td>The Qajar Order of Imperial Effigy.	</td>
                <td>Ahmad Shah Qajar	</td>
                <td>&nbsp;</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td><div className='container mx-auto py-2'>
                  <Zoom>
                    <Image
                      src={"/family/med-rib-leopold.jpg"}
                      alt="The Grand Cross in the Order of Leopold II.	"
                      width={400}
                      height={200}
                      className="w-1/2 sm:w-1/4 mx-auto"
                    /></Zoom>
                </div></td>
                <td>The Grand Cross in the Order of Leopold II.	</td>
                <td>Albert 1st King of Belgium	</td>
                <td>1919</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td><div className='container mx-auto py-2'>
                  <Zoom>
                    <Image
                      src={"/family/P5030038.jpg"}
                      alt="The Grand Officer in the Order of Leopold."
                      width={400}
                      height={200}
                      className="w-1/2 sm:w-1/4 mx-auto"
                    /></Zoom>
                </div></td>
                <td>The Grand Officer in the Order of Leopold.	</td>
                <td>Albert 1st King of Belgium	</td>
                <td>&nbsp;</td>
              </tr>
              <tr className='border-b border-neutral-200 dark:border-white/10'>
                <td><div className='container mx-auto py-2'>
                  <Zoom>
                    <Image
                      src={"/family/crown.jpg"}
                      alt="The Knight of the order of the Crown"
                      width={400}
                      height={200}
                      className="w-1/2 sm:w-1/4 mx-auto"
                    /></Zoom>
                </div></td>
                <td>The Knight of the order of the Crown	</td>
                <td>Belgium Ministry of Foreign Affairs	</td>
                <td>1922</td>
              </tr>
            </tbody>
          </table>


        </div>
      </div>
    </main >
  );
}
