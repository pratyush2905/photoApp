import React from 'react';
import WomanImg from '../img/contact/woman.png';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';
import { useContext } from 'react';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return <motion.section
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}

    className='section bg-white'>
    <div className="container mx-auto h-full">
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'></motion.div>

        <div 
        
        className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className='h1'> Contact Me </h1>
          <p className='mb-12'>I would love to get suggestions from you. </p>
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type="text" placeholder='Your Name' />
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type="email" placeholder='Your Email' />
            </div>
            <input
              className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type="text" placeholder='Your Name' />
            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send It</button>
          </form>
        </div>


        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ transition: transition1, duration: 1.5 }}
          className='lg:flex-1'>
          <img src={WomanImg} alt="Img" />
        </motion.div>


      </div>
    </div>
  </motion.section>;
};

export default Contact;
