"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Wrench, TrendingUp, RefreshCw } from "lucide-react";

type ApplianceStatus = "original" | "upgraded" | "repaired";

export default function DigitalTwinPage() {
  const router = useRouter();
  const [status, setStatus] = useState<ApplianceStatus>("original");
  const [isRotating, setIsRotating] = useState(true);
  const [applianceName, setApplianceName] = useState("LG Smart Fridge 2024");

  useEffect(() => {
    const selectedProduct = sessionStorage.getItem("selectedProduct");
    const selectedYear = sessionStorage.getItem("selectedYear");
    if (selectedProduct && selectedYear) {
      setApplianceName(`${selectedProduct} ${selectedYear}`);
    }
  }, []);

  const statusColors = {
    original: { border: "border-yellow-400/50", glow: "shadow-yellow-400/30", text: "text-yellow-400" },
    upgraded: { border: "border-green-400/50", glow: "shadow-green-400/30", text: "text-green-400" },
    repaired: { border: "border-blue-400/50", glow: "shadow-blue-400/30", text: "text-blue-400" },
  };

  const statusInfo = {
    original: {
      title: "Original State",
      description: "Your appliance in its current condition",
      efficiency: "76%",
      powerUsage: "2.1 kWh/day",
      features: ["Standard Compressor", "Basic Insulation", "Manual Controls"],
    },
    upgraded: {
      title: "Upgraded State",
      description: "After applying recommended upgrades",
      efficiency: "93%",
      powerUsage: "1.2 kWh/day",
      features: ["Smart Inverter Compressor", "Premium Insulation", "AI ThinQ Controls", "Energy Monitoring"],
    },
    repaired: {
      title: "Repaired State",
      description: "After professional maintenance and repairs",
      efficiency: "85%",
      powerUsage: "1.6 kWh/day",
      features: ["Refurbished Compressor", "New Door Seals", "Cleaned Coils", "Calibrated Thermostat"],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="glass-dark border-green-400/50 text-white hover:bg-green-500/20 mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            🧩 Digital Twin Visualization
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Interactive 3D visualization of your {applianceName}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className={`glass-dark ${statusColors[status].border} glow-green h-full`}>
              <CardHeader>
                <CardTitle className="text-white text-2xl">3D Model</CardTitle>
                <CardDescription className="text-gray-400">
                  {statusInfo[status].title} - {statusInfo[status].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* 3D Mock Visualization */}
                <div className="relative aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border-2 ${statusColors[status].border} overflow-hidden">
                  {/* Animated 3D Appliance */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={isRotating ? { rotateY: 360 } : {}}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Refrigerator SVG with status-based styling */}
                    <svg 
                      className={`w-48 h-48 ${statusColors[status].text}`}
                      style={{ 
                        filter: `drop-shadow(0 0 20px ${status === 'upgraded' ? '#22c55e' : status === 'repaired' ? '#3b82f6' : '#eab308'})` 
                      }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </motion.div>

                  {/* Status Indicators */}
                  {status === "upgraded" && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-4 right-4 bg-green-500/20 border border-green-400/50 rounded-lg px-3 py-2"
                      >
                        <p className="text-green-400 text-sm font-semibold flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          +17% Efficiency
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-4 left-4 bg-green-500/20 border border-green-400/50 rounded-lg px-3 py-2"
                      >
                        <p className="text-green-400 text-sm font-semibold">Smart Inverter</p>
                      </motion.div>
                    </>
                  )}

                  {status === "repaired" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-4 right-4 bg-blue-500/20 border border-blue-400/50 rounded-lg px-3 py-2"
                    >
                      <p className="text-blue-400 text-sm font-semibold flex items-center gap-2">
                        <Wrench className="w-4 h-4" />
                        Professionally Serviced
                      </p>
                    </motion.div>
                  )}

                  {/* Scanning Animation */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <div className={`h-1 w-full bg-gradient-to-r from-transparent via-${status === 'upgraded' ? 'green' : status === 'repaired' ? 'blue' : 'yellow'}-400/50 to-transparent`}></div>
                  </motion.div>
                </div>

                {/* Rotation Control */}
                <div className="mt-4 flex items-center justify-center gap-4">
                  <Button
                    onClick={() => setIsRotating(!isRotating)}
                    variant="outline"
                    size="sm"
                    className="glass-dark border-green-400/50 text-white hover:bg-green-500/20"
                  >
                    <RefreshCw className={`mr-2 h-4 w-4 ${isRotating ? 'animate-spin' : ''}`} />
                    {isRotating ? "Pause" : "Rotate"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Status Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Status Selector */}
            <Card className="glass-dark border-green-400/30 glow-green">
              <CardHeader>
                <CardTitle className="text-white text-2xl">View State</CardTitle>
                <CardDescription className="text-gray-400">Select which version to visualize</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    onClick={() => setStatus("original")}
                    variant={status === "original" ? "default" : "outline"}
                    className={status === "original" 
                      ? "bg-yellow-500/20 border-yellow-400/50 text-yellow-400 hover:bg-yellow-500/30" 
                      : "glass-dark border-yellow-400/30 text-yellow-400 hover:bg-yellow-500/10"}
                  >
                    Original
                  </Button>
                  <Button
                    onClick={() => setStatus("upgraded")}
                    variant={status === "upgraded" ? "default" : "outline"}
                    className={status === "upgraded" 
                      ? "bg-green-500/20 border-green-400/50 text-green-400 hover:bg-green-500/30" 
                      : "glass-dark border-green-400/30 text-green-400 hover:bg-green-500/10"}
                  >
                    Upgraded
                  </Button>
                  <Button
                    onClick={() => setStatus("repaired")}
                    variant={status === "repaired" ? "default" : "outline"}
                    className={status === "repaired" 
                      ? "bg-blue-500/20 border-blue-400/50 text-blue-400 hover:bg-blue-500/30" 
                      : "glass-dark border-blue-400/30 text-blue-400 hover:bg-blue-500/10"}
                  >
                    Repaired
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className={`glass-dark ${statusColors[status].border} glow-green`}>
              <CardHeader>
                <CardTitle className={`${statusColors[status].text} text-2xl`}>
                  {statusInfo[status].title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {statusInfo[status].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-green-400/20">
                    <p className="text-gray-400 text-sm mb-1">Efficiency</p>
                    <p className={`${statusColors[status].text} text-2xl font-bold`}>
                      {statusInfo[status].efficiency}
                    </p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-green-400/20">
                    <p className="text-gray-400 text-sm mb-1">Power Usage</p>
                    <p className={`${statusColors[status].text} text-2xl font-bold`}>
                      {statusInfo[status].powerUsage}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Features</h4>
                  <ul className="space-y-2">
                    {statusInfo[status].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-3 border border-green-400/20"
                      >
                        <div className={`w-2 h-2 rounded-full ${status === 'upgraded' ? 'bg-green-400' : status === 'repaired' ? 'bg-blue-400' : 'bg-yellow-400'}`}></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Stats */}
            <Card className="glass-dark border-green-400/30 glow-green">
              <CardHeader>
                <CardTitle className="text-white text-xl">Improvement Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">vs. Original</span>
                    <span className={`font-bold ${status === 'upgraded' ? 'text-green-400' : status === 'repaired' ? 'text-blue-400' : 'text-gray-400'}`}>
                      {status === 'upgraded' ? '+17%' : status === 'repaired' ? '+9%' : '0%'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Energy Saved</span>
                    <span className={`font-bold ${status === 'upgraded' ? 'text-green-400' : status === 'repaired' ? 'text-blue-400' : 'text-gray-400'}`}>
                      {status === 'upgraded' ? '0.9 kWh/day' : status === 'repaired' ? '0.5 kWh/day' : '0 kWh/day'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Annual Savings</span>
                    <span className={`font-bold ${status === 'upgraded' ? 'text-green-400' : status === 'repaired' ? 'text-blue-400' : 'text-gray-400'}`}>
                      {status === 'upgraded' ? '$110' : status === 'repaired' ? '$60' : '$0'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex justify-center gap-4"
        >
          <Button
            onClick={() => router.push("/funding-marketplace")}
            size="lg"
            className="glass-dark glow-green text-white hover:glow-green-strong transition-all duration-300 text-lg px-8 py-6 rounded-xl"
          >
            💰 Get Funding for Upgrade
          </Button>
          <Button
            onClick={() => router.push("/selling-automation")}
            size="lg"
            className="glass-dark glow-green text-white hover:glow-green-strong transition-all duration-300 text-lg px-8 py-6 rounded-xl"
          >
            🤖 AI Selling
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
