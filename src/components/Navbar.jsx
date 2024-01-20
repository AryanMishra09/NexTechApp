/* eslint-disable no-unused-vars */

import { useState } from "react";
import { close , discount, logo, menu } from "../assets";
import { navLinks } from "../constants";

export default function Navbar() {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex pt-6 pb-16 justify-between items-center navbar">
      
      <img 
        src={discount} 
        alt="nextTechPay" 
        className="w-[80px] h-[80px]"
      />

      <h1 className="text-gradient text-[50px] font-bold">Nex</h1>
      <span className="text-white text-[50px] font-bold">Tech</span>
      <h1 className="text-gradient text-[50px] font-bold">Pay</h1>

      
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === (navLinks.length - 1) ? 'mr-0' : 'mr-10' }`}
          >
            
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
      </ul>

      
      {/* Menu bar for mobile size and below */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle? close : menu } 
            alt="menu"
            className="w-[28px] h-[28px] object-contain" 
            onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}>
            <ul className="list-none flex justify-end flex-col items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${index === (navLinks.length - 1) ? 'mb-0' : 'mb-4' }`}
                >
                  
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>

                </li>
              ))}
            </ul>
          </div>

      </div>

    </nav>
  )
}
