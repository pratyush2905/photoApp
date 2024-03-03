import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import { useContext } from 'react';

const MenuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.1, -0.05, 0.09]
    },
  },
}


const MobileNav = () => {
  const [openMenu, setMenu] = useState(false);
  return (
    <nav className='text-primary xl:hidden'>
      <div
        onClick={() => setMenu(!openMenu)}
        className='text-3xl cursor-pointer'>
        <CgMenuRight />
      </div>
      <motion.div variants={MenuVariants}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-white shadow-2xl w-full absolute right-0 top-0 max-w-xs h-screen z-20'>
        <div
          onClick={() => setMenu(!openMenu)}
          className='text-4xl z-20 left-4 absolute top-14 text-primary cursor-pointer'>
          <IoMdClose />
        </div>
        <ul className='h-full flex flex-col justify-center items-center gap-y-9 text-primary font-bold text-3xl font-primary'>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/about'>About</Link>
          </li>

          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>

          <li>
            <Link to='/contact'>Contact Me</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
