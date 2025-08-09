import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'समाचार', icon: 'fas fa-newspaper', subMenu: ['राष्ट्रीय', 'अंतर्राष्ट्रीय', 'राज्य'] },
    { name: 'बॉलीवुड', icon: 'fas fa-film', subMenu: ['फिल्में', 'टीवी', 'संगीत'] },
    { name: 'भ्रमण मास', icon: 'fas fa-plane', subMenu: ['यात्रा', 'पर्यटन'] },
    { name: 'लाइफ स्टाइल', icon: 'fas fa-heart', subMenu: ['फैशन', 'स्वास्थ्य', 'व्यंजन'] },
    { name: 'श्रीरामचरितमानस', icon: 'fas fa-book', subMenu: [] },
    { name: 'ज्योतिष', icon: 'fas fa-star', subMenu: ['राशिफल', 'पंचांग'] },
    { name: 'क्रिकेट', icon: 'fas fa-cricket', subMenu: ['मैच', 'खिलाड़ी'] },
    { name: 'धर्म संग्रह', icon: 'fas fa-church', subMenu: ['मंदिर', 'त्योहार'] },
  ];

  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="text-red-800 font-extrabold text-2xl tracking-wide">
            KRANTIKARI<span className="text-gray-700">DUNIYA</span>
          </div>
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <a href="#" className="text-gray-700 hover:text-red-800 transition-all duration-200 flex items-center gap-1">
                  <i className={`${item.icon} text-sm`}></i>
                  {item.name}
                  {item.subMenu.length > 0 && <i className="fas fa-chevron-down text-xs ml-1"></i>}
                </a>
                {item.subMenu.length > 0 && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 z-50 min-w-[140px] opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition duration-200">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-red-100 hover:text-red-800">
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-md animate-fade-in-down">
          <ul className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-gray-700 font-medium flex items-center gap-2">
                    <i className={`${item.icon} text-base`}></i>
                    {item.name}
                  </a>
                </div>
                {item.subMenu.length > 0 && (
                  <ul className="pl-6 mt-2 space-y-1">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href="#" className="text-gray-600 hover:text-red-700 text-sm block">
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
