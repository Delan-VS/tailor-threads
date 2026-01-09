import React from "react";
import img1 from "../assets/images/g1.jpg";
import img2 from "../assets/images/g2.jpg";
import img3 from "../assets/images/g3.jpg";
import img4 from "../assets/images/g4.jpg";
import img5 from "../assets/images/g5.jpg";

const images = [
  img1, img2, img3, img4, img5,
  img1, img2, img3, img4, img5,
];

const Gallery = () => {
  return (
    <div className="bg-black text-white min-h-screen px-8 md:px-20 py-20">

   
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide">
          The Gallery
        </h1>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          A visual exploration of form, fabric, and freedom
        </p>
      </div>

    
      <div className="flex flex-col gap-10">
      
        {[0, 5].map((start) => (
          <div
            key={start}
            className="flex w-full h-[520px] gap-6"
          >
            {images.slice(start, start + 5).map((img, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  flex-1
                  transition-all
                  duration-500
                  ease-in-out
                  hover:flex-[2]
                "
              >
                <img
                  src={img}
                  alt="gallery"
                  className="
                    w-full
                    h-full
                    object-cover
                    grayscale
                    group-hover:grayscale-0
                    transition-all
                    duration-500
                  "
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
