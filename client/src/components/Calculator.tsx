
import React, { useState } from "react";
import { Car, Zap, Utensils, ShoppingBag, Cloud, Leaf } from "lucide-react";
import { motion } from "framer-motion";

interface CalculatorData {
  carMiles: number;
  fuelType: string;
  electricBill: number;
  gasBill: number;
  dietType: string;
  localFood: number;
  flights: number;
  householdSize: number;
}

interface EmissionResults {
  transport: number;
  energy: number;
  food: number;
  lifestyle: number;
  total: number;
}

const Calculator: React.FC = () => {
  const [formData, setFormData] = useState<CalculatorData>({
    carMiles: 0,
    fuelType: "gasoline",
    electricBill: 0,
    gasBill: 0,
    dietType: "omnivore",
    localFood: 0,
    flights: 0,
    householdSize: 1
  });

  const [results, setResults] = useState<EmissionResults | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const calculateEmissions = () => {
    // Fuel emission factors (kg CO2 per mile)
    const fuelFactors = {
      gasoline: 0.4,
      diesel: 0.45,
      electric: 0.1,
      hybrid: 0.25
    };

    // Diet emission factors (tons CO2 per year)
    const dietFactors = {
      omnivore: 3.3,
      vegetarian: 2.5,
      vegan: 1.5,
      pescatarian: 2.8
    };

    const transportEmissions = (formData.carMiles * 12 * fuelFactors[formData.fuelType as keyof typeof fuelFactors]) / 1000;
    const energyEmissions = ((formData.electricBill * 0.7) + (formData.gasBill * 0.5)) / 100;
    const foodEmissions = dietFactors[formData.dietType as keyof typeof dietFactors] * (1 - formData.localFood / 100);
    const lifestyleEmissions = formData.flights * 0.5 + (formData.householdSize * 0.2);

    const total = transportEmissions + energyEmissions + foodEmissions + lifestyleEmissions;

    setResults({
      transport: transportEmissions,
      energy: energyEmissions,
      food: foodEmissions,
      lifestyle: lifestyleEmissions,
      total
    });

    setShowRecommendations(true);
  };

  const getRecommendations = () => {
    if (!results) return [];

    const tips = [];
    
    if (results.transport > 2) {
      tips.push("Consider carpooling, public transit, or electric vehicles to reduce transport emissions.");
    }
    if (results.energy > 2) {
      tips.push("Switch to LED bulbs and consider renewable energy sources for your home.");
    }
    if (results.food > 2) {
      tips.push("Try reducing meat consumption and buying more local, seasonal produce.");
    }
    if (results.lifestyle > 1) {
      tips.push("Consider offsetting flights or choosing closer vacation destinations.");
    }
    if (results.total < 5) {
      tips.push("Great job! You're already living sustainably. Keep up the good work!");
    }

    return tips;
  };

  const handleInputChange = (field: keyof CalculatorData, value: number | string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="calculator" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-6">
            Carbon Footprint Calculator
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Calculate your environmental impact and discover ways to reduce your carbon footprint.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-6">Your Lifestyle Data</h3>
              
              {/* Transportation */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <Car className="text-green-600 dark:text-green-400 mr-2" />
                  Transportation
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Miles/Month</label>
                    <input 
                      type="number" 
                      value={formData.carMiles || ''}
                      onChange={(e) => handleInputChange("carMiles", e.target.value === '' ? 0 : Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                      placeholder="1000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Fuel Type</label>
                    <select 
                      value={formData.fuelType}
                      onChange={(e) => handleInputChange("fuelType", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    >
                      <option value="gasoline">Gasoline</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Energy */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <Zap className="text-green-600 dark:text-green-400 mr-2" />
                  Energy Usage
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Electric Bill ($)</label>
                    <input 
                      type="number" 
                      value={formData.electricBill || ''}
                      onChange={(e) => handleInputChange("electricBill", e.target.value === '' ? 0 : Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                      placeholder="150"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Gas Bill ($)</label>
                    <input 
                      type="number" 
                      value={formData.gasBill || ''}
                      onChange={(e) => handleInputChange("gasBill", e.target.value === '' ? 0 : Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                      placeholder="80"
                    />
                  </div>
                </div>
              </div>
              
              {/* Food */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <Utensils className="text-green-600 dark:text-green-400 mr-2" />
                  Food & Diet
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Diet Type</label>
                    <select 
                      value={formData.dietType}
                      onChange={(e) => handleInputChange("dietType", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                    >
                      <option value="omnivore">Omnivore</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="pescatarian">Pescatarian</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Local Food %</label>
                    <input 
                      type="number" 
                      value={formData.localFood || ''}
                      onChange={(e) => handleInputChange("localFood", e.target.value === '' ? 0 : Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                      placeholder="30" 
                      min="0" 
                      max="100"
                    />
                  </div>
                </div>
              </div>
              
              {/* Lifestyle */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <ShoppingBag className="text-green-600 dark:text-green-400 mr-2" />
                  Lifestyle
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Flights/Year</label>
                    <input 
                      type="number" 
                      value={formData.flights || ''}
                      onChange={(e) => handleInputChange("flights", e.target.value === '' ? 0 : Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                      placeholder="2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Household Size</label>
                    <input 
                      type="number" 
                      value={formData.householdSize || ''}
                      onChange={(e) => handleInputChange("householdSize", e.target.value === '' ? 0 : Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                      placeholder="3"
                    />
                  </div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={calculateEmissions}
                className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-900 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
              >
                <Cloud className="w-5 h-5" />
                <span>Calculate My Impact</span>
              </motion.button>
            </motion.div>
            
            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-green-800 dark:text-green-400 mb-6">Your Carbon Footprint</h3>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="text-white w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-green-800 dark:text-green-400 mb-2">
                    {results ? results.total.toFixed(1) : "--"}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">tons CO₂ per year</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-green-800 dark:text-green-400">
                      {results ? results.transport.toFixed(1) : "--"}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Transport</div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-green-800 dark:text-green-400">
                      {results ? results.energy.toFixed(1) : "--"}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Energy</div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-green-800 dark:text-green-400">
                      {results ? results.food.toFixed(1) : "--"}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Food</div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-green-800 dark:text-green-400">
                      {results ? results.lifestyle.toFixed(1) : "--"}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Lifestyle</div>
                  </div>
                </div>
              </div>
              
              {showRecommendations && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
                >
                  <h4 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-4">Recommendations</h4>
                  <div className="space-y-3">
                    {getRecommendations().map((tip, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Leaf className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator