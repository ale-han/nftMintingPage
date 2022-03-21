import React from "react";
import backImage from "../../assets/2.png";
import "./welcome.scss";
import nft from "../../assets/photo_2021-12-02_17-26-12.png";
export default function Welcome() {
  return (
    <div className="welcome relative">
      <img
        src={backImage}
        alt="backImage"
        className="w-full -z-10 absolute bg-cover h-full object-cover"
      />
      <div className="text-white title text-center mx-auto">
        <h2 className="text-xl pt-20">A B O U T</h2>
        <h1 className="text-4xl py-5">Welcome To Billionare Club</h1>
        <p>
          ipsum dolor sit amet, consectetur adipiscing elit Consectetur faucibus
          sed pellentesque tincidunt molestietellus. Diam tempus ut tortor, sit
          aliquam...
        </p>
      </div>
      <div className="panel flex flex-wrap justify-evenly py-10">
        <img src={nft} alt="nft" />
        <img src={nft} alt="nft" />
        <img src={nft} alt="nft" />
        <img src={nft} alt="nft" />
        <img src={nft} alt="nft" />
        <img src={nft} alt="nft" />
      </div>
    </div>
  );
}
