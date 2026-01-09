import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#9F0F0F] text-white px-6 md:px-16 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* BRAND */}
        <div className="space-y-4">
          <h3 className="text-2xl  tracking-wide">
            Tailor Threads
          </h3>
          <p className="text-xl leading-relaxed opacity-90">
            Clothing without boundaries, <br />
            designed with intention.
          </p>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold font-xl mb-4">Explore</h4>
          <ul className="space-y-2 text-xl opacity-90">
            <li className="hover:underline cursor-pointer">The Story</li>
            <li className="hover:underline cursor-pointer">The Collection</li>
            <li className="hover:underline cursor-pointer">Gallery</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div className="space-y-3">
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p className="text-xl opacity-90">tailorthreads@gmail.com</p>
          <p className="text-xl opacity-90">(+48) 762 864 075</p>
          <p className="text-xl opacity-90 leading-relaxed">
            123 Innovation Avenue, Suite 456 <br />
            Tech District, San Francisco, CA 94107 <br />
            United States
          </p>
        </div>

      </div>

      
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Tailor Threads. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
