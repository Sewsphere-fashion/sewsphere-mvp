import { Suspense } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustBadges from "./components/TrustBadges";
import FeaturedDesigners from "./components/FeaturedDesigners";
import ExclusiveCollections from "./components/ExclusiveCollections";
import HowitWorks from "./components/HowitWorks";
import StartJourney from "./components/StartJourney";
import Footer from "./components/Footer";
import DesignerFeatures from "./designer/components/DesignerFeatures";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <HeroSection />
      <TrustBadges />
      {/* <FeaturedDesigners /> */}
      <DesignerFeatures/>
      <ExclusiveCollections />
      <HowitWorks />
      <StartJourney />
      <Footer />
    </Suspense>
  );
}
