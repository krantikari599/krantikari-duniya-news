import React from 'react';

const SidebarAd = ({ imageUrl, altText }) => {
  return (
    <div className="bg-white p-2 rounded-lg shadow-md mb-4">
      <a href="#" className="block">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-auto object-cover rounded-md"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x250/cccccc/333333?text=Advertisement"; }}
        />
      </a>
    </div>
  );
};

export default SidebarAd;
