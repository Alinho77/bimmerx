"use client";

import { motion } from "framer-motion";
import { FUNCTIONS } from "@/lib/functions-data";
import SectionHeading from "./SectionHeading";
import MStripe from "./MStripe";

function FunctionCard({ fn, index }: { fn: (typeof FUNCTIONS)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      className="function-card rounded-sm overflow-hidden"
    >
      <MStripe height={2} />
      <div className="p-4">
        <div className="flex items-center gap-3">
          <div className="shrink-0 w-8 h-8 rounded-sm bg-[#0F2D5C] flex items-center justify-center">
            <span className="font-mono text-xs font-bold text-white">{fn.n}</span>
          </div>
          <div>
            <span className="text-[#E22718] font-mono text-[9px] uppercase tracking-[0.15em]">
              {fn.category}
            </span>
            <h3 className="text-white font-semibold text-sm leading-snug">{fn.title}</h3>
          </div>
        </div>
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
