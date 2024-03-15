'use client'

import Image from "next/image";
import React, { useState } from "react";


// Define the Header component
export default function Header() {
  type openMenus = {
    [key: string]: boolean
  }

  const [openMenus, toggleMenuOpen] = React.useState({
    'home': false,
    'mobileNav': false,
  });


  function handleMenuItem(menuId: string) {
    let newState = { ...openMenus };
    newState[menuId] = !openMenus[menuId];
    toggleMenuOpen(newState);
  }

  const mainMenu = [
    { name: "Family Tree", path: "/family-tree" },
    {
      name: "Notable Individuals", path: "#", children: [
        { name: "Jabbar TASKRECHI", path: "/notable/jabbar" },
        { name: "Eshagh MOFAKHAM", path: "/notable/eshagh" },
        { name: "Mahmoud MOFAKHAM", path: "/notable/mahmoud" },
        { name: "Masood MOFAKHAM", path: "/notable/masood" },
        { name: "Mohsen MOFAKHAM", path: "/notable/mohsen" },
      ]
    },
    { name: "Mausoleum", path: "/mausoleum" },
    { name: "Photographs", path: "/photographs" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="z-10 sticky top-0 bg-black sm:flex sm:justify-between sm:items-center bg-[url('/repeatbg.png')] bg-repeat-x">

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
          <button onClick={() => handleMenuItem('mobileNav')} type="button" className="mr-5 block text-black focus:text-black focus:outline-none hover:text-black">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path className={openMenus['mobileNav'] ? 'block' : 'hidden'} fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              <path className={!openMenus['mobileNav'] ? 'block' : 'hidden'} fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>

      </div>

      {/*<!-- Main Nav -->*/}
      <div className='text-white'>
        {/*<!-- Primary Nav -->*/}
        <nav className={`px-2 pt-2 pb-4 sm:mr-20 sm:flex sm:p-0 ${openMenus['mobileNav'] ? 'block' : 'hidden'}`}>
          <div className="sm:flex">
            <div>
              <a key="nmx" href="/" className='block px-2 py-1 text-white sm:text-slate-700 hover:text-black font-semibold rounded hover:bg-gray-200'>Home</a>
            </div>

            {mainMenu.map((item, i) => {
              let hasChildren: JSX.Element | undefined;
              const children = (item.children) && item.children.map((child, si) => {
                hasChildren = <i className="arrow adown"></i>;
                return <div key={i + si} className="block m-1 mt-1 p-1 sm:p-2 hover:bg-gray-100 hover:text-black rounded"><a href={child.path} className=''>{child.name}</a></div>;
              })
              const menuId = i + 1;
              return <div key={i}>
                <a href={item.path}
                  onClick={() => handleMenuItem(menuId.toString())}
                  className='block mt-1 px-2 py-1 text-white sm:text-slate-700 hover:text-black font-semibold rounded hover:bg-gray-200 sm:mt-0 sm:ml-2'>
                  {item.name}
                  {hasChildren && hasChildren}
                </a>
                <div className={openMenus[menuId.toString()] ? 'sm:fixed block bg-gray-500 ml-2 p-2' : 'hidden'}>{children}</div>
              </div>;
            })}
          </div>
        </nav>
      </div>
    </header>

  );
}

