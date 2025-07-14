import React from "react";
import { Leaf, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-green-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Leaf className="text-white text-lg" />
              </div>
              <span className="text-2xl font-bold">EcoLife</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering individuals to make sustainable choices for a healthier planet and brighter future.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("calculator")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Calculator
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm text-gray-400"
          >
            <p>Developed by <span className="font-semibold">Reaishma N</span></p>
            <p className="mt-1">
              <a href="mailto:vra.9618@gmail.com" className="hover:text-green-400 transition-colors inline-flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>vra.9618@gmail.com</span>
              </a>
              <span className="mx-2">|</span>
              <a href="https://github.com/Reaishma" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors inline-flex items-center space-x-1">
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

