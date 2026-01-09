import React, { useState } from "react";

import img1 from "../assets/images/inimg1.jpg";
import img2 from "../assets/images/inimg2.jpg";
import img3 from "../assets/images/inimg3.jpg";
import img4 from "../assets/images/inimg4.jpg";

const colorOptions = [
  { name: "Black", value: "#000000" },
  { name: "Maroon", value: "#9F0F0F" },
  { name: "Grey", value: "#6B7280" },
  { name: "Sand", value: "#C7A17A" },
];

const sizes = ["XS", "S", "M", "L", "XL"];

const relatedProducts = [img1, img2, img3, img4];

const InnerCollection = () => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="bg-black text-white px-6 md:px-16 py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="w-full h-[500px]">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

       
        <div className="grid grid-rows-2 gap-6 h-[500px]">

          <div className="grid grid-cols-2 gap-6 h-full">
            <img src={img2} className="w-full h-full object-cover rounded-lg" />
            <img src={img3} className="w-full h-full object-cover rounded-lg" />
          </div>

          <img
            src={img4}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <div>
          <h1 className="text-3xl  font-[Kinghood] md:text-4xl font-semibold mb-4">
           Nike Forward Hoodie
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-400">(128 Reviews)</span>
          </div>

          {/* Color */}
          <div className="mb-6">
            <h4 className="font-medium mb-1">Color</h4>
            <p className="text-sm text-gray-400 mb-3">
              {selectedColor.name}
            </p>

            <div className="flex gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color.value }}
                  className={`w-8 h-8 rounded-full border-2 transition ${
                    selectedColor.name === color.name
                      ? "border-white"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <h4 className="mb-3 font-medium">Size</h4>
            <div className="flex gap-3 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-white text-black"
                      : "border-gray-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          
          <p className="text-gray-300 leading-relaxed">
         Nike Forward catapults your classic hoodie into the future. Unlike traditional knit fabrics, Nike Forward combines multiple thin layers of select fibres for an exceptionally lightweight feel that’s effortlessly warm and comfortable. Plus, this first iteration of Nike Forward reduces the carbon footprint by an average of 75% due to the use of recycled materials, lower process-energy use, and lower material density when used instead of our traditional knit fleece materials.
          </p>
        </div>

      
        <div>
          <div className="flex items-center justify-between p-8 rounded-2xl bg-[#9F0F0F]  mb-6">
            <h2 className="text-3xl font-semibold">₹3,499</h2>
            <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition">
              Buy Now
            </button>
          </div>

        
<div className="bg-[#111] p-6 rounded-lg space-y-4 max-h-[300px] overflow-y-auto no-scrollbar">
  <h4 className="text-lg font-medium">Customer Reviews</h4>

  {[1, 2, 3, 4].map((item) => (
    <div key={item} className="border-b border-gray-700 pb-4">
      <span className="text-yellow-400">★★★★☆</span>
      <p className="text-sm text-gray-300 mt-1">
        Premium feel and perfect fit. Would buy again.
      </p>
    </div>
  ))}
</div>

        </div>
      </div>

     
      <div className="mt-24">
        <h3 className="text-2xl font-semibold mb-8">
          Related Products
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[280px] object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnerCollection;
