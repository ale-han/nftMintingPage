import React from "react";
import Accordian from "../../components/accordian";

export default function Faq() {
  // const items = [
  //   { uuid: 0, heading: "hello", content: "hello" },
  //   { uuid: 1, heading: "hello", content: "hello" },
  //   { uuid: 2, heading: "hello", content: "hello" },
  //   { uuid: 3, heading: "hello", content: "hello" },
  // ];
  return (
    <div className="faq text-white bg-gray-900 text-center pb-16">
      <h1 className="text-3xl pt-16 pb-6 font-bold">F A Q </h1>
      <Accordian />
    </div>
  );
}
