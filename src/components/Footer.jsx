import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-8 px-4 md:px-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-red-100">
            Krantikaridunia is a leading news and information portal providing the latest updates in various languages.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline text-red-100">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline text-red-100">Terms of Service</a></li>
            <li><a href="#" className="hover:underline text-red-100">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline text-red-100">National News</a></li>
            <li><a href="#" className="hover:underline text-red-100">International News</a></li>
            <li><a href="#" className="hover:underline text-red-100">Entertainment</a></li>
            <li><a href="#" className="hover:underline text-red-100">Lifestyle</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-red-700 mt-8 pt-6 text-center text-sm text-red-200">
        &copy; {new Date().getFullYear()} Krantikaridunia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;