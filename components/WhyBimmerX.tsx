"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Shield, Cpu, Battery, RefreshCw } from "lucide-react";
import SectionHeading from "./SectionHeading";

const benefits = [
  {
    icon: Wrench,
    title: "Master-Level Access",
    description:
      "Factory-grade engineering capability across BMW E, F and G series. Not a diagnostic tool — an engineering platform.",
  },
  {
    icon: Zap,
    title: "Flagship OBD ISN",
    description:
      "Read the ISN on B48 / B58 directly through OBD — no bench, no ECU removal, no soldering. Unmatched in the aftermarket.",
  },
  {
    icon: Shield,
    title: "Full BDC Coverage",
    description:
      "BDC1, BDC2, BDC3 fully supported — new parts, unlock, full ISN, EWS6, ELV cancel. Three generations, one solution.",
  },
  {
    icon: Cpu,
    title: "ECU Repair & Cloning",
    description:
      "Complete DME / DDE virginisation, Siemens MSV/MSD ISN, Mercedes Tricore OTP. End-to-end ECU lifecycle management.",
  },
  {
    icon: Battery,
    title: "G-Series & EV Ready",
    description:
      "EME and EDME support on BMW i3 and G-series hybrid / EV — where most aftermarket tools stop, BimmerX starts.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Updates",
    description:
      "Coverage continuously extended through software updates. Your investment grows as new platforms are added.",
  },
];

export default function WhyBimmerX() {
  return (
    <section id="why" className="py-24 bg-[#14141A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Why BimmerX"
            title="Built for professionals who demand more"
            subtitle="Six reasons workshops around the world choose BimmerX as their BMW engineering platform."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="function-card rounded-sm p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/20 group-hover:bg-[#1C69D4]/20 transition-colors shrink-0">
                    <Icon size={20} className="text-[#1C69D4]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
                    <p className="text-[#A0A4AB] text-sm leading-relaxed">{b.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
