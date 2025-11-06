// Type definitions for LG Products

export interface ProductData {
  appliance_name: string;
  category: string;
  model_year: number;
  ai_detected_specs: {
    year: number;
    power_usage: string;
    cooling_efficiency?: string;
    wash_efficiency?: string;
    compressor_type?: string;
    motor_type?: string;
    insulation_quality?: string;
    water_usage?: string;
    energy_rating?: string;
  };
  modern_benchmark: {
    power_usage: string;
    cooling_efficiency?: string;
    wash_efficiency?: string;
    compressor_type?: string;
    motor_type?: string;
  };
  upgrade_plan: Array<{
    title: string;
    gain: string;
  }>;
  ai_summary: string;
  visual_data: {
    before_after_energy: Array<{
      label: string;
      usage: number;
    }>;
    efficiency_breakdown: Array<{
      name: string;
      value: number;
    }>;
  };
}
