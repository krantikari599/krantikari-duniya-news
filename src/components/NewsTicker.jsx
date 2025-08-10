import React from "react";

const NewsTicker = () => {
  const newsItems = [
    "Latest Updates: केंद्र सरकार ने दो राज्यों को देंगे 7200 करोड़ की सौगात",
    "Breaking News: नए कृषि कानूनों पर किसानों का विरोध प्रदर्शन जारी",
    "Top Story: वैश्विक अर्थव्यवस्था में सुधार के संकेत",
  ];

  return (
    <div className="flex items-center bg-red-700 text-white py-2 px-4 md:px-8 overflow-hidden">
      {/* Left Fixed Label */}
      <div className="bg-red-900 px-3 py-1 rounded-md text-xs sm:text-sm font-semibold mr-4 whitespace-nowrap">
        Latest Updates
      </div>

      {/* Continuous Marquee */}
      <div className="flex-1 overflow-hidden">
        <div className="inline-block animate-marquee whitespace-nowrap">
          {newsItems.map((item, i) => (
            <span key={i} className="mx-8 text-xs sm:text-sm md:text-base">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
