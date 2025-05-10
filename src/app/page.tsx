"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Home() {
    return (
        <div className="text-center text-camwhite min-h-screen p-2 pb-20 gap-16 sm:p-20 ">

            <div className="flex flex-col items-center gap-15 w-auto ">
                <div className="flex flex-col items-center gap-3 w-auto ">
                    {/* Welcome message */}
                    <div className="Welcome text-3xl md:text-6xl pointer-events-auto">
                        <motion.div
                            initial={{ x: "40vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            className="flex gap-2 items-center justify-center text-center  drop-shadow-textoutline">
                            <h1>Hello, I'm </h1><h1 className="text-camgreen">Cameron</h1>
                        </motion.div>

                        <motion.h1
                            initial={{ x: "-40vw", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.6 }}
                            className="drop-shadow-textoutline ">
                            Welcome to my portfolio
                        </motion.h1>
                    </div>

                    {/* Logo + divider */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.3, delay: 1.5 }}
                        className="flex flex-col gap-2  drop-shadow-textoutline pointer-events-auto "
                    >
                        <Image
                            src='/camLogo.png'
                            alt='Cameron Calhoun'
                            width='400'
                            height='50'
                            className="md:w-2xl"
                        />
                        <div className="border-camgreen border rounded-xl"></div>
                    </motion.div>

                </div>
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.3, delay: 1.8 }}
                    className="flex justify-center items-center"
                >
                    <div className="flex flex-col md:flex-row items-center 
                                    w-full md:w-5/6 gap-20 border-camgreen border-3 
                                    p-4 rounded-xl bg-camblack/[30%] backdrop-blur-xs" >
                        <div className="md:flex-1 lg:flex-[2] ">
                            <p className="text-base md:text-lg lg:text-2xl pointer-events-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="md:flex-1 lg:flex-[1] flex items-center justify-center pointer-events-auto">
                            <Image
                                src='/cat.jpg'
                                alt='cool cat that shall serve as a placeholder'
                                width={350}
                                height={400}
                                className="rounded-xl object-cover max-w-full h-auto"
                            />
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
