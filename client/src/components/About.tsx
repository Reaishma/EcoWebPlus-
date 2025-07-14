import React, { useEffect, useState } from "react";
import { Globe, TrendingUp, Sprout } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [treesSaved, setTreesSaved] = useState(0);
  const [co2Reduced, setCo2Reduced] = useState(0);

  useEffect(() => {
    const animateCounter = (setter: React.Dispatch<React.SetStateAction<number>>, target: number) => {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setter(Math.floor(current));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(setTreesSaved, 50847);
      animateCounter(setCo2Reduced, 125932);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-6">
            Why Choose Sustainable Living?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Every small action contributes to a larger impact. Our platform helps you understand 
            your environmental footprint and provides actionable insights to reduce it.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-2">Global Impact</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Join a worldwide movement of conscious consumers making environmentally responsible choices.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-2">Data-Driven Insights</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get personalized recommendations based on your lifestyle and consumption patterns.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Sprout className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-2">Future Generations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Create a sustainable legacy for future generations through mindful living today.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Lush green forest with sunlight streaming through trees" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              style={{
                borderRadius: "60% 40% 40% 60% / 60% 30% 70% 40%"
              }}
            />
            
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-800 dark:text-green-400">{treesSaved.toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Trees Saved</div>
              </div>
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-800 dark:text-green-400">{co2Reduced.toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CO₂ Reduced (kg)</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

