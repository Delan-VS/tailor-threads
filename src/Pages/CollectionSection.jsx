import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import collbg1 from "../assets/Images/collbg1.png";
import collbg2 from "../assets/Images/collbg2.png";
import collbg3 from "../assets/Images/colbg3.png";
import collbg4 from "../assets/Images/colbg4.png";
import collbg5 from "../assets/Images/colbg5.png";

import coimg1 from "../assets/Images/coimg1.png";
import coimg2 from "../assets/Images/coimg2.jpg";
import coimg3 from "../assets/Images/colimg3.jpg";

import coimg4 from "../assets/Images/coimg4.jpg";
import coimg5 from "../assets/Images/coimg5.jpg";
import coimg6 from "../assets/Images/coimg6.png";

import coimg7 from "../assets/Images/coimg7.jpg";
import coimg8 from "../assets/Images/coimg8.jpg";
import coimg9 from "../assets/Images/coimg9.jpg";

import coimg10 from "../assets/Images/coimg10.jpg";
import coimg11 from "../assets/Images/coimg11.jpg";
import coimg12 from "../assets/Images/coimg12.jpg";

import coimg13 from "../assets/Images/coimg13.jpg";
import coimg14 from "../assets/Images/coimg14.jpg";
import coimg15 from "../assets/Images/coimg15.jpg";

/* ===== DATA ===== */
const sections = [
  { title: "Essential Form", bg: collbg1, images: [coimg1, coimg2, coimg3] },
  { title: "Pure Silhouette", bg: collbg2, images: [coimg4, coimg5, coimg6] },
  { title: "The Core Edit", bg: collbg3, images: [coimg7, coimg8, coimg9] },
  { title: "Refined Basics", bg: collbg4, images: [coimg10, coimg11, coimg12] },
  { title: "Modern Ease", bg: collbg5, images: [coimg13, coimg14, coimg15] },
];

const CollectionSection = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const [bgUp, setBgUp] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [exitImages, setExitImages] = useState(false);


  useEffect(() => {
    setTimeout(() => setBgUp(true), 100);
    setTimeout(() => setShowText(true), 1300);
    setTimeout(() => setShowImages(true), 2100);
  }, []);

  
  const handleSectionClick = (index) => {
    if (index === active) return;

    setExitImages(true);

    setTimeout(() => {
      setActive(index);
      setExitImages(false);
    }, 700);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-[Kinghood]">

    
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-50 bg-black/60 px-5 py-3 rounded-full"
      >
        ← Back
      </button>

     
      <div
        className={`absolute inset-0 transition-transform duration-[1200ms] ease-out
          ${bgUp ? "translate-y-0" : "translate-y-full"}
        `}
        style={{
          backgroundImage: `
            linear-gradient(to top, rgba(255,255,255,0.35), rgba(0,0,0,0.85)),
            url(${sections[active].bg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

     
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

      
        <div className="space-y-6">
          {sections.map((item, i) => (
            <h1
              key={i}
              onClick={() => handleSectionClick(i)}
              className={`cursor-pointer text-3xl md:text-6xl font-light transition-all duration-700
                ${showText ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
                ${active === i ? "opacity-100" : "opacity-40 hover:opacity-70"}
              `}
            >
              {item.title}
            </h1>
          ))}
        </div>

        
        <div className="relative h-[520px]">

        
          <img
            src={sections[active].images[0]}
            className={`absolute right-[340px] top-0 bottom-20 w-[240px] h-[300px] object-cover rotate-[-6deg]
              transition-all duration-700
              ${exitImages ? "-translate-y-40 opacity-0" : "translate-y-0 opacity-100"}
              ${showImages ? "" : "opacity-0 translate-y-32"}
            `}
          />

        
          <img
            src={sections[active].images[1]}
            className={`absolute right-0 top-14 w-[260px] h-[360px] object-cover rotate-[4deg] z-20
              transition-all duration-700 delay-100
              ${exitImages ? "-translate-y-40 opacity-0" : "translate-y-0 opacity-100"}
              ${showImages ? "" : "opacity-0 translate-y-32"}
            `}
          />

        
          <img
            src={sections[active].images[2]}
            className={`absolute right-[340px] bottom-[-120px] w-[240px] h-[320px] object-cover rotate-[-3deg]
              transition-all duration-700 delay-200
              ${exitImages ? "-translate-y-40 opacity-0" : "translate-y-0 opacity-100"}
              ${showImages ? "" : "opacity-0 translate-y-32"}
            `}
          />

        </div>
      </div>

    
      <button
        onClick={() => navigate("/innercollection")}
        className="absolute bottom-6 right-6 z-40 bg-white text-black font-bold px-8 py-3 text-xs tracking-widest"
      >
        EXPLORE MORE
      </button>
    </div>
  );
};

export default CollectionSection;
