import React from "react";
import logo from "../assets/logo_white.png";
import logo2 from "../assets/logo_black.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-15 flex item-center justify-between py-6">
      <div className="group flex flex-shrink-0 items-center w-1/2">
        <img
          className="w-1/5 h-20 mx-2 group-hover:hidden"
          src={logo}
          alt="logo"
        ></img>
        <img
          className="w-1/5 h-20 mx-2 hidden group-hover:block"
          src={logo2}
          alt="logo"
        ></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          target="_blank"
          className="hover:text-[#0077B5]"
          href="https://www.linkedin.com/in/aavash-bhattarai-2a92a7242/"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:text-black"
          href="https://github.com/Aavash1738"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="hover:text-[#E1306c]"
          target="_blank"
          href="https://www.instagram.com/aavash.2002/"
        >
          <FaInstagram />
        </a>
        <a
          className="hover:text-[#ea4335]"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bhattaraiaavash1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegEnvelope />
        </a>
        <a
          className="hover:text-[#39ee9b] "
          href="https://linktr.ee/Aavash1738"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinktree />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
