import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const menuItems = [
  { name: "home", path: "/" },
  { name: "The Story", path: "/story" },
  { name: "The Collection", path: "/collection" },
  { name: "Connect", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>

<div className="hidden md:flex relative w-full bg-black text-white z-0 px-30 pt-20 items-center justify-between">

  <ul className="flex flex-col space-y-2 font-Italiana text-lg">
    {menuItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        end
        className={({ isActive }) =>
          `flex items-center gap-2 transition-all duration-300 ${
            isActive ? "text-gray-400" : "text-white hover:text-gray-300"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && <span className="text-xl">→</span>}
            <span>{item.name}</span>
          </>
        )}
      </NavLink>
    ))}
  </ul>

 
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <img
      src={logo}
      alt="Logo"
      className="h-92 md:h-96 lg:h-84 w-auto"
    />
  </div>


  <div className="text-white text-xl">
    © 2026
  </div>
</div>


     
      <div className="md:hidden w-full z-50 bg-black text-white">
        <div className="flex items-center justify-between px-5 py-4">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>

        {open && (
          <div className="px-6 pb-6 bg-black">
            <ul className="space-y-3 font-Italiana text-lg">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <span>→</span>}
                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </ul>

            <p className="mt-6 text-sm text-gray-400">© 2026</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
