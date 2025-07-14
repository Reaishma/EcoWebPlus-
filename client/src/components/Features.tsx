import React from "react";
import { Calculator, Lightbulb, BarChart3, Users, Smartphone, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: "Carbon Calculator",
      description: "Track your carbon footprint across transportation, energy, food, and lifestyle choices with our advanced calculator.",
      gradient: "from-green-600 to-green-800"
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Get personalized suggestions to reduce your environmental impact based on your lifestyle and habits.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your environmental impact over time and celebrate your achievements in sustainable living.",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Connect with like-minded individuals and see how your actions contribute to collective environmental goals.",
      gradient: "from-blue-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Access all features on any device with our responsive design that works seamlessly across platforms.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Earn badges and rewards for meeting sustainability goals and making positive environmental choices.",
      gradient: "from-red-500 to-green-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-6">
            Powerful Features for Sustainable Living
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover tools and insights designed to help you live more sustainably and reduce your environmental impact.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {feature.description}
              </p>
              <button 
                onClick={() => {
                  if (feature.title === "Carbon Calculator") {
                    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
                  } else if (feature.title === "Smart Recommendations") {
                    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
                  } else if (feature.title === "Progress Tracking") {
                    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
                  } else if (feature.title === "Community Impact") {
                    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
                  } else if (feature.title === "Mobile Friendly") {
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  } else if (feature.title === "Achievements") {
                    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-green-600 dark:text-green-400 font-semibold hover:underline flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

