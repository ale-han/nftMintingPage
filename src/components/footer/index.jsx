import React from "react";
import "./footer.scss";
import backImage from "../../assets/4.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaDiscord,
  FaCriticalRole,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="footer1 relative text-center pb-16 bg-black">
        <div className="">
          <div className="text-white title text-center mx-auto">
            <h2 className="text-xl pt-20">The Party Never Stop</h2>
            <h1 className="text-4xl py-5 pb-12">
              Get Aped With Us Join Our Discord
            </h1>
          </div>
          <button className="mx-auto px-8">Let's Start</button>
        </div>
      </div>
      <div className="footer relative text-center pb-16">
        <img
          src={backImage}
          alt="backImage"
          className="w-full -z-10 absolute bg-cover h-full object-cover"
        />
        <div className="content mx-auto">
          <div className="text-white title text-center mx-auto">
            <h1 className="text-4xl py-5 pt-12">LOGO</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
              aliquet dolor pellentesque consectetur quisque nec convallis.
              Gravida egestas convallis adipiscing vitae curabitur urna sed.
              Proin tortor in ac faucibus. Sed risus lacus amet, lacus. Risus
              tristique urna nec ut sit varius...
            </p>
          </div>
        </div>
        <div className="flex icons justify-center mx-auto pt-4">
          <FaFacebookF className="icon" />
          <FaLinkedinIn className="icon" />
          <FaDiscord className="icon" />
          <FaInstagram className="icon" />
          <FaCriticalRole className="icon" />
        </div>
      </div>
    </>
  );
}
