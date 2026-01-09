import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/inimg1.jpg";
import img2 from "../assets/images/inimg2.jpg";
import img3 from "../assets/images/inimg3.jpg";
import img4 from "../assets/images/inimg4.jpg";

const images = [
  img1, img2, img3, img4,
  img1, img2, img3, img4,
];

const getYear = () => new Date().getFullYear();

const InnerCollection = () => {
  const navigate = useNavigate();

  const handleNavigate = (index) => {
    navigate("/collectiondetails");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">


      <div className="px-6 sm:px-10 pt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
          Essential Form
        </h1>

        <div className="flex items-center mt-4">
          <div className="flex-1 h-[1px] bg-white/70"></div>
          <span className="ml-3 text-xl">→</span>
        </div>
      </div>


      <div className="px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(index)}
            className="overflow-hidden cursor-pointer group"
          >
            <img
              src={img}
              alt={`collection-${index}`}
              className="
                w-full h-[380px] sm:h-[420px] md:h-[450px]
                object-cover
                transition-transform duration-500 ease-out
                group-hover:translate-x-3
              "
            />
          </div>
        ))}
      </div>


      <footer className="mt-auto border-t border-white/20 py-6 text-center text-sm tracking-wide">
        © {getYear()} Tailor Thread. All rights reserved.
      </footer>

    </div>
  );
};

export default InnerCollection;
