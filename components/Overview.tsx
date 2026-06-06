"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Shield } from "lucide-react";

const highlights = [
  {
    icon: Wrench,
    title: "21+ Engineering Functions",
    description: "Full BMW immo, ECU, transmission, coding access at factory level.",
  },
  {
    icon: Zap,
    title: "Flagship OBD ISN — B48 / B58",
    description: "Read the ISN directly through OBD, no bench, no ECU removal.",
    badge: "B48 · B58",
  },
  {
    icon: Shield,
    title: "E / F / G Series + EV",
    description: "Full coverage including BMW i3 and G-series hybrid / EV platforms.",
    badge: "E · F · G",
  },
];

export default function Overview() {
  return (
    <section className="py-16 bg-[#14141A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#14141A] p-8 md:p-10 flex flex-col items-start gap-4"
              >
                <div className="p-2.5 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/20">
                  <Icon size={22} className="text-[#1C69D4]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[#A0A4AB] text-sm leading-relaxed">{item.description}</p>
                </div>
                {item.badge && (
                  <span className="font-mono text-xs text-[#1C69D4] bg-[#1C69D4]/10 px-3 py-1 rounded-sm border border-[#1C69D4]/20 tracking-widest">
                    {item.badge}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
