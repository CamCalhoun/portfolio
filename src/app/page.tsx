"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center text-camwhite bg-camblack justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center gap-3 scale-100 md:scale-150">
        <div className="">

          <motion.div
            initial={{ x: "40vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="flex gap-2 items-center justify-center text-center text-3xl md:text-4xl">
            <h1>Hello, I'm </h1><h1 className="text-camgreen">Cameron</h1>
          </motion.div>

          <motion.h1
            initial={{ x: "-40vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.6 }}
            className="text-3xl md:text-4xl">
            Welcome to my portfolio.
          </motion.h1>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.5 }}
          className="flex flex-col gap-2"
        >
          <Image
            src='/camLogo.png'
            alt='Cameron Calhoun'
            width='400'
            height='50'
          />
          <div className="border-camgreen border rounded-xl"></div>
        </motion.div>
      </div>
    </div>
  );
}
