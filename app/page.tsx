"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScanLine, Zap, Leaf, TrendingUp, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Team Member 1",
    role: "Role/Job Title",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Member1",
  },
  {
    name: "Team Member 2",
    role: "Role/Job Title",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Member2",
  },
  {
    name: "Team Member 3",
    role: "Role/Job Title",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Member3",
  },
];

export default function Home() {
  const router = useRouter();
  const interactionRef = useRef<HTMLDivElement>(null);
  const [isHoveringMockup, setIsHoveringMockup] = useState(false);

  const scrollToInteraction = () => {
    interactionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Brand */}
            <div className="mb-6 inline-block">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent glow-green-strong">
                ReviveTech
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full mt-2 glow-green"></div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-green-300 mb-8 font-semibold"
            >
              AI-powered product comparison and eco-analysis
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              See how <span className="text-green-400 glow-green-strong">smart</span> your old appliance can become.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Transform your vintage appliances into energy-efficient champions with our cutting-edge AI technology
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Button
                onClick={scrollToInteraction}
                size="lg"
                className="glass-dark glow-green-strong text-white hover:bg-green-500/30 transition-all duration-300 text-xl px-12 py-7 rounded-2xl group"
              >
                <Zap className="mr-2 h-7 w-7 group-hover:rotate-12 transition-transform" />
                Try Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-green-400">ReviveTech</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At ReviveTech, we help people make smarter, greener decisions by comparing and analyzing their electronics with AI. 
              Our mission is to extend the life of existing appliances while reducing energy consumption and environmental impact.
            </p>
          </motion.div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Leaf, title: "Eco-Friendly", desc: "Reduce waste and carbon footprint" },
              { icon: Zap, title: "Energy Efficient", desc: "Save money on electricity bills" },
              { icon: TrendingUp, title: "Smart Upgrades", desc: "AI-powered recommendations" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="glass-dark border-green-400/30 glow-green hover:glow-green-strong transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-block p-4 bg-green-500/20 rounded-full mb-4">
                      <item.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Meet Our Team
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="glass-dark border-green-400/30 hover:border-green-400/60 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-400/50 glow-green">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                      <p className="text-green-400 text-sm">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interaction Section */}
      <section ref={interactionRef} className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Start Your Analysis
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Buttons */}
              <div className="space-y-6">
                <Card className="glass-dark border-green-400/30 glow-green p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Start Your Scan</h3>
                  
                  <div className="space-y-4">
                    <Button
                      onClick={() => router.push("/barcode-scan")}
                      size="lg"
                      className="w-full glass-dark glow-green text-white hover:glow-green-strong transition-all duration-300 text-lg px-8 py-6 rounded-xl group"
                    >
                      <ScanLine className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                      Scan Barcode
                    </Button>
                  </div>

                  <p className="text-gray-400 text-sm mt-6">
                    Scan your LG appliance barcode with your camera. Our AI will automatically detect the product and let you choose the comparison year.
                  </p>
                </Card>
              </div>

              {/* Right: Animated Mockup */}
              <div
                className="relative"
                onMouseEnter={() => setIsHoveringMockup(true)}
                onMouseLeave={() => setIsHoveringMockup(false)}
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative glass-dark border-green-400/30 rounded-3xl p-8 glow-green"
                >
                  {/* Mockup Device */}
                  <div className="relative">
                    <div className="w-full aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border-2 border-green-400/30">
                      {/* Fridge Icon */}
                      <svg className="w-32 h-32 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>

                    {/* AI Analysis Bubbles */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: isHoveringMockup ? 1 : 0, scale: isHoveringMockup ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-4 -right-4 glass-dark border-green-400/50 rounded-lg px-4 py-2 glow-green"
                    >
                      <p className="text-green-400 text-sm font-semibold">Energy: 2.1 kWh/day</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: isHoveringMockup ? 1 : 0, scale: isHoveringMockup ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute -bottom-4 -left-4 glass-dark border-green-400/50 rounded-lg px-4 py-2 glow-green"
                    >
                      <p className="text-green-400 text-sm font-semibold">Efficiency: 76%</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: isHoveringMockup ? 1 : 0, scale: isHoveringMockup ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="absolute top-1/2 -right-8 glass-dark border-green-400/50 rounded-lg px-4 py-2 glow-green"
                    >
                      <p className="text-green-400 text-sm font-semibold">Year: 2005</p>
                    </motion.div>

                    {/* Glowing lines */}
                    {isHoveringMockup && (
                      <>
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0"
                        >
                          <svg className="w-full h-full absolute inset-0" style={{ overflow: 'visible' }}>
                            <motion.circle
                              cx="50%"
                              cy="50%"
                              r="45%"
                              stroke="#22c55e"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="5,5"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 0.5 }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          </svg>
                        </motion.div>
                      </>
                    )}
                  </div>

                  <p className="text-center text-gray-400 mt-6 text-sm">
                    Hover to see AI analysis in action
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-400/20 bg-slate-900/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                ReviveTech
              </h3>
              <p className="text-gray-400 text-sm">
                Making the world greener, one appliance at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="p-2 glass-dark rounded-lg hover:bg-green-500/20 transition-colors">
                  <Github className="w-5 h-5 text-gray-400 hover:text-green-400" />
                </a>
                <a href="#" className="p-2 glass-dark rounded-lg hover:bg-green-500/20 transition-colors">
                  <Twitter className="w-5 h-5 text-gray-400 hover:text-green-400" />
                </a>
                <a href="#" className="p-2 glass-dark rounded-lg hover:bg-green-500/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-green-400" />
                </a>
                <a href="#" className="p-2 glass-dark rounded-lg hover:bg-green-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-gray-400 hover:text-green-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-green-400/20 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ReviveTech. All rights reserved. Built with ❤️ for a sustainable future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
