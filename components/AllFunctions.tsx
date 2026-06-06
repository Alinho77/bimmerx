"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FUNCTIONS } from "@/lib/functions-data";
import SectionHeading from "./SectionHeading";
import MStripe from "./MStripe";

function FunctionCard({ fn, index }: { fn: (typeof FUNCTIONS)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      className="function-card rounded-sm overflow-hidden"
    >
      {/* Top stripe */}
      <MStripe height={2} />

      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          {/* Number badge */}
          <div className="shrink-0 w-10 h-10 rounded-sm bg-[#0F2D5C] flex items-center justify-center">
            <span className="font-mono text-sm font-bold text-white">{fn.n}</span>
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-[#E22718] font-mono text-[10px] uppercase tracking-[0.15em] font-medium">
              {fn.category}
            </span>
            <h3 className="text-white font-bold text-base leading-snug mt-0.5">{fn.title}</h3>
          </div>
        </div>

        <p className="text-[#A0A4AB] text-sm leading-relaxed">{fn.description}</p>

        {/* Expandable */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1.5 text-[#1C69D4] text-xs font-medium hover:text-[#4d8fe0] transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp size={14} /> Hide details
            </>
          ) : (
            <>
              <ChevronDown size={14} /> Technical details
            </>
          )}
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4 space-y-3 border-t border-white/5 pt-4"
          >
            <div>
              <p className="text-[#1C69D4] text-[10px] uppercase tracking-widest font-mono mb-1.5">
                Technical
              </p>
              <p className="text-[#A0A4AB] text-xs leading-relaxed">{fn.technical}</p>
            </div>
            <div>
              <p className="text-[#E22718] text-[10px] uppercase tracking-widest font-mono mb-1.5">
                Use Case
              </p>
              <p className="text-[#A0A4AB] text-xs leading-relaxed">{fn.useCase}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function AllFunctions() {
  return (
    <section id="functions" className="py-24 bg-[#14141A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Complete Function List"
            title="All 21 Engineering Functions"
            subtitle="Every capability in BimmerX, from module replacement to OBD ISN extraction and ECU virginisation."
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {FUNCTIONS.map((fn, i) => (
            <FunctionCard key={fn.n} fn={fn} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
