import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const LINKS = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Scores",
    link: "/scores",
  },
];
function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  function toggleNav() {
    setNavOpen((old) => !old);
  }
  return (
    <nav className="relative bg-white text-gray-950 flex justify-between flex-col md:flex-row items-center shadow-lg py-4 px-4">
      <div className="absolute md:hidden top-5 right-5">
        <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white"
          onClick={() => toggleNav()}
        >
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                navOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                navOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current  transform  transition duration-500 ease-in-out ${
                navOpen ? "-rotate-45 " : "translate-y-1.5"
              } `}
            ></span>
          </div>
        </button>
      </div>

      <NavLink to={"/"} className="px-4 font-bold text-xl py-2 text-teal-900 ">
        LOGO
      </NavLink>
      <div
        className={`flex md:hidden flex-col items-center gap-4 font-semibold justify-end py-2 px-4 text-lg ${
          navOpen ? "" : "hidden"
        } transform-flat ease-in-out`}
      >
        {LINKS.map((item) => (
          <NavLink
            to={item.link}
            className={`border-b-2 hover:text-gray-500 border-gray-500 ${
              activeTab === item.name ? "text-gray-500 text-xl" : ""
            }`}
            onClick={() => {
              setActiveTab(item.name)
              setNavOpen(false);
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div
        className={`md:flex hidden items-center gap-4 font-semibold justify-end py-2 px-4 text-lg ${
          navOpen ? "invisible hidden" : ""
        } md:visible transform-flat ease-in-out`}
      >
        {LINKS.map((item) => (
          <NavLink
            to={item.link}
            className={`border-b-2 hover:text-gray-500 border-gray-500 ${
              activeTab === item.name ? "text-gray-500 text-xl" : ""
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
