import React, { useState, useEffect } from 'react';

const NewsTicker = () => {
  const newsItems = [
    "Latest Updates: केंद्र सरकार ने दो राज्यों को देंगे 7200 करोड़ की सौगात",
    "Breaking News: नए कृषि कानूनों पर किसानों का विरोध प्रदर्शन जारी",
    "Top Story: वैश्विक अर्थव्यवस्था में सुधार के संकेत",
  ];
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000); // Change news every 5 seconds
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="bg-red-700 text-white py-2 px-4 md:px-8 flex items-center overflow-hidden">
      <div className="bg-red-900 px-3 py-1 rounded-md text-sm font-semibold mr-4 whitespace-nowrap">
        Latest Updates
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="animate-marquee">
          <span className="whitespace-nowrap">{newsItems[currentNewsIndex]}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;