"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Send, CheckCircle2, Users, MapPin, MessageSquare } from "lucide-react";

const platforms = [
  { name: "Facebook", icon: "📘", color: "blue" },
  { name: "Instagram", icon: "📷", color: "pink" },
  { name: "WhatsApp", icon: "💬", color: "green" },
  { name: "Twitter", icon: "🐦", color: "sky" },
];

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", 
  "France", "Japan", "South Korea", "India", "Brazil"
];

const cities: Record<string, string[]> = {
  "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  "United Kingdom": ["London", "Manchester", "Birmingham", "Leeds", "Glasgow"],
  "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  "Germany": ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne"],
  "France": ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
  "Japan": ["Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya"],
  "South Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"],
  "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"],
  "Brazil": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"],
};

export default function SellingAutomationPage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [peopleCount, setPeopleCount] = useState(50);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [messagesSent, setMessagesSent] = useState(0);

  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  const startAutomation = () => {
    setIsRunning(true);
    setProgress(0);
    setMessagesSent(0);

    // Simulate sending messages
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });

      setMessagesSent(prev => {
        if (prev >= peopleCount) {
          return peopleCount;
        }
        return prev + 1;
      });
    }, 100);
  };

  const canStart = selectedCountry && selectedCity && selectedPlatforms.length > 0 && peopleCount > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
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
            🤖 AI Selling Automation
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Automate outreach to potential buyers across social media platforms
          </p>
        </motion.div>

        {!isRunning ? (
          <div className="space-y-8">
            {/* Location Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="glass-dark border-green-400/30 glow-green">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <div>
                      <CardTitle className="text-white text-2xl">Target Location</CardTitle>
                      <CardDescription className="text-gray-400">Select country and city</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Country</label>
                      <select
                        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                        value={selectedCountry}
                        onChange={(e) => {
                          setSelectedCountry(e.target.value);
                          setSelectedCity("");
                        }}
                      >
                        <option value="">Select country</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">City</label>
                      <select
                        className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        disabled={!selectedCountry}
                      >
                        <option value="">Select city</option>
                        {selectedCountry && cities[selectedCountry]?.map((city: string) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Platform Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="glass-dark border-green-400/30 glow-green">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                    <div>
                      <CardTitle className="text-white text-2xl">Social Platforms</CardTitle>
                      <CardDescription className="text-gray-400">Choose platforms for outreach</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {platforms.map((platform) => (
                      <button
                        key={platform.name}
                        onClick={() => togglePlatform(platform.name)}
                        className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                          selectedPlatforms.includes(platform.name)
                            ? "border-green-400 bg-green-500/20 glow-green-strong"
                            : "border-green-400/30 bg-slate-800/50 hover:border-green-400/60"
                        }`}
                      >
                        <div className="text-4xl mb-2">{platform.icon}</div>
                        <p className="text-white font-semibold">{platform.name}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* People Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="glass-dark border-green-400/30 glow-green">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-green-400" />
                    <div>
                      <CardTitle className="text-white text-2xl">Target Audience</CardTitle>
                      <CardDescription className="text-gray-400">Number of people to reach</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="10"
                        max="500"
                        step="10"
                        value={peopleCount}
                        onChange={(e) => setPeopleCount(Number(e.target.value))}
                        className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-400"
                      />
                      <div className="bg-green-500/20 border border-green-400/50 rounded-lg px-6 py-3 min-w-[100px] text-center">
                        <p className="text-green-400 text-2xl font-bold">{peopleCount}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      AI will send personalized messages to {peopleCount} potential buyers in {selectedCity || "selected city"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Start Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="text-center"
            >
              <Button
                onClick={startAutomation}
                disabled={!canStart}
                size="lg"
                className="glass-dark glow-green-strong text-white hover:bg-green-500/30 transition-all duration-300 text-xl px-16 py-8 rounded-xl group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-3 h-7 w-7 group-hover:translate-x-1 transition-transform" />
                Start AI Campaign
              </Button>
              {!canStart && (
                <p className="text-yellow-400 mt-4">Please complete all fields to start</p>
              )}
            </motion.div>
          </div>
        ) : (
          /* Running Automation */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Progress Card */}
            <Card className="glass-dark border-green-400/30 glow-green-strong">
              <CardHeader>
                <CardTitle className="text-white text-3xl text-center">Campaign Running...</CardTitle>
                <CardDescription className="text-gray-400 text-center text-lg">
                  AI is sending personalized messages to potential buyers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-green-400 font-bold">{progress}%</span>
                  </div>
                  <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-green-400/30 text-center">
                    <p className="text-gray-400 mb-2">Messages Sent</p>
                    <p className="text-green-400 text-4xl font-bold">{messagesSent}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-green-400/30 text-center">
                    <p className="text-gray-400 mb-2">Target</p>
                    <p className="text-white text-4xl font-bold">{peopleCount}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-green-400/30 text-center">
                    <p className="text-gray-400 mb-2">Platforms</p>
                    <p className="text-white text-4xl font-bold">{selectedPlatforms.length}</p>
                  </div>
                </div>

                {/* Campaign Details */}
                <div className="bg-slate-800/50 rounded-lg p-6 border border-green-400/30">
                  <h3 className="text-white font-semibold mb-4">Campaign Details</h3>
                  <div className="space-y-2 text-gray-300">
                    <p><span className="text-gray-400">Location:</span> {selectedCity}, {selectedCountry}</p>
                    <p><span className="text-gray-400">Platforms:</span> {selectedPlatforms.join(", ")}</p>
                    <p><span className="text-gray-400">Message Type:</span> Personalized product listing with photos</p>
                  </div>
                </div>

                {/* Live Activity Feed */}
                <div className="bg-slate-800/50 rounded-lg p-6 border border-green-400/30 max-h-64 overflow-y-auto">
                  <h3 className="text-white font-semibold mb-4">Live Activity</h3>
                  <div className="space-y-2">
                    {Array.from({ length: Math.min(messagesSent, 10) }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-400">
                          Message sent to buyer #{messagesSent - i} via {selectedPlatforms[i % selectedPlatforms.length]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {progress === 100 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="inline-block p-6 bg-green-500/20 rounded-full mb-4">
                      <CheckCircle2 className="w-16 h-16 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Campaign Complete!</h2>
                    <p className="text-gray-300 mb-6">
                      Successfully sent {peopleCount} personalized messages to potential buyers
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Button
                        onClick={() => {
                          setIsRunning(false);
                          setProgress(0);
                          setMessagesSent(0);
                        }}
                        size="lg"
                        className="glass-dark glow-green text-white hover:glow-green-strong transition-all duration-300"
                      >
                        Start New Campaign
                      </Button>
                      <Button
                        onClick={() => router.push("/report")}
                        size="lg"
                        variant="outline"
                        className="glass-dark border-green-400/50 text-white hover:bg-green-500/20"
                      >
                        Back to Report
                      </Button>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
