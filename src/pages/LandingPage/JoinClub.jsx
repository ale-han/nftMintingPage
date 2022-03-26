import React from "react";
import backImage from "../../assets/1.png";
import bannerTitle from "../../assets/join-club-text.png";
import "./joinclub.scss";
import { Link } from "react-router-dom";

export default function JoinClub() {
  return (
    <div className="con">
      <img
        src={backImage}
        alt="backImage"
        className="absolute bg-image bg-cover  -z-30 back-image"
      />
      <div className="content text-white text-center">
        <div className="banner mx-auto py-32">
          <img src={bannerTitle} alt="bannerTItle" className="py-5 pt-20" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nunc
            ultrices proin ullamcorper interdum netus. Porttitor convallis
            tortor arcu amet, et. Semper vel lorem fermentum commodo, neque...
          </p>
          <div className="pt-10">
            <button className="px-8 mx-5">OUR SERVICE</button>
            <button className="px-8 mx-5">VIEW ON OPENSEA</button>
          </div>
          <Link to="minting">
            <button className="px-8 mx-5 mt-5">MINT PAGE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
