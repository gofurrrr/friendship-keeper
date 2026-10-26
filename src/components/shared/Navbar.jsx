import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="navbar-start">
        <a className="text-xl font-bold tracking-tight">
          Keen<span className="text-[#1a8862]">Keeper</span>
        </a>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex items-center gap-2">
          <li>
            <a className="bg-[#244d3f] text-white hover:bg-[#1a8862]/90 rounded-btn px-4 py-2 flex items-center gap-2 font-medium">
              <img
                src="/assests/home.png"
                alt=""
                className="h-4 w-4 brightness-0 invert"
              />
              Home
            </a>
          </li>
          <li>
            <a className="hover:bg-base-200 rounded-btn px-4 py-2 font-medium flex items-center gap-2">
              <img
                src="/assests/clock.png"
                alt=""
                className="h-4 w-4 brightness-0"
              />
              Timeline
            </a>
          </li>
          <li>
            <a className="hover:bg-base-200 rounded-btn px-4 py-2 font-medium flex items-center gap-2">
              <img
                src="/assests/Vector.png"
                alt=""
                className="h-4 w-4 brightness-0"
              />
              LC State
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
