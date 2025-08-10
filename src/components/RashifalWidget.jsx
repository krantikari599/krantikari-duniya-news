import React, { useState } from "react";

const rashifals = [
  {
    rashi: "मेष (Aries)",
    icon: "♈",
    points: [
      "ऊर्जा से भरपूर दिन रहेगा।",
      "नए अवसर मिल सकते हैं।",
      "महत्वपूर्ण निर्णय लेने से लाभ।",
      "पारिवारिक समर्थन मिलेगा।",
      "सेहत का ध्यान रखें।"
    ]
  },
  {
    rashi: "वृषभ (Taurus)",
    icon: "♉",
    points: [
      "सामाजिक प्रतिष्ठा में वृद्धि।",
      "पदोन्नति की संभावना।",
      "धन लाभ के योग हैं।",
      "नए संपर्क बनेंगे।",
      "तनाव से बचें।"
    ]
  },
  {
    rashi: "मिथुन (Gemini)",
    icon: "♊",
    points: [
      "पारिवारिक जीवन सुखद रहेगा।",
      "कार्य में नई जिम्मेदारियाँ मिलेंगी।",
      "यात्रा के योग हैं।",
      "पुराने दोस्त से मुलाकात संभव।",
      "शुभ समाचार मिल सकता है।"
    ]
  },
  {
    rashi: "कर्क (Cancer)",
    icon: "♋",
    points: [
      "आर्थिक स्थिति सुधरेगी।",
      "निवेश में लाभ होगा।",
      "सेहत को लेकर सजग रहें।",
      "नए अवसरों पर विचार करें।",
      "परिवार में उत्सव का माहौल।"
    ]
  },
  {
    rashi: "सिंह (Leo)",
    icon: "♌",
    points: [
      "नए प्रोजेक्ट्स में सफलता।",
      "आत्मविश्वास में वृद्धि।",
      "नेतृत्व के गुण उभरेंगे।",
      "मित्रों का सहयोग मिलेगा।",
      "योजना सफल होगी।"
    ]
  },
  {
    rashi: "कन्या (Virgo)",
    icon: "♍",
    points: [
      "काम में एकाग्रता बनी रहेगी।",
      "नए विचार सफलता लाएंगे।",
      "स्वास्थ्य में सुधार होगा।",
      "परिवार के साथ आनंद का समय।",
      "आर्थिक योजनाएँ सफल होंगी।"
    ]
  },
  {
    rashi: "तुला (Libra)",
    icon: "♎",
    points: [
      "संतुलित दृष्टिकोण से सफलता मिलेगी।",
      "साझेदारी में लाभ होगा।",
      "सामाजिक मान-सम्मान बढ़ेगा।",
      "प्रेम संबंधों में प्रगाढ़ता आएगी।",
      "खर्चों पर नियंत्रण रखें।"
    ]
  },
  {
    rashi: "वृश्चिक (Scorpio)",
    icon: "♏",
    points: [
      "कार्यस्थल पर सम्मान मिलेगा।",
      "गुप्त शत्रु से सावधान रहें।",
      "धन लाभ के अवसर मिलेंगे।",
      "आध्यात्मिक रुचि बढ़ेगी।",
      "यात्रा में लाभ होगा।"
    ]
  },
  {
    rashi: "धनु (Sagittarius)",
    icon: "♐",
    points: [
      "लंबे समय से अटके काम पूरे होंगे।",
      "परिवार से सहयोग मिलेगा।",
      "नए प्रोजेक्ट में सफलता।",
      "शिक्षा के क्षेत्र में उन्नति।",
      "मन प्रसन्न रहेगा।"
    ]
  },
  {
    rashi: "मकर (Capricorn)",
    icon: "♑",
    points: [
      "प्रोफेशनल लाइफ में तरक्की।",
      "धन-संपत्ति के लाभ के योग।",
      "मित्रों का सहयोग मिलेगा।",
      "काम का दबाव बढ़ सकता है।",
      "समय का सही उपयोग करें।"
    ]
  },
  {
    rashi: "कुंभ (Aquarius)",
    icon: "♒",
    points: [
      "नई योजनाओं में सफलता।",
      "संपर्कों से लाभ होगा।",
      "विदेश यात्रा के योग।",
      "सामाजिक कार्य में भागीदारी।",
      "सेहत का विशेष ध्यान रखें।"
    ]
  },
  {
    rashi: "मीन (Pisces)",
    icon: "♓",
    points: [
      "आर्थिक स्थिति सुदृढ़ होगी।",
      "नए अवसरों का लाभ लें।",
      "प्रेम संबंध मजबूत होंगे।",
      "रचनात्मक कार्य में रुचि।",
      "धार्मिक कार्यों में मन लगेगा।"
    ]
  }
];

const RashifalCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(prev => (prev + 1) % rashifals.length);
  const prev = () => setCurrent(prev => (prev - 1 + rashifals.length) % rashifals.length);

  const currentRashi = rashifals[current];

  return (
    <div className="bg-yellow-50 p-4 sm:p-6 rounded-xl shadow-lg max-w-full sm:max-w-3xl mx-auto border border-yellow-200 transition-all duration-300">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between border-b border-yellow-400 pb-3 mb-4 space-y-3 sm:space-y-0">
        <h2 className="text-xl sm:text-2xl font-bold text-yellow-900 text-center sm:text-left">
          ✨ आज का राशिफल
        </h2>

        <div className="space-x-3">
          <button
            onClick={prev}
            className="px-3 py-1 rounded-full bg-yellow-200 hover:bg-yellow-300 text-yellow-800"
            aria-label="Previous"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={next}
            className="px-3 py-1 rounded-full bg-yellow-200 hover:bg-yellow-300 text-yellow-800"
            aria-label="Next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Rashi Content */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-4 sm:space-y-0">
        
        {/* Icon & Rashi Name */}
        <div className="text-center sm:text-left sm:w-1/3">
          <div className="text-5xl sm:text-6xl text-yellow-700">{currentRashi.icon}</div>
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-800 mt-2">
            {currentRashi.rashi}
          </h3>
        </div>

        {/* Points */}
        <div className="sm:w-2/3">
          <ul className="list-disc list-inside text-yellow-900 text-sm sm:text-base space-y-1">
            {currentRashi.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <a
            href="#"
            className="text-yellow-800 hover:underline text-sm sm:text-base font-semibold inline-block mt-4"
          >
            और पढ़ें...
          </a>
        </div>
      </div>
    </div>
  );
};

export default RashifalCarousel;