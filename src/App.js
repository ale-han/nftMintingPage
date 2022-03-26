import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MintingPage from "./pages/MintingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="minting" element={<MintingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
