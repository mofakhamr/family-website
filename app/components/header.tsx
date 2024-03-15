'use client'

import Image from "next/image";
import React, { useState } from "react";


// Define the Header component
export default function Header() {
  const [isMenuOpen, toggleNav] = React.useState(false);
  const [isSecondOpen, toggleSecondNav] = React.useState(false);

  function handleMenuClick() {
    toggleNav(!isMenuOpen);
    console.log(isMenuOpen);
  }
  function handleSecondNav() {
    toggleSecondNav(!isSecondOpen);
    console.log(isSecondOpen);
  }

  const mainMenu = [
    { name: "Family Tree", path: "/family-tree" },
    {
      name: "Notable Individuals", path: "#", children: [
        { name: "Jabbar TASKRECHI", path: "/notable/jabbar" },
        { name: "Eshagh MOFAKHAM", path: "/notable/eshagh" },
      ]
    },
    { name: "Mausoleum", path: "/mausoleum" },
    { name: "Photographs", path: "/photographs" },
    { name: "Contact", path: "/contact", children: [
      { name: "Jabbar TASKRECHI", path: "/notable/jabbar" },
      { name: "Eshagh MOFAKHAM", path: "/notable/eshagh" },
    ] },
  ]

  return (
    <header className="sticky top-0 bg-black sm:flex sm:justify-between sm:items-center bg-[url('/repeatbg.png')] bg-repeat-x">

      {/*<!-- mobile button and logo -->*/}
      <div className="flex items-center justify-between p-0">

        <div>
          <a href="/" className='text-white'><Image
            className="dark-invert text-white"
            src="/logo.png"
            alt="Site Logo"
            width={166}
            height={80}
            priority
          /></a>
        </div>

        <div className="sm:hidden">
          <button onClick={handleMenuClick} type="button" className="mr-5 block text-black focus:text-black focus:outline-none hover:text-black">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path className={isMenuOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path className={!isMenuOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>

      </div>

      {/*<!-- Main Nav -->*/}
      <div className='text-white'>
        {/*<!-- Primary Nav -->*/}
        <nav className={`px-2 pt-2 pb-4 sm:mr-20 sm:flex sm:p-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="sm:flex">
            <div>
              <a key="nmx" href="/" className='block px-2 py-1 text-white sm:text-slate-700 hover:text-black font-semibold rounded hover:bg-gray-200'>Home</a>
            </div>

            {mainMenu.map((item, i) => {
              let hasChildren:JSX.Element | undefined;
              const children = (item.children) && item.children.map((child, si) => {
                hasChildren = <i className="arrow adown"></i>;
                return <div key={i + si} className="block ml-4 mt-1"><a href={child.path} className=''>{child.name}</a></div>;
              })

              return <div key={i}>
                <a href={item.path}
                onClick={hasChildren && handleSecondNav}
                className='block mt-1 px-2 py-1 text-white sm:text-slate-700 hover:text-black font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2'>
                  {item.name}
                  {hasChildren && hasChildren}
                </a>
                <div className={isSecondOpen ? 'block' : 'hidden'}>{children}</div>
              </div>;
            })}
          </div>
        </nav>
      </div>
    </header>

  );
}

