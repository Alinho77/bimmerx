"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Play, X } from "lucide-react";
import { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";
import MStripe from "./MStripe";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Logo background — plein écran, centré */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/bimmerx-logo.png"
          alt=""
          width={700}
          height={700}
          className="object-contain opacity-25 select-none"
          aria-hidden
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-16 max-w-5xl mx-auto">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
        >
          <span className="chrome-text">
            Master Engineering Software
          </span>
          <br />
          <span className="text-white">for BMW</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-[#A0A4AB] text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          Factory-grade access to BMW modules across E, F and G series —
          including the latest hybrid and electric platforms.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-sm
              bg-[#1C69D4] hover:bg-[#1557b0] transition-all duration-200"
          >
            <Play size={20} fill="white" />
            WATCH TUTORIAL
          </button>
          <a
            href="#functions"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-sm
              border border-white/15 hover:border-white/30 hover:bg-white/5
              transition-all duration-200"
          >
            View All Functions
            <ChevronDown size={18} />
          </a>
        </motion.div>

        {/* Video Modal */}
        {videoOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white"
              >
                <X size={28} />
              </button>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/699jo9gnvk0?autoplay=1"
                  title="BimmerX Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-16 grid grid-cols-3 gap-6 md:gap-12"
        >
          {[
            { value: "21+", label: "Engineering Functions" },
            { value: "B48 / B58", label: "OBD ISN via OBD", mono: true },
            { value: "E·F·G + EV", label: "Series Coverage", mono: true },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className={`text-2xl md:text-3xl font-bold text-white mb-1 ${
                  stat.mono ? "font-mono text-[#1C69D4]" : "chrome-text"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-[#A0A4AB] text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0">
        <MStripe height={4} />
      </div>
    </section>
  );
}
