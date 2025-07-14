import React from "react";
import { Calculator, Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-600 to-green-800 dark:from-green-800 dark:via-green-900 dark:to-gray-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-green-300/20 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 right-16 w-16 h-16 bg-blue-300/20 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-orange-300/20 rounded-full"
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Live <span className="text-green-200">Sustainably</span>,<br />
            Impact <span className="text-blue-200">Positively</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join millions in creating a greener future. Calculate your carbon footprint, 
            discover eco-friendly habits, and make a difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCalculator}
              className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>Calculate Impact</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-800 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Learn More</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
};

export default Hero;

