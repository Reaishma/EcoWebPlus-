import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Calculator from "@/components/Calculator";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Calculator />
      <Connect />
      <Footer />
    </div>
  );
};

export default Home;

