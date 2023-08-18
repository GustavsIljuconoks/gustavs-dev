import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/NavBar.css';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState('');
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
    <nav className="w-full flex items-center justify-center py-5 px-6 sticky z-20 text-[18px] shadow-md md:text-[20px]">
      <div className="w-full flex justify-between items-center mx-auto">
        <Link to="/" className='flex-items-center gap-2' 
          onClick={ () => 
            {setActive("");
            pageUp
          }}>
            <h3 className="logo object-contain font-bold">gustavs.dev</h3>            
        </Link>

        <ul className='flex gap-10 list-none'>
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`${
                active === item.title 
                ? "text-accent"
                : "text-black"
              } hover:text-accent cursor-pointer font-bold transition-colors duration-200 ease-in-out`} 
              onClick={() => setActive(item.link)}
            >
              <a href={`${item.link}`} className='hidden md:block'>{item.title}</a>
            </li>
          ))}

            <li onClick={() => hamburgerMenu()}>
              <img 
                src={menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer md:hidden"              
              />
            </li>
        </ul>
      </div> 
    </nav>

    {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
      <span onClick={() => hamburgerMenu()}>
        <img 
          src={close}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
        />
      </span>

      <ul className='flex flex-col gap-8 list-none'>
        {navLinks.map((item) => (
          <li key={item.title} onClick={() => hamburgerMenu()}>
            <a href={item.link} className='font-bold text-none text-[20px]' >{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
}

export default Navbar;