"use client";

import DesignerHero from "./components/DesignerHero";
import DesignerFeatures from "./components/DesignerFeatures";
import Footer from "./components/Footer";
import Navbar from "../components/Navbar";

export default function DesignerPage() {
  return (
    <>
    <Navbar />
      <DesignerHero />
      <DesignerFeatures />
      <Footer />
    </>
  );
}
