import React, { useState, useEffect } from "react";

const NewsCarousel = () => {
  const newsSlides = [
    {
      id: 1,
      image: "https://placehold.co/800x450/B71C1C/ffffff?text=Major+News+1",
      title: "पाकिस्तान के पूर्व प्रधानमंत्री शहबाज शरीफ",
      description: "पाकिस्तान के पूर्व प्रधानमंत्री शहबाज शरीफ ने देश की आर्थिक स्थिति पर चिंता व्यक्त की है।",
    },
    {
      id: 2,
      image: "https://placehold.co/800x450/880E4F/ffffff?text=Major+News+2",
      title: "चीन के राष्ट्रपति शी जिनपिंग",
      description: "चीन के राष्ट्रपति शी जिनपिंग ने वैश्विक शांति और सहयोग पर जोर दिया।",
    },
    {
      id: 3,
      image: "https://placehold.co/800x450/4A148C/ffffff?text=Major+News+3",
      title: "भारत के प्रधानमंत्री नरेंद्र मोदी",
      description: "भारत के प्रधानमंत्री नरेंद्र मोदी ने विभिन्न विकास परियोजनाओं का उद्घाटन किया।",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsSlides.length) % newsSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden rounded-xl shadow-md group">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {newsSlides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/800x450/B71C1C/ffffff?text=Image+Not+Found";
              }}
              className="w-full h-[220px] sm:h-[300px] md:h-[420px] object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-2xl font-bold">{slide.title}</h3>
              <p className="text-sm sm:text-base">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-opacity opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-opacity opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {newsSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            } hover:bg-white transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
