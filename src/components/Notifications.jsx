'use client';

import { motion } from 'framer-motion';
import React from 'react';

function Notifications() {
  const tickerText = "Keep Tuning for latest updates... • Upcoming… More animations • Resource section";

  return (
    <div className="w-full overflow-hidden bg-[#0A0A0A] border-y border-white/10 py-3">
      <div className="flex items-center">
        {/* UPDATES Button - Fixed with inline styles for reliability */}
        <div
          className="text-white rounded-r-lg  text-xs font-semibold px-6 py-2 whitespace-nowrap z-10"
          style={{
            background: 'linear-gradient(to right, #22D3EE, #3B82F6)', // Cyan to Blue
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.5)'
          }}
        >
          UPDATES
        </div>

        {/* Scrolling Ticker */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex items-center gap-x-8 text-sm text-gray-300 whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate content for seamless loop */}
            <span>{tickerText}</span>
            <span className="text-cyan-400 mx-4">•</span>
            <span>{tickerText}</span>
            <span className="text-cyan-400 mx-4">•</span>
            <span>{tickerText}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;