import React, { useState } from "react";

const reels = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    user: "WeatherLive",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    title: "मौसम का नया अपडेट",
    desc: "बारिश और तेज़ हवाओं की लाइव रिपोर्ट!",
    tag: "LIVE"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    user: "CricketStar",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    title: "IPL एक्सक्लूसिव",
    desc: "आईपीएल स्टार का प्रेरक इंटरव्यू!",
    tag: "TRENDING"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
    user: "NewsDesk",
    avatar: "https://randomuser.me/api/portraits/women/66.jpg",
    title: "तेज़ हेडलाइंस",
    desc: "आज की बड़ी खबरें, अब छोटे वीडियो में।",
    tag: "FEATURED"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    user: "Reporter",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    title: "स्पोर्ट्स स्पेशल",
    desc: "खेल की दुनिया की ताज़ा हलचल।",
    tag: "SPORTS"
  }
];

export default function Reel() {
  const [start, setStart] = useState(0);
  const [openIdx, setOpenIdx] = useState(null); // modal for demo

  // Get 2 at a time (wrap around safely!)
  const count = reels.length;
  const idx1 = start;
  const idx2 = (start + 1) % count;
  const visibleReels = [reels[idx1], reels[idx2]];

  const prev = () => setStart((prev) => (prev - 1 + count) % count);
  const next = () => setStart((prev) => (prev + 1) % count);

  // For mobile: card width adjusts using w-[48vw], min-w-[140px], max-w-[210px]
  // For desktop: sm:w-[170px], md:max-w-[220px]

  return (
    <div className="bg-[#f4f1fa] px-2 py-3 rounded-xl shadow mb-5 border border-purple-200">
      <h2 className="text-lg sm:text-xl font-bold text-[#3b1769] mb-3 flex items-center gap-2">
        <span className="text-purple-700 text-2xl" aria-hidden>🎬</span>
        आज की रील्स
      </h2>
      <div className="relative flex items-center justify-center w-full">
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 z-20 top-1/2 -translate-y-1/2 bg-white border border-purple-200 shadow hover:bg-purple-100 rounded-full w-9 h-9 flex items-center justify-center text-purple-600 text-lg"
          style={{ marginLeft: '-10px' }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M13 16L8 10L13 4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="flex gap-3 w-full items-center justify-center">
          {visibleReels.map((reel, i) => (
            <div
              key={reel.id}
              className="relative sm:w-[170px] md:w-[200px] md:max-w-[220px] w-[48vw] min-w-[140px] max-w-[210px] h-[295px] sm:h-[315px] md:h-[350px] bg-white rounded-xl border border-purple-100 shadow flex flex-col justify-end group overflow-hidden transition-all cursor-pointer"
              onClick={() => setOpenIdx(reel.id)}
              tabIndex={0}
              role="button"
              aria-label={`${reel.title} रील देखें`}
            >
              <img
                src={reel.image}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                draggable={false}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <span className="w-14 h-14 flex items-center justify-center bg-red-600 rounded-full shadow-md border-2 border-white">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <polygon points="9,7 19,12 9,17" fill="#fff" />
                  </svg>
                </span>
              </div>
              <div className="relative z-30 bg-white/95 rounded-b-xl px-3 pb-2 pt-3 flex gap-2 items-end w-full border-t border-gray-100">
                <img
                  src={reel.avatar}
                  alt={reel.user}
                  className="w-8 h-8 rounded-full border-2 border-purple-200 shadow"
                />
                <div className="pl-1 text-[#472584] max-w-[115px]">
                  <div className="text-xs font-bold flex gap-1 items-center">
                    @{reel.user}
                    <span className="ml-1 text-[10px] bg-yellow-300 text-[#472584] py-0.5 px-1.5 rounded-full">{reel.tag}</span>
                  </div>
                  <div className="text-[15px] font-semibold truncate">{reel.title}</div>
                  <div className="text-xs text-[#7259a0] truncate">{reel.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 z-20 top-1/2 -translate-y-1/2 bg-white border border-purple-200 shadow hover:bg-purple-100 rounded-full w-9 h-9 flex items-center justify-center text-purple-600 text-lg"
          style={{ marginRight: '-10px' }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M7 16L12 10L7 4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-2">
        {reels.map((_, i) => (
          <span
            key={i}
            className={`inline-block mx-0.5 w-2 h-2 rounded-full ${i === start ? "bg-purple-700" : "bg-purple-200"}`}
          />
        ))}
      </div>

      {/* Simple Modal (Demo for "working on clicking") */}
      {openIdx && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOpenIdx(null)}
        >
          <div
            className="bg-white rounded-xl p-6 shadow-lg w-[90vw] max-w-sm flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={reels.find(r => r.id === openIdx).image} alt="" className="w-full h-40 object-cover rounded-lg mb-3" />
            <h3 className="font-bold text-purple-800 text-lg mb-1">{reels.find(r => r.id === openIdx).title}</h3>
            <p className="text-gray-600 mb-2">{reels.find(r => r.id === openIdx).desc}</p>
            <div className="flex items-center gap-2 mb-3">
              <img src={reels.find(r => r.id === openIdx).avatar} alt="" className="w-8 h-8 rounded-full border-2 border-purple-200 shadow" />
              <span className="text-sm text-[#472584] font-bold">@{reels.find(r => r.id === openIdx).user}</span>
              <span className="ml-1 text-[10px] bg-yellow-300 text-[#472584] py-0.5 px-1.5 rounded-full">{reels.find(r => r.id === openIdx).tag}</span>
            </div>
            <button
              className="px-4 py-1 rounded-md bg-purple-600 text-white font-bold mt-2"
              onClick={() => setOpenIdx(null)}
            >
              बंद करें
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
