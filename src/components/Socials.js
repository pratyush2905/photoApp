import React, { useContext } from 'react';
import { CursorContext } from '../context/CursorContext';
import {
  ImFacebook,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im'
const Socials = () => {

  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaverHandler}
      className='hidden xl:flex  ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href="http://www.facebook.com" target="_blank">
            <ImFacebook />
          </a>
        </li>

        <li>
          <a href="http://www.pinterest.com" target="_blank">
            <ImPinterest />
          </a>
        </li>

        <li>
          <a href="http://www.instagram.com" target="_blank">
            <ImInstagram />
          </a>
        </li>

        <li>
          <a href="http://www.youtube.com" target="_blank">
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
