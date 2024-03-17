import ImageZoom from '@/components/imagezoom'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-8">
      <div className="sm:max-w-5xl text-center">
        <h1 className="">Fereydoun Sahebjam</h1>
        <div className='container mx-auto'>
          <ImageZoom
            src="/family/fred.jpg"
            width={100}
            height={100}
            alt='Portrait of Fereydoun Sahebjam'
            className="mx-auto"
          />
        </div>
        <div className="text-left">
          <h2>Life</h2>
          <p>Fereydoun Sahebjam ( 1933 - 2008 ) was a writer, novelist and journalist Franco-Iranian born in Nice, France, on
            4 February 1933. Iranian nationality derived from two Iranian parents living in France. It is the family of his
            mother who originally lived in Nice, while his father lived in Geneva, Switzerland. His maternal grandfather was
            Eshagh Mofakham, who was the ambassador of Persia to the Court of Tsar Nicolas II and many other nations until 1917.</p>
          <p>Irandohkt Mofakham (Fereydoun's mother) married Hossein Sahebjam (who died three years after the birth of his
            son, in 1936). After spending his childhood in France and completing his studies at boarding school, Fereydoun went
            to Iran at the age of eighteen to do his military service for a period of two years. He remained there till 1950.
            He married Shahnaz Khadjeh-Nouri and their daughter, Safinaz, was born in 1956. He later married Claude Bunaudière
            and they had three daughters, Caroline, Michelle and Cecilia. </p>
          <div className='container mx-auto'>
            <ImageZoom
              src="/family/irandokht_freidoon.jpg"
              width={400}
              height={200}
              alt='Fereydoun and his Mother'
              className="w-1/2 sm:w-1/4 mx-auto"

            />
          </div>
          <p className='text-center'>Fereydoun and his Mother</p>

          <h2>Career</h2>
          <p>He began his career as a sports journalist in Iran. In the late 1950s he returned to France and enrolled at the
            "Institut d'études Politiques de Paris". He continued his career in journalism with magazines such as Viewpoints
            and Images of the World . It was in May 1979 that, as a political journalist, he denounced the barbarity of the
            Islamic regime in Iran. He was immediately sentenced to death by the regime, calling him a "traitor" for his
            remarks in Le Monde or Le Figaro. After his conviction he continued to denounce the practices in Iran through
            newspaper articles and true stories. </p>
          <p>In 1983 he published his first book about the Islamic Revolution, under the
            pseudonym Fred St. James, entitled "In The Name of God, the Merciful and Mis'cordieux". It is a collection of
            testimonies from people who lived through the Revolution. "I have More Tears to Cry", released in 1985, refers
            to young boys who are indoctrinated early in the war in favour of the Plan.</p>
          <p> In 1990 he published the novel
            "The Stoning of Soraya M." (the true story of the last hours of the life of Soraya M, who was sentenced to be
            stoned to death, after she was falsely accused of adultery). This book led to him being  internationally
            recognised and was translated into many languages. The novel was then produced in to film by the same name
            directed by Cyrus Nowrasteh in 2008 . Fereydoun published thousands of articles and thirteen books during
            his lifetime. He died at the age of 75 in March 2008 at his home in "Neuilly-sur-Seine".</p>
        </div>

      </div>
    </main >
  );
}
