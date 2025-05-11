"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import ScrollIndicator from "@/components/ScrollIndicator";
import { useEffect, useState, useRef } from "react";



export default function Home() {
    const [isSticky, setIsSticky] = useState(false)
    const [width, setWidth] = useState(0)
    const stickyRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (stickyRef.current) {
                const rect = stickyRef.current.getBoundingClientRect()

                if (rect.top <= 0) {
                    setIsSticky(true)
                } else {
                    setIsSticky(false)
                }
            }

        }

        const handleResizeWindow = () => setWidth(window.innerWidth)

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResizeWindow)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])

    return (
        <div className="text-center text-camwhite min-h-screen p-10 gap-12  relative">

            <div className="flex flex-col items-center gap-4 w-auto  ">
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
                            className="drop-shadow-textoutline">
                            Welcome to my portfolio
                        </motion.h1>
                    </div>

                </div>

                {/* Logo + divider */}
                <motion.div
                    ref={stickyRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.3, delay: 1.5 }}
                    className={`mb-10 sticky top-0 z-50 flex flex-col gap-2
                               drop-shadow-textoutline pointer-events-auto transition-[backdrop-filter] ease-in-out duration-500
                                ${isSticky ? 'backdrop-blur-md w-screen' : ''}`}
                >
                    <div className="flex justify-center">
                        {isSticky && width > 768 && <button className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl ">Top</button>}
                        {isSticky && width > 768 && <button className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl ">Tools</button>}
                        {isSticky && width > 768 && <button className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl ">Projects</button>}
                        <Image
                            src='/camLogo.png'
                            alt='Cameron Calhoun'
                            width='400'
                            height='50'
                            className={`drop-shadow-textoutline  lg:w-2xl ${isSticky ? 'mx-auto md:w-sm' : 'md:w-lg'}`}
                        />
                        {isSticky && width > 768 && <button className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl ">Education</button>}
                        {isSticky && width > 768 && <button className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl ">Work</button>}
                        {isSticky && width > 768 && <button className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl ">Contact</button>}
                    </div>
                    <div className=" border-camgreen border rounded-xl"></div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.3, delay: 1.8 }}
                    className="flex flex-col gap-50 justify-center items-center"
                >
                    {/* Intro Block */}
                    <div className="flex flex-col md:flex-row items-center 
                                    w-full md:w-5/6 gap-20  
                                    p-4 rounded-xl bg-camblack/[50%] backdrop-blur-xs relative" >
                        <div className="md:flex-1 lg:flex-[2] ">


                            <p className="drop-shadow-textoutline text-base md:text-lg lg:text-2xl pointer-events-auto leading-relaxed space-y-4 mt-8 mb-6">
                                Hi, I'm Cameron, a software developer with a passion for web applications. With over five years of experience, I enjoy solving complex problems and continuously learning. Outside of work, you can find me listening to music, playing video games, skateboarding, or building projects like this one! Feel free to explore my work and background below!
                            </p>


                        </div>
                        <div className="md:flex-1 lg:flex-[1] flex items-center justify-center pointer-events-auto">
                            <Image
                                src='/cat.jpg'
                                alt='cool cat that shall serve as a placeholder'
                                width={350}
                                height={350}
                                className="rounded-xl object-cover max-w-full h-auto"
                            />
                        </div>
                    </div>

                    <ScrollIndicator />

                    {/* Tools Block */}
                    <div className="flex flex-col items-center 
                                    w-auto p-8 gap-5 
                                    rounded-xl bg-camblack/[50%] backdrop-blur-xs relative"
                        id="second-block">
                        <div className="flex flex-col">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl pointer-events-auto">Tools I use</h1>
                            <div className="w-full border-camgreen border rounded-xl"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-5">

                            <div className="pointer-events-auto border-camgreen border-2 p-1 rounded-md flex text-left">
                                <a href="https://kernel.org" className="flex items-center justify-center hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src='/tux.png'
                                        alt='Linux'
                                        width={75}
                                        height={75}
                                        style={{ transform: 'scaleY(0.97)' }}
                                        className="px-1 py-2  rounded-xl object-cover max-w-full h-auto"
                                    />
                                </a>
                                <div className="max-w-xs">
                                    <h2 className="text-xl font-bold">Linux</h2>
                                    <p className="text-lg">My preferred environment for working on projects efficiently</p>
                                </div>
                            </div>
                            <div className="pointer-events-auto border-camgreen border-2 p-1 rounded-md flex text-left">
                                <a href="https://react.dev" className="flex items-center justify-center hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src='/react.webp'
                                        alt='Linux'
                                        width={75}
                                        height={75}
                                        style={{ transform: 'scaleY(0.97)' }}
                                        className="px-1 py-2  rounded-xl object-cover max-w-full h-auto"
                                    />
                                </a>
                                <div className="max-w-xs">
                                    <h2 className="text-xl font-bold">React</h2>
                                    <p className="text-lg">Industry standard frontend library for building dynamic UIs</p>
                                </div>
                            </div>

                            <div className="pointer-events-auto border-camgreen border-2 p-1 rounded-md flex text-left">
                                <a href="https://nextjs.org" className="flex items-center justify-center hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src='/next.png'
                                        alt='Linux'
                                        width={75}
                                        height={75}
                                        style={{ transform: 'scaleY(0.97)' }}
                                        className="px-1 py-2  rounded-xl object-cover max-w-full h-auto"
                                    />
                                </a>
                                <div className="max-w-xs">
                                    <h2 className="text-xl font-bold">Next.js</h2>
                                    <p className="text-lg">Full stack framework for apps with routing, API support, and SSR</p>
                                </div>
                            </div>

                            <div className="pointer-events-auto border-camgreen border-2 p-1 rounded-md flex text-left">
                                <a href="https://tailwindcss.com" className="flex items-center justify-center hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src='/tailwind.png'
                                        alt='Linux'
                                        width={75}
                                        height={75}
                                        style={{ transform: 'scaleY(0.97)' }}
                                        className="px-1 py-2  rounded-xl object-cover max-w-full h-auto"
                                    />
                                </a>
                                <div className="max-w-xs">
                                    <h2 className="text-xl font-bold">Tailwind CSS</h2>
                                    <p className="text-lg">Utility first CSS framework for rapidly building modern web apps</p>
                                </div>
                            </div>

                            <div className="pointer-events-auto border-camgreen border-2 p-1 rounded-md flex text-left">
                                <a href="https://git-scm.com" className="flex items-center justify-center hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src='/git.png'
                                        alt='Linux'
                                        width={75}
                                        height={75}
                                        style={{ transform: 'scaleY(0.97)' }}
                                        className="px-1 py-2  rounded-xl object-cover max-w-full h-auto"
                                    />
                                </a>
                                <div className="max-w-xs">
                                    <h2 className="text-xl font-bold">Git</h2>
                                    <p className="text-lg">Version control system for tracking code changes and collaboration</p>
                                </div>
                            </div>
                            <div className="pointer-events-auto border-camgreen border-2 p-1 rounded-md flex text-left">
                                <a href="https://vercel.com" className="flex items-center justify-center hover:scale-110" target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src='/vercel.png'
                                        alt='Linux'
                                        width={75}
                                        height={75}
                                        style={{ transform: 'scaleY(0.97)' }}
                                        className="px-1 py-2  rounded-xl object-cover max-w-full h-auto"
                                    />
                                </a>
                                <div className="max-w-xs">
                                    <h2 className="text-xl font-bold">Vercel</h2>
                                    <p className="text-lg">Platform for deploying Next.js apps with built-in CI/CD</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Third Block */}
                    <div className="flex flex-col md:flex-row items-center 
                                    w-full md:w-5/6 gap-20
                                    p-4 rounded-xl bg-camblack/[50%] backdrop-blur-xs relative" >
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
