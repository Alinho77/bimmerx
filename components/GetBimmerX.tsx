"use client";

import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import MStripe from "./MStripe";

export default function GetBimmerX() {
  return (
    <section className="py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(28,105,212,0.1)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_80%,rgba(226,39,24,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold chrome-text leading-tight mb-6">
            Interested?
          </h2>
          <p className="text-[#A0A4AB] text-lg mb-10">
            Contact us on WhatsApp for pricing and ordering.
          </p>
          <WhatsAppButton label="Get BimmerX" size="lg" />
        </motion.div>
      </div>

      {/* Bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0">
        <MStripe height={4} />
      </div>
    </section>
  );
}
