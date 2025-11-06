import { ProductData } from './types';

// LG Products Database with multiple years
export const lgProducts: Record<string, Record<number, ProductData>> = {
  "LG Smart Fridge": {
    2023: {
      appliance_name: "LG Smart Fridge 2023",
      category: "Refrigerator",
      model_year: 2023,
      ai_detected_specs: {
        year: 2023,
        power_usage: "1.5 kWh/day",
        cooling_efficiency: "88%",
        compressor_type: "Linear Inverter",
        insulation_quality: "High"
      },
      modern_benchmark: {
        power_usage: "1.2 kWh/day",
        cooling_efficiency: "93%",
        compressor_type: "Smart Inverter"
      },
      upgrade_plan: [
        { title: "Upgrade to Smart Inverter compressor", gain: "+8% efficiency" },
        { title: "Install AI ThinQ energy optimization", gain: "+5% efficiency" },
        { title: "Add door cooling+ technology", gain: "+3% efficiency" }
      ],
      ai_summary:
        "Your LG Smart Fridge 2023 is already efficient, but upgrading to the latest Smart Inverter technology could cut energy use by ~16%, saving around 175 kWh per year. This translates to approximately $21-$28 in annual electricity savings and a reduction of 125kg CO₂ emissions.",
      visual_data: {
        before_after_energy: [
          { label: "Before", usage: 1.5 },
          { label: "After Upgrade", usage: 1.26 }
        ],
        efficiency_breakdown: [
          { name: "Compressor", value: 8 },
          { name: "AI Optimization", value: 5 },
          { name: "Door Cooling", value: 3 }
        ]
      }
    },
    2024: {
      appliance_name: "LG Smart Fridge 2024",
      category: "Refrigerator",
      model_year: 2024,
      ai_detected_specs: {
        year: 2024,
        power_usage: "1.3 kWh/day",
        cooling_efficiency: "91%",
        compressor_type: "Smart Inverter",
        insulation_quality: "Premium"
      },
      modern_benchmark: {
        power_usage: "1.2 kWh/day",
        cooling_efficiency: "93%",
        compressor_type: "Smart Inverter Pro"
      },
      upgrade_plan: [
        { title: "Upgrade to Smart Inverter Pro", gain: "+4% efficiency" },
        { title: "Add UV nano purification system", gain: "+2% efficiency" }
      ],
      ai_summary:
        "Your LG Smart Fridge 2024 is highly efficient! Minor upgrades to Smart Inverter Pro could cut energy use by ~6%, saving around 95 kWh per year. This translates to approximately $11-$15 in annual electricity savings and a reduction of 68kg CO₂ emissions.",
      visual_data: {
        before_after_energy: [
          { label: "Before", usage: 1.3 },
          { label: "After Upgrade", usage: 1.22 }
        ],
        efficiency_breakdown: [
          { name: "Compressor Pro", value: 4 },
          { name: "UV Purification", value: 2 }
        ]
      }
    },
    2025: {
      appliance_name: "LG Smart Fridge 2025",
      category: "Refrigerator",
      model_year: 2025,
      ai_detected_specs: {
        year: 2025,
        power_usage: "1.2 kWh/day",
        cooling_efficiency: "93%",
        compressor_type: "Smart Inverter Pro",
        insulation_quality: "Ultra Premium"
      },
      modern_benchmark: {
        power_usage: "1.2 kWh/day",
        cooling_efficiency: "93%",
        compressor_type: "Smart Inverter Pro"
      },
      upgrade_plan: [
        { title: "Already at peak efficiency!", gain: "0% - No upgrades needed" }
      ],
      ai_summary:
        "Congratulations! Your LG Smart Fridge 2025 is already at peak efficiency with the latest Smart Inverter Pro technology. No upgrades are recommended at this time. Continue regular maintenance for optimal performance.",
      visual_data: {
        before_after_energy: [
          { label: "Current", usage: 1.2 },
          { label: "Optimized", usage: 1.2 }
        ],
        efficiency_breakdown: [
          { name: "Peak Efficiency", value: 100 }
        ]
      }
    }
  },
  "LG TurboWash Washing Machine": {
    2023: {
      appliance_name: "LG TurboWash Washing Machine 2023",
      category: "Washing Machine",
      model_year: 2023,
      ai_detected_specs: {
        year: 2023,
        power_usage: "1.8 kWh/cycle",
        wash_efficiency: "82%",
        motor_type: "Direct Drive",
        water_usage: "45L/cycle"
      },
      modern_benchmark: {
        power_usage: "1.4 kWh/cycle",
        wash_efficiency: "90%",
        motor_type: "AI DD Motor"
      },
      upgrade_plan: [
        { title: "Upgrade to AI DD Motor", gain: "+12% efficiency" },
        { title: "Install TurboWash 360 system", gain: "+8% efficiency" },
        { title: "Add steam cleaning technology", gain: "+5% efficiency" }
      ],
      ai_summary:
        "Upgrading your LG TurboWash 2023 with AI DD Motor technology could cut energy use by ~25%, saving around 280 kWh per year. This translates to approximately $34-$45 in annual electricity savings and a reduction of 200kg CO₂ emissions.",
      visual_data: {
        before_after_energy: [
          { label: "Before", usage: 1.8 },
          { label: "After Upgrade", usage: 1.35 }
        ],
        efficiency_breakdown: [
          { name: "AI DD Motor", value: 12 },
          { name: "TurboWash 360", value: 8 },
          { name: "Steam Tech", value: 5 }
        ]
      }
    }
  },
  "LG DualCool Air Conditioner": {
    2025: {
      appliance_name: "LG DualCool Air Conditioner 2025",
      category: "Air Conditioner",
      model_year: 2025,
      ai_detected_specs: {
        year: 2025,
        power_usage: "2.2 kWh/hour",
        cooling_efficiency: "95%",
        compressor_type: "Dual Inverter",
        energy_rating: "A+++"
      },
      modern_benchmark: {
        power_usage: "2.2 kWh/hour",
        cooling_efficiency: "95%",
        compressor_type: "Dual Inverter"
      },
      upgrade_plan: [
        { title: "Already at peak efficiency!", gain: "0% - No upgrades needed" }
      ],
      ai_summary:
        "Excellent! Your LG DualCool Air Conditioner 2025 features the latest Dual Inverter technology and is already at peak efficiency with A+++ energy rating. No upgrades are recommended. Regular filter cleaning will maintain optimal performance.",
      visual_data: {
        before_after_energy: [
          { label: "Current", usage: 2.2 },
          { label: "Optimized", usage: 2.2 }
        ],
        efficiency_breakdown: [
          { name: "Peak Efficiency", value: 100 }
        ]
      }
    }
  }
};

// Default export for backward compatibility
export const mockData = lgProducts["LG Smart Fridge"][2024];
