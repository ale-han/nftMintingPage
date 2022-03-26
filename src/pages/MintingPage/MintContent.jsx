import React from "react";
import backImage from "../../assets/1.png";
import groupImage from "../../assets/group.png";
import "./mintcontent.scss";
import { ReactComponent as MinusIcon } from "../../assets/icons/icon-minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/icon-plus.svg";

export default function MintContent() {
  return (
    <div className="con">
      <img
        src={backImage}
        alt="backImage"
        className="absolute bg-image bg-cover  -z-30 back-image"
      />
      <div className="content text-white text-center pb-16">
        <div className="banner mx-auto pt-32 pb-16">
          <h1 className="text-3xl font-bold">Get Your Liama</h1>
          <h2 className="text-red-500 py-2 font-bold">Amount</h2>
          <div className="flex justify-center items-end">
            <MinusIcon className="w-12 duration-300 hover:scale-125" />
            <span className="text-7xl font-extrabold w-20 mx-8">1</span>
            <PlusIcon className="w-12 duration-300 hover:scale-125" />
          </div>
          <button className="px-8 mx-5 mt-5">MINT</button>
        </div>
        <div className="available bg-white mx-auto rounded-lg flex justify-center items-baseline flex-col relative">
          <div className="w-48 flex flex-col items-center justify-center ml-16">
            <h2 className="text-lg font-bold text-red-500">Available</h2>
            <div className="available-number text-2xl font-bold">
              10000 / 10000
            </div>
          </div>
          <img
            src={groupImage}
            alt="groupImage"
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
}
