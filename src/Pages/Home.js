import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer"; 

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar /> 
      <HeroSection />
      <Footer /> 
    </div>
  );
}

export default Home;
