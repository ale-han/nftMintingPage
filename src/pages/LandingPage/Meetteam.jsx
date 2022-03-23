import React from "react";
import "./meetteam.scss";
import nft from "../../assets/photo_2021-12-02_17-26-12.png";
export default function Meetteam() {
  const panelitems = () => {
    let count = [0, 1, 2, 3, 4];
    count = count.map((index) => (
      <div className="relative panel-item" key={index}>
        <img src={nft} alt="nft" className="m-7" />
        <div className="overlay absolute top-7 left-7"></div>
        <div className="info text-white absolute bottom-7 left-7 pt-1">
          <div className="text-lg font-bold">Suprem</div>
          <div className="text-md">Co-founder</div>
        </div>
      </div>
    ));
    return count;
  };
  return (
    <div className="meetteam relative text-center pb-10">
      <div className="">
        <div className="text-white title text-center mx-auto">
          <h2 className="text-xl pt-20">OUT TEAM</h2>
          <h1 className="text-4xl py-5">Our Profesonal Team Member</h1>
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit Consectetur
            faucibus sed pellentesque tincidunt molestietellus. Diam tempus ut
            tortor, sit aliquam...
          </p>
        </div>
        <div className="panel flex flex-wrap justify-center pt-10 mx-auto">
          {panelitems()}
        </div>
      </div>
    </div>
  );
}
