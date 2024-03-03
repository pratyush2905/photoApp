import React, { useContext } from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import { CursorContext } from '../context/CursorContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return <header className=' fixed w-full px-[30px]   lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaverHandler}
      className="flex flex-col lg:flex-row lg:items-center justify-between w-full">
      <Link to={'/'} className='max-w-[200px]'>
        <img src={Logo} alt="Logo.png" />
      </Link>
      <nav className='hidden xl:flex gap-x-12 font-semibold'>
        <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
          Home</Link>

        <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
          About</Link>

        <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
          Portfolio</Link>


        <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
          Contact Me</Link>
      </nav>
    </div>
    <Socials />
    <MobileNav />
  </header>;
};

export default Header;
