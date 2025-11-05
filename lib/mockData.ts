export const mockData = {
  appliance_name: "Whirlpool CoolMaster 2005",
  category: "Refrigerator",
  ai_detected_specs: {
    year: 2005,
    power_usage: "2.1 kWh/day",
    cooling_efficiency: "76%",
    compressor_type: "Single-speed",
    insulation_quality: "Medium"
  },
  modern_benchmark: {
    power_usage: "1.2 kWh/day",
    cooling_efficiency: "93%",
    compressor_type: "Inverter-based"
  },
  upgrade_plan: [
    { title: "Replace compressor with inverter type", gain: "+28% efficiency" },
    { title: "Add high-density insulation panels", gain: "+12% efficiency" },
    { title: "Replace rubber seals to reduce thermal leakage", gain: "+6% efficiency" }
  ],
  ai_summary:
    "Upgrading the compressor and insulation could cut energy use by ~45%, saving around 310 kWh per year. This translates to approximately $37-$50 in annual electricity savings and a reduction of 220kg CO₂ emissions. The recommended upgrades would pay for themselves within 3-4 years while extending the appliance's lifespan by 5-7 years.",
  visual_data: {
    before_after_energy: [
      { label: "Before", usage: 2.1 },
      { label: "After Upgrade", usage: 1.15 }
    ],
    efficiency_breakdown: [
      { name: "Compressor", value: 28 },
      { name: "Insulation", value: 12 },
      { name: "Seals", value: 6 }
    ]
  }
}
