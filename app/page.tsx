"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Camera, ScanLine } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            See how <span className="text-green-400 glow-green-strong">smart</span> your old appliance can become.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            AI-powered analysis to transform your vintage appliances into energy-efficient champions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={() => router.push("/analyzing")}
            size="lg"
            className="glass-dark glow-green text-white hover:glow-green-strong transition-all duration-300 text-lg px-8 py-6 rounded-xl group"
          >
            <Camera className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            Take a Picture
          </Button>
          
          <Button
            onClick={() => router.push("/analyzing")}
            size="lg"
            variant="outline"
            className="glass-dark border-green-400/50 text-white hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 text-lg px-8 py-6 rounded-xl group"
          >
            <ScanLine className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            Scan Barcode
          </Button>
        </div>

        <div className="mt-16 glass-dark rounded-2xl p-6 max-w-md mx-auto glow-green">
          <p className="text-sm text-gray-300">
            <span className="text-green-400 font-semibold">ReviveTech AI</span> analyzes your appliance and provides instant upgrade recommendations to save energy and money.
          </p>
        </div>
      </div>
    </div>
  );
}
