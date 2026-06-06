"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import MStripe from "./MStripe";

const series = [
  {
    label: "E-Series",
    sublabel: "Legacy Platform",
    color: "#A0A4AB",
    chassis: ["E36", "E39", "E46", "E60", "E61", "E63", "E70", "E71", "E82", "E90", "E91", "E92"],
    description:
      "EWS / CAS immobiliser, Siemens MSV/MSD engine ECUs, classic platform support covering the entire E-body range still in daily use worldwide.",
    features: ["EWS3 / CAS1-4", "MSV70 / MSV80", "MSD80–87", "Siemens ISN"],
  },
  {
    label: "F-Series",
    sublabel: "Modern Platform",
    color: "#1C69D4",
    chassis: ["F10", "F11", "F15", "F20", "F21", "F25", "F30", "F31", "F32", "F36", "F48"],
    description:
      "FEM / BDC1 first generation, full N20/N55 and early B-series engine support. The current high-volume workshop platform.",
    features: ["BDC1 Full", "FEM Support", "N20 / N55", "B-Series ECUs"],
  },
  {
    label: "G-Series",
    sublabel: "Current Platform",
    color: "#E22718",
    chassis: ["G20", "G21", "G30", "G05", "G06", "G07", "G11", "G12", "G14", "G15", "G29"],
    description:
      "BDC2 / BDC3 full support, EME hybrid/EV modules, latest B48/B58/S58 engines. The present and future of BMW engineering.",
    features: ["BDC2 / BDC3", "EME / EDME", "B48 / B58 OBD ISN", "S58 Support"],
  },
  {
    label: "Cross-Brand",
    sublabel: "Mercedes-Benz",
    color: "#C8CDD3",
    chassis: ["TC1797", "TC1793", "Tricore OTP"],
    description:
      "Mercedes-Benz Infineon Tricore ECU cloning via OTP calculation. Extends your workshop revenue into the premium German second brand.",
    features: ["TC1797 OTP", "TC1793 OTP", "Full Cloning", "ECU Repair"],
  },
];

export default function Coverage() {
  return (
    <section id="coverage" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Vehicle Coverage"
            title="E, F, G Series & Cross-Brand"
            subtitle="From legacy E-body platforms to the latest G-Series hybrid and electric vehicles."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {series.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="function-card rounded-sm overflow-hidden"
            >
              <div
                className="h-[3px]"
                style={{ background: s.color }}
              />

              <div className="p-5">
                <div className="mb-4">
                  <span className="text-[#A0A4AB] text-[10px] uppercase tracking-widest font-mono">
                    {s.sublabel}
                  </span>
                  <h3
                    className="text-2xl font-extrabold mt-0.5"
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </h3>
                </div>

                <p className="text-[#A0A4AB] text-xs leading-relaxed mb-4">{s.description}</p>

                {/* Chassis codes */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.chassis.map((c) => (
                    <span
                      key={c}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-[#A0A4AB]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1.5 border-t border-white/5 pt-4">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: s.color }}
                      />
                      <span className="text-xs text-white/70">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
