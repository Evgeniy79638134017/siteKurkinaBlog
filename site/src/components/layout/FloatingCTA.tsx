"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT } from "@/lib/constants";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-2"
        >
          <motion.a
            href={CONTACT.max}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-3.5 bg-sage text-white rounded-full font-sans font-semibold text-[15px] shadow-[0_8px_30px_rgba(150,171,136,0.45)] hover:bg-sage-dark transition-colors duration-200"
          >
            Написать в Max
          </motion.a>
          <motion.a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-3.5 bg-[#25D366] text-white rounded-full font-sans font-semibold text-[15px] shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:bg-[#1da851] transition-colors duration-200"
          >
            Написать в WhatsApp
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
