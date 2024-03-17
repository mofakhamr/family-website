export const metadata: Metadata = {
  title: "Family Tree",
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-16">
      <div className="sm:max-w-5xl">
        <h1 className="">Family History "tree"</h1>
        <div className="text-left">
          <p>The roots of the family, as far as I have been able to trace back, started in the late 18th century with Haj Mirza
            Jabbar Taskereh-chi, known as Nazem-ol-Moham..
          </p>
          <p>
            From very early times people were known by their first name and most commonly their father's name, like the traditional
            Arabic names. In some cases the title given to them (either by the Government or the Royal Court) distinguished them
            from the general public, as was the case of Haj Mirza Jabbar, who was in charge of the passport office and Taskereh
            (in farsi meaning Passport) and Chi (meaning the job of), hence Taskereh chi.
          </p>
          <p>At the end of the Kajar and start of the the Pahlavi dynastys it was decided that all families should have a surname.
            Many chose names relating to the town in which they lived; Others chose names that reflected their occupations, and
            some chose names that continued to indicate their heritage.
          </p>
          <p>So the surname "Mofakham" was adopted by our family because it was part of titles given to various members of the
            family.
          </p>
          <p>There were other families who decided to make use of "Mofakham" as a surname and, by adding a prefix or suffix, make
            a "double barreled" name. It is only in recent years and mostly due to emigration of people, that part of the name is
            dropped and only the "Mofakham" part kept.These people have no relation of any kind to our family. Only the persons
            included in this family tree are true descendants of Mirza Abdol Ghani KHOII.
          </p>
          <p><a className="m-5 font-mono" href="/tree.pdf" target="_blank">Download Family Tree</a></p>
          <div className="h-screen">
            <object className="h-5/6" data="/tree.pdf" type="application/pdf" width="100%">
              <p>Unable to display PDF file. <a href="/tree.pdf">Download</a> instead.</p>
            </object>
          </div>
        </div>
      </div>

    </main>
  );
}
