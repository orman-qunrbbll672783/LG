"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lgProducts } from "@/lib/mockData";
import { motion } from "framer-motion";
import { Refrigerator, Waves, Wind, ChevronRight } from "lucide-react";

const productIcons = {
  "LG Smart Fridge": Refrigerator,
  "LG TurboWash Washing Machine": Waves,
  "LG DualCool Air Conditioner": Wind,
};

export default function ProductSelectPage() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const products = Object.keys(lgProducts);

  const getAvailableYears = (product: string) => {
    if (!product) return [];
    return Object.keys(lgProducts[product as keyof typeof lgProducts]).map(Number).sort();
  };

  const handleContinue = () => {
    if (selectedProduct && selectedYear) {
      // Store selection in sessionStorage
      sessionStorage.setItem("selectedProduct", selectedProduct);
      sessionStorage.setItem("selectedYear", selectedYear.toString());
      router.push("/analyzing");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Select Your LG Appliance
          </h1>
          <p className="text-xl text-gray-300">
            Choose your product and model year for AI analysis
          </p>
        </motion.div>

        {/* Product Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <Card className="glass-dark border-green-400/30 glow-green">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Step 1: Choose Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {products.map((product, index) => {
                  const Icon = productIcons[product as keyof typeof productIcons];
                  return (
                    <motion.button
                      key={product}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                      onClick={() => {
                        setSelectedProduct(product);
                        setSelectedYear(null); // Reset year when product changes
                      }}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        selectedProduct === product
                          ? "border-green-400 bg-green-500/20 glow-green-strong"
                          : "border-green-400/30 bg-slate-800/50 hover:border-green-400/60"
                      }`}
                    >
                      <Icon className="w-12 h-12 text-green-400 mx-auto mb-3" />
                      <h3 className="text-white font-semibold text-center">{product}</h3>
                    </motion.button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Year Selection */}
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Card className="glass-dark border-green-400/30 glow-green">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Step 2: Select Model Year</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {getAvailableYears(selectedProduct).map((year) => (
                    <motion.button
                      key={year}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedYear(year)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        selectedYear === year
                          ? "border-green-400 bg-green-500/20 glow-green-strong"
                          : "border-green-400/30 bg-slate-800/50 hover:border-green-400/60"
                      }`}
                    >
                      <p className="text-white font-bold text-xl">{year}</p>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Continue Button */}
        {selectedProduct && selectedYear && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <Button
              onClick={handleContinue}
              size="lg"
              className="glass-dark glow-green-strong text-white hover:bg-green-500/30 transition-all duration-300 text-xl px-12 py-6 rounded-xl group"
            >
              Continue to Analysis
              <ChevronRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        )}

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <Card className="glass-dark border-green-400/30">
            <CardContent className="p-6">
              <p className="text-gray-400 text-center">
                <span className="text-green-400 font-semibold">Note:</span> Different model years have different specifications and upgrade recommendations. Select your exact model year for accurate analysis.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
