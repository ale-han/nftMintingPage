import React from "react";
import "../page.css";
import Header from "../../components/header";
import JoinClub from "./JoinClub";
import Welcome from "./Welcome";
import JoinUs from "./JoinUs";
import Roadmap from "./Roadmap";
import Meetteam from "./Meetteam";
import Footer from "../../components/footer";
import Faq from "./Faq";

export default function LandingPage() {
  return (
    <>
      <Header />
      <JoinClub />
      <Welcome />
      <JoinUs />
      <Roadmap />
      <Meetteam />
      <Faq />
      <Footer />
    </>
  );
}
