"use client";

import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="h-[600px] bg-[url('/assets/images/Offer-image/kappframework-Jsgnic(1)(1).png')] bg-cover bg-center bg-no-repeat"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="bg-black/50 h-[600px] p-8 md:p-12 lg:px-16 lg:py-24 flex items-center">
        <motion.div
          className="text-center w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h2
            className="text-2xl font-bold text-white sm:text-3xl md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Special Products
          </motion.h2>

          <motion.p
            className="max-w-lg mx-auto text-white/90 mt-4 md:text-lg md:leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            Do not miss out on our exclusive limited-time offer! Enjoy unbeatable discounts on premium-quality products, designed for comfort and uniqueness. Grab yours today before the deal ends!
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
