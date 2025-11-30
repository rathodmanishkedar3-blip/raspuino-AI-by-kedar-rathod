import { Cpu, Zap, Network, Cloud, BookOpen, Terminal, Shield, Activity } from 'lucide-react';

export const AGENCY_NAME = "Raspuino AI";
export const BOOKING_LINK = "https://cal.com/kedar-rathod-71ajkw/30min";
export const AUTHOR_CREDIT = "made by kedar rathod";

export const NAV_LINKS = [
  { name: "Solutions", href: "#solutions" },
  { name: "Platform", href: "#platform" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export const FEATURES = [
  {
    title: "Edge-Native Models",
    description: "Pre-integrated AI models optimized for low-power architectures (ARM, RISC-V). Run image recognition and voice commands with millisecond latency.",
    icon: Cpu,
  },
  {
    title: "Instant Deployment",
    description: "Zero-friction setup with our proprietary CLI tools and pre-configured code templates. Go from prototype to production in minutes.",
    icon: Zap,
  },
  {
    title: "Swarm Orchestration",
    description: "Manage fleets of thousands of devices. Synchronize updates and process data in real-time across distributed sensor networks.",
    icon: Network,
  },
  {
    title: "Hybrid Cloud Sync",
    description: "Seamlessly offload heavy compute tasks to the cloud while keeping critical inference local. Advanced remote monitoring included.",
    icon: Cloud,
  },
  {
    title: "Developer Academy",
    description: "Access our comprehensive library of step-by-step guides, community forums, and blueprint architectures.",
    icon: BookOpen,
  }
];

export const TESTIMONIALS = [
  {
    quote: "Raspuino's pre-optimized models saved us 6 months of R&D. We deployed our agricultural sensor network in record time.",
    author: "Elena R., CTO of AgriTech Solutions",
    role: "Hardware Startup"
  },
  {
    quote: "The orchestration layer is a game changer. Managing 500+ edge devices used to be a nightmare, now it's a single dashboard.",
    author: "David K., Lead Engineer",
    role: "Logistics Innovators"
  }
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for Raspuino AI, a specialized B2B agency.
Your tone is professional, technical, yet accessible.
You are an expert in Edge AI, IoT, and Embedded Systems.
Core Offerings you must know:
1. Pre-integrated AI models for low-power devices (Raspberry Pi, ESP32, etc.).
2. Deployment tools with code templates.
3. Multi-device orchestration.
4. Cloud connectivity for hybrid workflows.
5. Community education resources.

If asked about pricing or specific consultations, direct the user to book a call via the link: ${BOOKING_LINK}.
Be concise and helpful.`;
