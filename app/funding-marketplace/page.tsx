"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DollarSign, Package, ArrowLeft, CheckCircle2, Users, Building2 } from "lucide-react";

type RequestType = "funding" | "selling" | null;

const mockFunders = [
  { name: "LG Electronics", type: "Manufacturer", fundingRange: "$500-$2000", logo: "🏢" },
  { name: "GreenTech Repairs", type: "Repair Shop", fundingRange: "$200-$1000", logo: "🔧" },
  { name: "EcoFund Initiative", type: "Non-Profit", fundingRange: "$100-$800", logo: "🌱" },
  { name: "Local Appliance Co.", type: "Retailer", fundingRange: "$300-$1500", logo: "🏪" },
];

export default function FundingMarketplacePage() {
  const router = useRouter();
  const [requestType, setRequestType] = useState<RequestType>(null);
  const [formData, setFormData] = useState({
    applianceName: "",
    condition: "",
    upgradeNeeded: "",
    fundingAmount: "",
    sellingPrice: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Back to Report
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            💰 Funding Marketplace
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Get funding for appliance upgrades or sell your appliance to interested buyers
          </p>
        </motion.div>

        {!requestType && !submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {/* Funding Request */}
            <Card className="glass-dark border-green-400/30 glow-green hover:glow-green-strong transition-all duration-300 cursor-pointer"
                  onClick={() => setRequestType("funding")}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-4 bg-green-500/20 rounded-full">
                    <DollarSign className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Request Funding</CardTitle>
                    <CardDescription className="text-gray-400">Get funds for repairs or upgrades</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Post a funding request to get financial support from LG, repair shops, or eco-initiatives for upgrading your appliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Connect with verified funders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Track funding offers in real-time
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Digital twin updates after upgrade
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Selling Post */}
            <Card className="glass-dark border-green-400/30 glow-green hover:glow-green-strong transition-all duration-300 cursor-pointer"
                  onClick={() => setRequestType("selling")}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-4 bg-green-500/20 rounded-full">
                    <Package className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl">Post for Selling</CardTitle>
                    <CardDescription className="text-gray-400">Sell your appliance to buyers</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  List your appliance for sale and connect with potential buyers including individuals, repair shops, and retailers.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Reach verified buyers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Get fair market price estimates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    Secure transaction process
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Funding Request Form */}
        {requestType === "funding" && !submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-dark border-green-400/30 glow-green mb-8">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Create Funding Request</CardTitle>
                <CardDescription className="text-gray-400">Fill in the details to request funding for your appliance upgrade</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Appliance Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                      placeholder="e.g., LG Smart Fridge 2024"
                      value={formData.applianceName}
                      onChange={(e) => setFormData({...formData, applianceName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Current Condition</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                      value={formData.condition}
                      onChange={(e) => setFormData({...formData, condition: e.target.value})}
                    >
                      <option value="">Select condition</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                      <option value="needs-repair">Needs Repair</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Upgrade Needed</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                      placeholder="e.g., Smart Inverter Compressor"
                      value={formData.upgradeNeeded}
                      onChange={(e) => setFormData({...formData, upgradeNeeded: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Funding Amount Requested ($)</label>
                    <input
                      type="number"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                      placeholder="e.g., 500"
                      value={formData.fundingAmount}
                      onChange={(e) => setFormData({...formData, fundingAmount: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Description</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                      placeholder="Describe why you need this upgrade and how it will improve efficiency..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 glass-dark border-green-400/50 text-white hover:bg-green-500/20"
                      onClick={() => setRequestType(null)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 glass-dark glow-green-strong text-white hover:bg-green-500/30"
                    >
                      Submit Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Selling Form */}
        {requestType === "selling" && !submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-dark border-green-400/30 glow-green mb-8">
              <CardHeader>
                <CardTitle className="text-white text-2xl">List Appliance for Sale</CardTitle>
                <CardDescription className="text-gray-400">Provide details about your appliance to attract buyers</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Appliance Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                      placeholder="e.g., LG TurboWash 2023"
                      value={formData.applianceName}
                      onChange={(e) => setFormData({...formData, applianceName: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Condition</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                      value={formData.condition}
                      onChange={(e) => setFormData({...formData, condition: e.target.value})}
                    >
                      <option value="">Select condition</option>
                      <option value="like-new">Like New</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Selling Price ($)</label>
                    <input
                      type="number"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                      placeholder="e.g., 800"
                      value={formData.sellingPrice}
                      onChange={(e) => setFormData({...formData, sellingPrice: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Description</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-green-400/30 text-white focus:border-green-400 focus:outline-none"
                      placeholder="Describe your appliance, its features, and why it's a great buy..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 glass-dark border-green-400/50 text-white hover:bg-green-500/20"
                      onClick={() => setRequestType(null)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 glass-dark glow-green-strong text-white hover:bg-green-500/30"
                    >
                      List for Sale
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-dark border-green-400/30 glow-green-strong mb-8">
              <CardContent className="p-12 text-center">
                <div className="inline-block p-6 bg-green-500/20 rounded-full mb-6">
                  <CheckCircle2 className="w-16 h-16 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {requestType === "funding" ? "Funding Request Submitted!" : "Listing Posted Successfully!"}
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  {requestType === "funding" 
                    ? "Your funding request is now live. Potential funders will review your request and contact you with offers."
                    : "Your appliance is now listed in the marketplace. Interested buyers will reach out to you soon."}
                </p>
                <Button
                  onClick={() => router.push("/digital-twin")}
                  size="lg"
                  className="glass-dark glow-green-strong text-white hover:bg-green-500/30 text-lg px-12 py-6 rounded-xl"
                >
                  View Digital Twin
                </Button>
              </CardContent>
            </Card>

            {/* Available Funders/Buyers */}
            <Card className="glass-dark border-green-400/30 glow-green">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  {requestType === "funding" ? "Potential Funders" : "Interested Buyers"}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  These verified partners may be interested in your {requestType === "funding" ? "request" : "listing"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {mockFunders.map((funder, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-4 bg-slate-800/50 rounded-lg p-4 border border-green-400/20"
                    >
                      <div className="text-4xl">{funder.logo}</div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{funder.name}</h4>
                        <p className="text-gray-400 text-sm">{funder.type}</p>
                        <p className="text-green-400 text-sm font-semibold">{funder.fundingRange}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
