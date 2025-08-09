import React from 'react';

const TrendingNews = () => {
  const trendingItems = [
    "बिहार में नीतीश कैबिनेट का बड़ा फैसला, 125 यूनिट बिजली मिलेगी फ्री, जानें कब से लागू होगी स्कीम",
    "IIT खड़गपुर में फंदे से लटका छात्रा का शव, परिसर में इस तरह का चौथा मामला",
    "क्लिनिक के लिए राकेश रोशन की नवीन बिल्डिंग, मदन की हुई रजिस्ट्री, अस्पताल में भर्ती",
    "Kiss Cam पर पकड़े गए एक CEO और HR Head, Coldplay के शो से नया सोशल मीडिया पर वायरल! [VIDEO]",
    "मिदनापुर जिले में एक्सप्रेस ट्रेन की टक्कर से 3 लोगों की मौत, जांच के आदेश",
    "प्रधानमंत्री मोदी का अमेरिका दौरा तय, रक्षा समझौतों पर होंगे बड़े फैसले"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b-2 border-red-600 pb-2">
        <span className="text-red-600 text-xl mr-2">🔥</span> ट्रेंडिंग
      </h2>

      <ul className="space-y-3">
        {trendingItems.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 hover:bg-gray-50 p-2 rounded-lg transition"
          >
            <div className="w-6 h-6 bg-red-600 text-white text-xs font-bold flex items-center justify-center rounded-full shrink-0">
              {index + 1}
            </div>
            <a
              href="#"
              className="text-sm text-gray-800 leading-snug hover:text-red-600 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingNews;
