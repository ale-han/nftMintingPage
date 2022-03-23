import React from "react";
import "./roadmap.scss";

export default function Roadmap() {
  const roadItems = () => {
    let count = [0, 1, 2, 3, 4];
    count = count.map((index) => (
      <div className="road-item m-5 p-7" key={index}>
        <div className="step flex items-center justify-center">
          <span className="stepnumber text-3xl font-bold">100</span>
          <span className="percentage mb-2 font-bold">%</span>
        </div>
        <div className="content">
          <h3 className="content-title text-2xl py-2">GRAND OPENING</h3>
          <p>
            Congratulations, you are on the guest list. Give your name to the
            bouncer and jump the line. Join the community on Discord. Get Aped
            up with us...
          </p>
        </div>
      </div>
    ));
    return count;
  };
  return (
    <div className="roadmap text-center text-white">
      <h1 className="text-4xl pt-20 pb-5">LAUNCH ROADMAP</h1>
      <p>
        As we value our community and its creativity, our roadmap will be
        updated according to your comments and ideas..
      </p>
      <div className="road-items flex flex-wrap mx-auto p-5 justify-center">
        {roadItems()}
      </div>
    </div>
  );
}
