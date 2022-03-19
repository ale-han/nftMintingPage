import React from "react";
import "./header.scss";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaAngleDown,
  FaSearch,
} from "react-icons/fa";

export default function index() {
  return (
    <>
      <header className="bg-black text-white flex items-center h-24">
        <span className="absolute flex items-center left-48">
          <FaPhoneAlt className="text-red-500 mx-2" />
          (1234) 4567 7890
          <FaEnvelope className="text-red-500 mx-2 ml-8" />
          Your Mail @Gamil.com
        </span>
        <span className="absolute flex items-center right-48">
          <FaFacebookF className="text-red-500 mx-2" />
          <FaLinkedinIn className="text-red-500 mx-2" />
          <FaInstagram className="text-red-500 mx-2 mr-8" />
          En
          <FaAngleDown className="bg-red" />
        </span>
      </header>
      <header className="absolute text-white px-48 flex h-24 items-center w-full">
        <span className="text-3xl font-bold">LOGO</span>
        <span className=" w-5/6">
          <ul className="flex justify-center">
            <li>About</li>
            <li>Features</li>
            <li>RoadMap</li>
            <li>Team</li>
            <li>Eaq</li>
          </ul>
        </span>
        <FaSearch />
        <button className="shrink-0 px-4 mx-3">JOIN OUR DISCORD</button>
      </header>
    </>
  );
}
