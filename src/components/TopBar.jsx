import React, { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
  FaInstagram,
  FaSignInAlt,
} from 'react-icons/fa';

const TopBar = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <div className="bg-red-800 text-white px-4 py-2 md:px-8 text-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Date */}
        <div className="text-center sm:text-left">{currentDate}</div>

        {/* Social Media + Login */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-300">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram />
          </a>
          <a
            href="/login"
            className="hover:text-gray-300 flex items-center gap-1"
            aria-label="Sign In"
          >
            <FaSignInAlt /> <span>Sign In</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
