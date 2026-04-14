"use client";
import { Suspense } from "react";
import DesignerHero from "./components/DesignerHero";
import DesignerFeatures from "./components/DesignerFeatures";
import Footer from "./components/Footer";
import Navbar from "../components/Navbar";

export default function DesignerPage() {
  return (
    <>
    <Suspense fallback={null}>
  <Navbar />
</Suspense>
      <DesignerHero />
      <DesignerFeatures />
      <Footer />
    </>
  );
}
