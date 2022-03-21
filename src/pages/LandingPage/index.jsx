import React from "react";
import "./landingpage.css";
import Header from "../../components/header";
import JoinClub from "./JoinClub";
import Welcome from "./Welcome";
import JoinUs from "./JoinUs";

export default function LandingPage() {
  return (
    <>
      <Header />
      <JoinClub />
      <Welcome />
      <JoinUs />
    </>
  );
}
