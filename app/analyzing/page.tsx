"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { Cpu, Zap, TrendingUp, BarChart3, CheckCircle2 } from "lucide-react";

const analysisSteps = [
  { message: "Identifying make and model…", icon: Cpu, progress: 20 },
  { message: "Extracting technical specs…", icon: Zap, progress: 40 },
  { message: "Comparing with 2025 energy benchmarks…", icon: TrendingUp, progress: 60 },
  { message: "Generating AI upgrade plan…", icon: BarChart3, progress: 80 },
  { message: "Visualizing performance improvements…", icon: CheckCircle2, progress: 100 },
];

export default function AnalyzingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepDuration = 1400; // ~7 seconds total (5 steps * 1.4s)
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < analysisSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, stepDuration);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 70); // Smooth progress animation

    const timeout = setTimeout(() => {
      router.push("/report");
    }, 7000);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [router]);

  const CurrentIcon = analysisSteps[currentStep].icon;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="glass-dark rounded-3xl p-12 glow-green">
          {/* Animated icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 animate-ping"></div>
              <div className="relative bg-green-500/20 p-6 rounded-full border-2 border-green-400">
                <CurrentIcon className="w-16 h-16 text-green-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Analyzing Your Appliance
          </h1>
          
          {/* Current step message */}
          <p className="text-xl text-green-300 mb-8 min-h-[2rem] transition-all duration-500">
            {analysisSteps[currentStep].message}
          </p>

          {/* Progress bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-3 bg-slate-700/50" />
            <p className="text-sm text-gray-400 mt-2">{progress}% Complete</p>
          </div>

          {/* Step indicators */}
          <div className="flex justify-center gap-2">
            {analysisSteps.map((step, index) => (
              <div
                key={index}
                className={`h-2 w-12 rounded-full transition-all duration-500 ${
                  index <= currentStep
                    ? "bg-green-400 glow-green"
                    : "bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* AI branding */}
          <div className="mt-8 pt-8 border-t border-green-400/20">
            <p className="text-sm text-gray-400">
              Powered by <span className="text-green-400 font-semibold">ReviveTech AI</span>
            </p>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
