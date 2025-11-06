"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, ScanLine, ArrowLeft, CheckCircle2 } from "lucide-react";

const lgProducts = [
  "LG Smart Fridge",
  "LG TurboWash Washing Machine",
  "LG DualCool Air Conditioner",
];

const availableYears = [2023, 2024, 2025];

export default function BarcodeScanPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [detectedProduct, setDetectedProduct] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCamera = async () => {
    setCameraError(null);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment" } // Use back camera on mobile
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setCameraActive(true);
      }
    } catch (error) {
      setCameraError("Camera access denied. Please allow camera access in your browser settings.");
      console.error("Camera access error:", error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setCameraActive(false);
  };

  const simulateScan = () => {
    setScanning(true);
    
    // Simulate barcode scanning with AI detection
    setTimeout(() => {
      // Randomly select an LG product (simulating barcode detection)
      const randomProduct = lgProducts[Math.floor(Math.random() * lgProducts.length)];
      setDetectedProduct(randomProduct);
      setScanning(false);
      stopCamera();
    }, 2000);
  };

  const handleContinue = () => {
    if (detectedProduct && selectedYear) {
      sessionStorage.setItem("selectedProduct", detectedProduct);
      sessionStorage.setItem("selectedYear", selectedYear.toString());
      router.push("/analyzing");
    }
  };

  useEffect(() => {
    return () => {
      stopCamera(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
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
            Scan LG Appliance Barcode
          </h1>
          <p className="text-xl text-gray-300 text-center">
            Use your camera to scan the barcode on your LG appliance
          </p>
        </motion.div>

        {/* Camera Section */}
        {!detectedProduct && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="glass-dark border-green-400/30 glow-green mb-8">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Camera Scanner</CardTitle>
                <CardDescription className="text-gray-400">
                  Point your camera at the barcode on your LG appliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Camera View */}
                <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden border-2 border-green-400/30 mb-6">
                  {!cameraActive ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Camera className="w-24 h-24 text-green-400 mb-4" />
                      <p className="text-gray-400 mb-6">Camera not active</p>
                      <Button
                        onClick={startCamera}
                        size="lg"
                        className="glass-dark glow-green-strong text-white hover:bg-green-500/30"
                      >
                        <Camera className="mr-2 h-5 w-5" />
                        Open Camera
                      </Button>
                    </div>
                  ) : (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Scanning Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-64 h-40 border-4 border-green-400 rounded-lg">
                          {scanning && (
                            <motion.div
                              className="absolute inset-0"
                              initial={{ y: "-100%" }}
                              animate={{ y: "100%" }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            >
                              <div className="h-1 w-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                            </motion.div>
                          )}
                          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-green-400"></div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-green-400"></div>
                          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-green-400"></div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-green-400"></div>
                        </div>
                      </div>

                      {/* Instructions */}
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <p className="text-white bg-black/50 backdrop-blur-sm inline-block px-4 py-2 rounded-lg">
                          {scanning ? "Scanning barcode..." : "Align barcode within the frame"}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Error Message */}
                {cameraError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-400/50 rounded-lg"
                  >
                    <p className="text-red-300 text-sm">{cameraError}</p>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {cameraActive && !scanning && (
                    <>
                      <Button
                        onClick={simulateScan}
                        size="lg"
                        className="flex-1 glass-dark glow-green-strong text-white hover:bg-green-500/30"
                      >
                        <ScanLine className="mr-2 h-5 w-5" />
                        Scan Now
                      </Button>
                      <Button
                        onClick={stopCamera}
                        size="lg"
                        variant="outline"
                        className="glass-dark border-green-400/50 text-white hover:bg-red-500/20"
                      >
                        Stop Camera
                      </Button>
                    </>
                  )}
                  {scanning && (
                    <Button
                      disabled
                      size="lg"
                      className="flex-1 glass-dark opacity-50"
                    >
                      <ScanLine className="mr-2 h-5 w-5 animate-pulse" />
                      Scanning...
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Detection Result */}
        {detectedProduct && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Detected Product */}
            <Card className="glass-dark border-green-400/30 glow-green-strong">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-green-500/20 rounded-full">
                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Product Detected!</h2>
                    <p className="text-gray-400">AI successfully identified your appliance</p>
                  </div>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 border border-green-400/30">
                  <p className="text-gray-400 text-sm mb-2">Detected Product:</p>
                  <p className="text-green-400 text-3xl font-bold">{detectedProduct}</p>
                </div>
              </CardContent>
            </Card>

            {/* Year Selection */}
            <Card className="glass-dark border-green-400/30 glow-green">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Select Comparison Year</CardTitle>
                <CardDescription className="text-gray-400">
                  Choose which model year to compare against
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {availableYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                        selectedYear === year
                          ? "border-green-400 bg-green-500/20 glow-green-strong"
                          : "border-green-400/30 bg-slate-800/50 hover:border-green-400/60"
                      }`}
                    >
                      <p className="text-white font-bold text-2xl">{year}</p>
                    </button>
                  ))}
                </div>

                <p className="text-gray-400 text-sm text-center mb-6">
                  We'll compare your {detectedProduct} against the {selectedYear || "selected"} model specifications
                </p>

                {selectedYear && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Button
                      onClick={handleContinue}
                      size="lg"
                      className="w-full glass-dark glow-green-strong text-white hover:bg-green-500/30 text-xl px-12 py-6 rounded-xl"
                    >
                      Continue to Analysis
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8"
        >
          <Card className="glass-dark border-green-400/30">
            <CardContent className="p-6">
              <p className="text-gray-400 text-center text-sm">
                <span className="text-green-400 font-semibold">💡 Tip:</span> Make sure the barcode is well-lit and clearly visible. The AI will automatically detect your LG appliance model.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
