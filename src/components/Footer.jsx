import React from "react";
import { IoIosContact } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-950 text-white absolute left-0 w-full bottom-0 py-4 px-8">
      <div className="flex items-center gap-2 justify-end">
        <Link to={'/home'} className="cursor-pointer">
          <IoMdHome />
        </Link>
        <Link to={'/contact-us'} className="cursor-pointer">
          <IoCall />
        </Link>
        <Link to={'/scores'} className="cursor-pointer">
          <FaList />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
