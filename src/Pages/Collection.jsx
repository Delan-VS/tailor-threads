import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import collimg1 from "../assets/Images/collimg1.jpg";
import collimg2 from "../assets/Images/collimg2.jpg";
import collimg3 from "../assets/Images/collimg3.jpg";
import collimg4 from "../assets/Images/collimg4.png";
import collimg5 from "../assets/Images/collimg5.jpg";

const Collection = ({ setNavbarFade }) => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const handleExplore = () => {
    setAnimate(true);

    setTimeout(() => {
      setNavbarFade(true);
    }, 400);

    setTimeout(() => {
      navigate("/collectionSection");
    }, 1600);
  };

  return (
    <div className="bg-black text-white py-20 sm:py-24 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-8">

        <div
          className={`transition-all duration-[1200ms] ease-in-out
          ${animate ? "-translate-y-40 opacity-0" : "translate-y-0 opacity-100"}
          `}
        >
          <h1 className="text-4xl sm:text-6xl md:text-9xl  font-[Kinghood] font-light leading-tight">
            Where Visuals Breathe <br /> and Belong
          </h1>

          <p className="text-gray-400 max-w-xl sm:max-w-2xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base">
            A thoughtfully curated space where every image has purpose,
            presence, and a place.
          </p>

          <button
            onClick={handleExplore}
            className="mt-6 sm:mt-8 border bg-white text-black font-semibold px-8 sm:px-10 py-3 sm:py-4 tracking-widest text-xs sm:text-sm"
          >
            Explore Now
          </button>
        </div>

       
        <div
          className={`relative mt-16 sm:mt-20 h-[420px] sm:h-[520px] md:h-[700px] w-full
          transition-all duration-[1200ms] ease-in-out
          ${animate ? "translate-y-48 opacity-0" : "translate-y-0 opacity-100"}
          `}
        >
          <img
            src={collimg5}
            alt=""
            className="absolute left-[2%] top-28 sm:top-32
            h-[180px] w-[130px]
            sm:h-[240px] sm:w-[180px]
            md:h-[360px] md:w-[260px]
            object-cover rotate-[-10deg] z-10"
          />

          <img
            src={collimg4}
            alt=""
            className="absolute left-[18%] top-10 sm:top-14
            h-[200px] w-[150px]
            sm:h-[260px] sm:w-[200px]
            md:h-[400px] md:w-[280px]
            object-cover rotate-[-5deg] z-20"
          />

          <img
            src={collimg3}
            alt=""
            className="absolute left-[38%] top-8 sm:top-12
            h-[230px] w-[170px]
            sm:h-[300px] sm:w-[220px]
            md:h-[460px] md:w-[320px]
            object-cover z-30"
          />

          <img
            src={collimg2}
            alt=""
            className="absolute left-[58%] top-10 sm:top-14
            h-[200px] w-[150px]
            sm:h-[260px] sm:w-[200px]
            md:h-[400px] md:w-[280px]
            object-cover rotate-[5deg] z-20"
          />

          <img
            src={collimg1}
            alt=""
            className="absolute left-[76%] top-28 sm:top-32
            h-[180px] w-[130px]
            sm:h-[240px] sm:w-[180px]
            md:h-[360px] md:w-[260px]
            object-cover rotate-[10deg] z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
