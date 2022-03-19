import React, { useContext } from "react";
// import Context from "./App";

export default function Test({ Context }) {
  //   console.log(Context.name);
  console.log(Context);
  const value = useContext(Context);
  console.log(value);
  return <div>{value}</div>;
}
