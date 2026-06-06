"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Globe, Battery, Settings } from "lucide-react";
import SectionHeading from "./SectionHeading";
import MStripe from "./MStripe";

const featured = [
  {
    icon: Zap,
    badge: "B48 · B58 · 8X0",
    title: "Read ISN by OBD",
    tagline: "The flagship feature — zero hardware disassembly",
    description:
      "Direct ISN extraction from the latest Bosch DMEs through the standard OBD-II port. Where every other tool requires bench access or ECU removal, BimmerX does it over the diagnostic connector.",
  },
  {
    icon: Shield,
    badge: "BDC1 · BDC2 · BDC3",
    title: "Full BDC Coverage",
    tagline: "New parts, unlock, ELV cancel, EWS6 — all generations",
    description:
      "Complete lifecycle support for all three BDC generations. New module commissioning, recovery of locked units, ELV cancellation, and full ISN/EWS6 extraction. F-Series to current G-Series.",
  },
  {
    icon: Cpu,
    badge: "DME · DDE",
    title: "Virginization & Repair",
    tagline: "Engine swap and ECU replacement at factory depth",
    description:
      "Full virginisation of petrol and diesel ECUs across all BMW generations. Reset VIN, ISN, EWS signature, and adaptation memory — then pair to a new chassis without dealer tools.",
  },
  {
    icon: Globe,
    badge: "TC1797 · TC1793",
    title: "Mercedes Tricore OTP",
    tagline: "Cross-brand ECU cloning capability",
    description:
      "OTP protection calculation and bypass for Mercedes-Benz Infineon Tricore ECUs. Extends your workshop's reach into the Mercedes ECU replacement and cloning market.",
  },
  {
    icon: Battery,
    badge: "G-Series · EME",
    title: "G-Series EME — ISN Exchange",
    tagline: "Modern EV and hybrid module pairing",
    description:
      "Certified ISN exchange of Electric Machine Electronics between G-Series vehicles. Built-in test refresh mode validates the operation before final commit — zero risk workflow.",
  },
  {
    icon: Settings,
    badge: "Factory Level",
    title: "Engineering Mode Access",
    tagline: "Operations blocked to standard diagnostics",
    description:
      "Unlock BMW factory engineering modes for selective anti-theft programming with separate firmware version tree management — the same capability BMW technicians use in production.",
  },
];

export default function FeaturedCapabilities() {
  return (
    <section id="capabilities" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Where BimmerX Leads"
            subtitle="Six capabilities that set a new standard for BMW aftermarket engineering software."
            chrome
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="function-card rounded-sm overflow-hidden group"
              >
                {/* M stripe top */}
                <MStripe height={3} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/20 group-hover:bg-[#1C69D4]/20 transition-colors">
                      <Icon size={20} className="text-[#1C69D4]" />
                    </div>
                    <span className="font-mono text-xs text-[#E22718] bg-[#E22718]/10 px-2.5 py-1 rounded-sm border border-[#E22718]/20 tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                  <p className="text-[#1C69D4] text-xs font-medium mb-3">{item.tagline}</p>
                  <p className="text-[#A0A4AB] text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
