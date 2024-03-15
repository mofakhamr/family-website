'use client'
import Image from "next/image";
import Link from 'next/link'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 sm:py-16">
      <div className="sm:max-w-5xl">
        <h1 className="">Notable Individuals</h1>
        <div className="text-left">
          <p>We are often driven by ambition or thirst to succeed. Sometimes the necessity of our circumstances compels us to leave
             our mark on the pages of history. The ones who manage to do so have lived a full and satisfying life.
          </p>
          <p>
          I think some members of my family who achieved considerable status and aclaim in their career and life are amongst 
          them who made a diffrence in their society and deserve a special mention.
          </p>
        </div>
      </div>

    </main>
  );
}
