import React from "react";

const newsItems = [
  {
    title: "चंद्रयान-4 मिशन की तैयारी शुरू, ISRO ने दी जानकारी",
    description: "ISRO ने चंद्रयान-4 मिशन की पुष्टि की है जिसमें मानव मिशन की तैयारी भी शामिल है।",
    image: "https://source.unsplash.com/800x500/?space,rocket",
  },
  {
    title: "दिल्ली-NCR में बारिश का अलर्ट, IMD ने जारी किया येलो अलर्ट",
    description: "भारी बारिश के चलते ट्रैफिक और जलभराव की स्थिति बन सकती है।",
    image: "https://source.unsplash.com/800x500/?rain,weather",
  },
  {
    title: "एशियाई खेलों में भारत को अब तक 20 स्वर्ण पदक",
    description: "भारतीय खिलाड़ियों का प्रदर्शन शानदार रहा है।",
    image: "https://source.unsplash.com/800x500/?sports,india",
  },
  {
    title: "ऑटो सेक्टर में उछाल, EV बिक्री में 60% की वृद्धि",
    description: "इलेक्ट्रिक वाहन बिक्री में तेजी आई है।",
    image: "https://source.unsplash.com/800x500/?electric-car,india",
  },
  {
    title: "अमेरिका में राष्ट्रपति चुनाव की सरगर्मियां तेज़",
    description: "विभिन्न राज्यों में प्रचार अभियान तेज हो गया है।",
    image: "https://source.unsplash.com/800x500/?usa,election",
  },
  {
    title: "भारतीय शेयर बाजार में तेजी, सेंसेक्स 700 अंक चढ़ा",
    description: "बाजार में सकारात्मक रुझानों से निवेशकों का भरोसा बढ़ा है।",
    image: "https://source.unsplash.com/800x500/?stock-market,india",
  },
  {
    title: "भारतीय शेयर बाजार में तेजी, सेंसेक्स 700 अंक चढ़ा",
    description: "बाजार में सकारात्मक रुझानों से निवेशकों का भरोसा बढ़ा है।",
    image: "https://source.unsplash.com/800x500/?stock-market,india",
  },
  {
    title: "भारतीय शेयर बाजार में तेजी, सेंसेक्स 700 अंक चढ़ा",
    description: "बाजार में सकारात्मक रुझानों से निवेशकों का भरोसा बढ़ा है।",
    image: "https://source.unsplash.com/800x500/?stock-market,india",
  },
];

const MoreNews = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-600 pl-4">
        अन्य प्रमुख ख़बरें
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow group transition hover:shadow-md"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-900 group-hover:text-red-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreNews;
