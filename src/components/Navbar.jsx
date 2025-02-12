import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./Hamburger";
const LINKS = [
  {
    name: "Home",
    link: "/home",
  },{
    name: "Scoreboard",
    link: "/scoreboard",
  },
  {
    name: "Popular Players",
    link: "/popular-players",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  
];
function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  // const param = 
  function toggleNav() {
    setNavOpen((old) => !old);
  }
  return (
    <nav className="relative bg-zinc-100 text-gray-950 flex justify-between flex-col md:flex-row items-center shadow-lg py-4 px-4">
      <Hamburger toggleNav={toggleNav} navOpen={navOpen}/>

      <NavLink to={"/"} className="px-4 font-bold text-xl py-2 text-teal-900 md:text-2xl lg:text-4xl">
        LOGO
      </NavLink>
      <div
        className={`flex md:hidden flex-col items-center w-full  gap-4 font-semibold justify-end py-2 px-4 text-lg ${
          navOpen ? "" : "hidden"
        } transform-flat ease-in-out`}
      >
        {LINKS.map((item) => (
          <NavLink
            to={item.link}
            key={item.link}
            className={`border-b-2 w-full hover:text-gray-500 border-gray-300   ${
              activeTab === item.name ? "text-gray-500 text-xl" : ""
            }`}
            onClick={() => {
              setActiveTab(item.name);
              setNavOpen(false);
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div
        className={`md:flex hidden items-center gap-4 lg:gap-8 font-semibold justify-end py-2 px-4 text-lg ${
          navOpen ? "invisible hidden" : ""
        } md:visible transform-flat ease-in-out`}
      >
        {LINKS.map((item) => (
          <NavLink
            key={item.link}
            to={item.link}
            className={`border-b-2 hover:text-gray-500 border-gray-500 lg:text-xl ${
              activeTab === item.name ? "text-gray-500" : ""
            }`}
            onClick={() => setActiveTab(item.name)}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
