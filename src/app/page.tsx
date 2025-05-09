"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center text-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <motion.div
          initial={{ x: "40vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="flex gap-2 text-4xl">
          <h1>Hello, my name is </h1><h1 className="text-camgreen">Cameron!</h1>
        </motion.div>

        <motion.h1
          initial={{ x: "-40vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.6 }}
          className="text-4xl">
          Welcome to my portfolio.
        </motion.h1>
      </div>
    </div>
  );
}
