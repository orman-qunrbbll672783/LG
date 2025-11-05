"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockData } from "@/lib/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Cpu, Zap, TrendingUp, RotateCcw, CheckCircle2, AlertCircle } from "lucide-react";

const COLORS = ["#22c55e", "#10b981", "#059669"];

export default function ReportPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Analysis Complete
          </h1>
          <p className="text-xl text-gray-300">
            Here's how we can make your appliance more efficient
          </p>
        </div>

        {/* AI Technical Recognition */}
        <Card className="glass-dark border-green-400/30 mb-8 glow-green">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Cpu className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <CardTitle className="text-white text-2xl">AI Technical Recognition</CardTitle>
                <CardDescription className="text-gray-400">Detected appliance specifications</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-green-400 mb-2">{mockData.appliance_name}</h3>
                <p className="text-gray-300 text-lg mb-4">Category: {mockData.category}</p>
              </div>
              <div className="space-y-2">
                {Object.entries(mockData.ai_detected_specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center bg-slate-800/50 rounded-lg px-4 py-2">
                    <span className="text-gray-400 capitalize">{key.replace(/_/g, " ")}:</span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benchmark Comparison */}
        <Card className="glass-dark border-green-400/30 mb-8 glow-green">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <CardTitle className="text-white text-2xl">Benchmark Comparison</CardTitle>
                <CardDescription className="text-gray-400">Your appliance vs. 2025 standards</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-green-400/30">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Specification</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Your Appliance (2005)</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Modern Standard (2025)</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-white">Power Usage</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">{mockData.ai_detected_specs.power_usage}</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">{mockData.modern_benchmark.power_usage}</td>
                    <td className="py-3 px-4">
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                        +75% higher
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-white">Cooling Efficiency</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">{mockData.ai_detected_specs.cooling_efficiency}</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">{mockData.modern_benchmark.cooling_efficiency}</td>
                    <td className="py-3 px-4">
                      <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                        -17% lower
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-white">Compressor Type</td>
                    <td className="py-3 px-4 text-red-400 font-semibold">{mockData.ai_detected_specs.compressor_type}</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">{mockData.modern_benchmark.compressor_type}</td>
                    <td className="py-3 px-4">
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Visualization Dashboard */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Energy Usage Chart */}
          <Card className="glass-dark border-green-400/30 glow-green">
            <CardHeader>
              <CardTitle className="text-white text-xl">Energy Usage Comparison</CardTitle>
              <CardDescription className="text-gray-400">Before vs. After Upgrade (kWh/day)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockData.visual_data.before_after_energy}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="label" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                      border: '1px solid #22c55e',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="usage" fill="#22c55e" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-center">
                <p className="text-green-400 font-bold text-2xl">45% Reduction</p>
                <p className="text-gray-400 text-sm">in daily energy consumption</p>
              </div>
            </CardContent>
          </Card>

          {/* Efficiency Breakdown */}
          <Card className="glass-dark border-green-400/30 glow-green">
            <CardHeader>
              <CardTitle className="text-white text-xl">Efficiency Gain Breakdown</CardTitle>
              <CardDescription className="text-gray-400">Contribution by upgrade type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockData.visual_data.efficiency_breakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockData.visual_data.efficiency_breakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                      border: '1px solid #22c55e',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 text-center">
                <p className="text-green-400 font-bold text-2xl">46% Total Gain</p>
                <p className="text-gray-400 text-sm">combined efficiency improvement</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upgrade Plan */}
        <Card className="glass-dark border-green-400/30 mb-8 glow-green">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <CardTitle className="text-white text-2xl">AI-Recommended Upgrade Plan</CardTitle>
                <CardDescription className="text-gray-400">Prioritized improvements for maximum efficiency</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.upgrade_plan.map((upgrade, index) => (
                <div key={index} className="flex items-start gap-4 bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-1">{upgrade.title}</h4>
                    <p className="text-green-400 font-bold">{upgrade.gain}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      Priority {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Summary */}
        <Card className="glass-dark border-green-400/30 mb-8 glow-green-strong">
          <CardHeader>
            <CardTitle className="text-white text-2xl">AI Summary & Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {mockData.ai_summary}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4 text-center">
                <p className="text-green-400 text-3xl font-bold mb-1">~$44</p>
                <p className="text-gray-400 text-sm">Annual Savings</p>
              </div>
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4 text-center">
                <p className="text-green-400 text-3xl font-bold mb-1">310 kWh</p>
                <p className="text-gray-400 text-sm">Energy Saved/Year</p>
              </div>
              <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4 text-center">
                <p className="text-green-400 text-3xl font-bold mb-1">220 kg</p>
                <p className="text-gray-400 text-sm">CO₂ Reduction/Year</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/")}
            size="lg"
            className="glass-dark glow-green-strong text-white hover:bg-green-500/30 transition-all duration-300 text-lg px-12 py-6 rounded-xl group"
          >
            <RotateCcw className="mr-2 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
            Re-scan Another Appliance
          </Button>
        </div>
      </div>
    </div>
  );
}
