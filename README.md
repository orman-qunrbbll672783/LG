# 🌱 ReviveTech - AI-Powered Appliance Efficiency Analysis

A beautiful front-end-only mock prototype that simulates an AI system analyzing old appliances and showing how to make them energy-efficient again.

## ✨ Features

- **Landing Page**: Stunning glassmorphism design with animated background
- **AI Analysis**: Simulated AI processing with progress indicators
- **Detailed Report**: Comprehensive analysis with charts and visualizations
- **Mock Data**: All data is simulated - no backend required

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **TailwindCSS 4** - Utility-first CSS
- **Shadcn/UI** - Beautiful UI components
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Icon library
- **Recharts** - Data visualization
- **Poppins Font** - Modern typography
- **Glassmorphism** - Frosted glass aesthetic with neon green glow

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

### 1. Landing Page (`/`)

**Hero Section:**
- Large ReviveTech branding with gradient text and glow effect
- Catchy tagline: "AI-powered product comparison and eco-analysis"
- Main headline with animated "smart" text
- "Try Now" button with smooth scroll to interaction section
- Framer Motion animations for fade-in effects

**About Us Section:**
- Mission statement describing ReviveTech's purpose
- 3 mission cards: Eco-Friendly, Energy Efficient, Smart Upgrades
- Team section with 4 member cards (Sarah Chen, Marcus Johnson, Elena Rodriguez, David Kim)
- Animated profile cards with hover effects
- Scroll-triggered animations using Framer Motion

**Interaction Section:**
- Working camera functionality using `navigator.mediaDevices.getUserMedia()`
- User-friendly error message if camera permission is denied
- "Take a Picture" and "Scan Barcode" buttons
- Animated product mockup (refrigerator) with AI analysis bubbles
- Hover effects showing AI data points (Energy, Efficiency, Year)
- Glowing circular animation on hover

**Footer:**
- ReviveTech logo and tagline
- Quick links (About Us, How It Works, Privacy Policy, Contact)
- Social media icons (GitHub, Twitter, LinkedIn, Mail)
- Copyright notice with current year

### 2. Analyzing Page (`/analyzing`)
- Full-screen AI analysis simulation
- Progress bar with cycling messages
- Animated icons and particles
- Auto-redirects to report after ~7 seconds

### 3. Report Page (`/report`)
- AI Technical Recognition section
- Benchmark comparison table
- Energy usage bar chart
- Efficiency breakdown pie chart
- AI-recommended upgrade plan
- Detailed summary with savings metrics
- "Re-scan Another Appliance" button

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Neon Glow**: Subtle eco-green glow effects
- **Smooth Animations**: Blob animations, progress bars, and transitions
- **Responsive**: Works beautifully on all screen sizes
- **Dark Theme**: Gradient background from slate to green

## 📊 Mock Data

All data is stored in `/lib/mockData.ts` and includes:
- Appliance specifications (2005 Whirlpool refrigerator)
- Modern benchmark comparisons
- Upgrade recommendations
- Energy savings calculations
- Visualization data for charts

## 🎯 Project Structure

```
my-app/
├── app/
│   ├── page.tsx              # Landing page
│   ├── analyzing/
│   │   └── page.tsx          # Analysis simulation
│   ├── report/
│   │   └── page.tsx          # Results dashboard
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   └── ui/                   # Shadcn UI components
├── lib/
│   ├── mockData.ts           # Mock appliance data
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## 🌟 Key Components

- **Shadcn/UI Components**: Button, Card, Progress
- **Recharts**: BarChart, PieChart with custom styling
- **Lucide Icons**: Camera, ScanLine, Zap, TrendingUp, etc.
- **Custom Utilities**: Glass effects, glow animations

## 📝 Notes

- This is a **front-end only** prototype
- No backend or API calls
- All data is mocked and hardcoded
- Perfect for demos and presentations

## 🎨 Color Palette

- **Primary Green**: `#22c55e` (green-500)
- **Emerald**: `#10b981` (emerald-500)
- **Background**: Gradient from slate-900 via green-900 to slate-900
- **Glass**: Semi-transparent with backdrop blur

---

Built with ❤️ using Next.js and modern web technologies
