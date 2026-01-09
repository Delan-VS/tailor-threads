import React, { useState, useMemo, useRef, useEffect } from "react";
import Navbar from "./Navbar";

import img1 from "../assets/Images/img1.png";
import img2 from "../assets/Images/img2.png";
import img3 from "../assets/Images/img3.png";
import img4 from "../assets/Images/img4.jpg";
import img5 from "../assets/Images/img5.png";
import img6 from "../assets/Images/img6.png";
import img7 from "../assets/Images/img7.jpg";
import img8 from "../assets/Images/img8.jpg";
import img9 from "../assets/Images/img9.png";
import img10 from "../assets/Images/img10.png";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
];

const Banner = () => {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const hideTimer = useRef(null);


  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const floatingImages = useMemo(() => {
    return images.map((src, i) => {
      let left;

      if (i % 3 === 0) {
        left = `${2 + Math.random() * 18}%`;
      } else if (i % 3 === 1) {
        left = `${35 + Math.random() * 30}%`;
      } else {
        left = `${70 + Math.random() * 18}%`;
      }

      return {
        src,
        top: `${10 + Math.random() * 70}%`,
        left,
        rotate: Math.random() * 14 - 7,
      };
    });
  }, []);


  const handlePointerMove = (x, y) => {
    setMouse({ x, y });

    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setMouse({ x: -9999, y: -9999 });
    }, 700);
  };

  const handleMouseMove = (e) => {
    handlePointerMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    if (!e.touches[0]) return;
    const touch = e.touches[0];
    handlePointerMove(touch.clientX, touch.clientY);
  };

  return (
    <div
      className="
        relative w-screen min-h-screen
        bg-black overflow-hidden pb-10
      "
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseLeave={() => setMouse({ x: -9999, y: -9999 })}
      onTouchEnd={() => setMouse({ x: -9999, y: -9999 })}
    >
      <Navbar />


      <div className="relative z-10 text-white text-center px-4 pt-6 md:pt-8">
        <h1
          className="
            uppercase tracking-widest leading-[0.95]
            text-[2.4rem]
            sm:text-[3.2rem]
            md:text-[6rem]
            lg:text-[8rem]
          "
          style={{ fontFamily: "Italiana" }}
        >
          Luxury in <br /> every thread
        </h1>

        <div className="text-gray-400 px-3 py-2 text-sm sm:text-base md:text-xl">
          Enter a realm where precision tailoring, subtle details, and artistic
          vision <br className="hidden sm:block" />
          unite to tell a story through every cut, fold, and flowing line.
        </div>

        <div className="flex items-center gap-4 mt-4 max-w-3xl mx-auto">
          <div className="flex-1 h-[1px] bg-gray-600" />
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            Let the story <br />
            unfold below
          </p>
          <div className="flex-1 h-[1px] bg-gray-600" />
        </div>
      </div>


      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="h-20 sm:h-24 w-[1px] bg-gray-500" />
        <span className="text-gray-400 text-lg sm:text-xl animate-bounce">
          ↓
        </span>
      </div>

  
      {floatingImages.map((img, i) => {
        const dx =
          mouse.x - (viewport.width * parseFloat(img.left)) / 100;
        const dy =
          mouse.y - (viewport.height * parseFloat(img.top)) / 100;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const visible =
          viewport.width < 768
            ? distance < 180  
            : viewport.width < 1024
            ? distance < 220  
            : distance < 260;

        return (
          <img
            key={i}
            src={img.src}
            alt=""
            className="
              absolute object-cover pointer-events-none
              transition-opacity duration-500 ease-out
              w-36 h-52
              sm:w-44 sm:h-64
              md:w-52 md:h-76
              lg:w-64 lg:h-96
            "
            style={{
              top: img.top,
              left: img.left,
              transform: `rotate(${img.rotate}deg)`,
              opacity: visible ? 1 : 0,
            }}
          />
        );
      })}
    </div>
  );
};

export default Banner;
