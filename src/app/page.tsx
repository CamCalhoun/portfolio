"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import ScrollIndicator from "@/components/ScrollIndicator";
import { useEffect, useState, useRef } from "react";
import TechCard from "@/components/TechCard";
import Carousel from "@/components/Carousel";


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

        handleResizeWindow()
        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResizeWindow)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResizeWindow)
        }
    }, [])

    return (
        <div className="text-center text-camwhite min-h-screen p-10 gap-12  relative" id="top">
            <div className="flex flex-col items-center gap-4 w-auto  ">

                {/* Welcome message */}
                <div className="flex flex-col items-center gap-3 w-auto ">
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
                               drop-shadow-textoutline pointer-events-auto transition-[backdrop-filter] ease-linear duration-500
                                ${isSticky ? 'backdrop-blur-md w-screen' : ''}`}
                >
                    <div className="flex justify-center">
                        {isSticky &&
                            width > 768 &&
                            <button
                                className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl "
                                onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}>
                                Top
                            </button>}
                        {isSticky &&
                            width > 768 &&
                            <button
                                className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl "
                                onClick={() => document.getElementById("tools")?.scrollIntoView({ behavior: "smooth", block: 'center' })}>
                                Tools
                            </button>}
                        {isSticky &&
                            width > 768 &&
                            <button
                                className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl "
                                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: 'center' })}>
                                Projects
                            </button>}
                        <Image
                            src='/camLogo.png'
                            alt='Cameron Calhoun'
                            width='400'
                            height='50'
                            className={`drop-shadow-textoutline  lg:w-2xl ${isSticky ? 'mx-auto md:w-sm' : 'md:w-lg'}`}
                        />
                        {isSticky &&
                            width > 768 &&
                            <button
                                className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl "
                                onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth", block: 'center' })}>
                                Education
                            </button>}
                        {isSticky &&
                            width > 768 &&
                            <button
                                className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl "
                                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: 'center' })}>
                                Work
                            </button>}
                        {isSticky &&
                            width > 768 &&
                            <button
                                className="flex justify-center items-center md:font-bold lg:font-normal active:scale-97 drop-shadow-textoutline md:text-xs lg:text-lg w-20 lg:w-32 px-4 py-2 m-1 border-camgreen hover:border-camwhite hover:text-camgreen border-3 rounded-xl "
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: 'center' })}>
                                Contact
                            </button>}
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
                                Hi, I'm Cameron, a software developer with a passion for web applications. With over five years of experience, I enjoy solving complex problems and continuously learning. Outside of work, you can find me listening to music, playing video games, watching sports, or building projects like this one! Feel free to explore my work and background below!
                            </p>


                        </div>
                        <div className="md:flex-1 lg:flex-[1] flex items-center justify-center pointer-events-auto">
                            <Image
                                src='/headshot.jpg'
                                alt='Cameron Calhoun headshot'
                                width={350}
                                height={350}
                                className="rounded-xl object-cover max-w-full h-auto"
                            />
                        </div>
                    </div>

                    <ScrollIndicator />

                    {/* Content after this point will make the scroll indicator disappear */}
                    <div className="flex flex-col gap-50 justify-center items-center" id="goodbyeScroll">

                        {/* Tools Block */}
                        <div className="flex flex-col items-center 
                                    w-auto p-8 gap-5 
                                    rounded-xl bg-camblack/[50%] backdrop-blur-xs relative"
                            id="tools">
                            <div className="flex flex-col">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl pointer-events-auto">Tools I use</h1>
                                <div className="w-full border-camgreen border rounded-xl"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                {/* Linux */}
                                <TechCard lnk='https://kernel.org' img='/tux.png' title='Linux' desc='My preferred environment for working on projects efficiently' alt='Linux' />
                                {/* React */}
                                <TechCard lnk='https://react.dev' img='/react.webp' title='React' desc='Industry standard frontend library for building dynamic UIs' alt='React' />
                                {/* Next.js */}
                                <TechCard lnk='https://nextjs.org' img='/next.png' title='Next.js' desc='Full stack framework for apps with routing, API support, and SSR' alt='Next.js' />
                                {/* Tailwind CSS */}
                                <TechCard lnk='https://tailwindcss.com' img='/tailwind.png' title='Tailwind CSS' desc='Utility first CSS framework for rapidly building modern web apps' alt='Tailwind CSS' />
                                {/* Git */}
                                <TechCard lnk='https://git-scm.com' img='/git.png' title='Git' desc='Version control system for tracking code changes and collaboration' alt='Git' />
                                {/* Vercel */}
                                <TechCard lnk='https://vercel.com' img='/vercel.png' title='Vercel' desc='Platform for deploying Next.js apps with built-in CI/CD' alt='Vercel' />

                            </div>
                        </div>

                        {/* Projects */}
                        <div className="flex flex-col items-center 
                                    w-auto p-8 gap-5 rounded-xl bg-camblack/[50%] backdrop-blur-xs relative"
                            id="projects">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl pointer-events-auto">Projects</h1>
                                <h2 className="text-lg md:text-xl lg:text-2xl pointer-events-auto">Click to learn more</h2>
                                <div className="w-full border-camgreen border rounded-xl"></div>
                                <h2 className=""></h2>
                            </div>
                            <Carousel />
                        </div>


                        {/* Education */}
                        <div className="flex flex-col items-center w-full md:w-5/6 p-8 gap-5 rounded-xl bg-camblack/[50%] backdrop-blur-xs relative" id="education">
                            <div className="flex flex-col items-center gap-2 w-full">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl pointer-events-auto">Education</h1>
                                <div className="w-full border-camgreen border rounded-xl"></div>
                            </div>

                            <div className="flex flex-col gap-8 mt-6 w-full">

                                <div className="flex flex-col md:flex-row items-center gap-6 text-left">
                                    <div className="md:w-1/3 text-center">
                                        <Image
                                            src="/pennwest-logo.png"
                                            alt="PennWest California Logo"
                                            width={350}
                                            height={100}
                                            className="rounded-xl object-contain mx-auto"
                                        />
                                    </div>
                                    <div className="md:w-2/3 space-y-2">
                                        <h2 className="text-2xl font-semibold">PennWest California</h2>
                                        <p className="text-lg text-camgreen">B.S. in Computer Science</p>
                                        <p className="text-base">August 2020 – May 2025</p>
                                        <p className="text-base leading-relaxed">
                                            Relevant Courses: Data Structures, Analysis of Algorithims, Web Programming, Database Design / Programming, Language Translations (Compiler Design).
                                        </p>
                                        <p className="text-base leading-relaxed">
                                            Activities: Peer Tutoring, Peer Mentor, Programming Club member, Gaming Club member, Senior Project on AI Study Companion (ASC).
                                        </p>
                                        <p className="pt-2">Transcript available upon request</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Work */}
                        <div className="flex flex-col items-center w-full md:w-5/6 p-8 gap-5 rounded-xl bg-camblack/[50%] backdrop-blur-xs relative" id="work">
                            <div className="flex flex-col items-center gap-2 w-full">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl pointer-events-auto">Work Experience</h1>
                                <div className="w-full border-camgreen border rounded-xl"></div>
                            </div>

                            <div className="flex flex-col gap-8 mt-6 w-full">

                                {/* Sheetz */}
                                <div className="flex flex-col md:flex-row items-center gap-6 text-left">
                                    <div className="md:w-1/3 text-center">
                                        <Image
                                            src="/sheetz-logo.png"
                                            alt="Sheetz Logo"
                                            width={300}
                                            height={150}
                                            className="rounded-xl object-contain mx-auto"
                                        />
                                    </div>
                                    <div className="md:w-2/3 space-y-2">
                                        <h2 className="text-2xl font-semibold">UEM Technologist Intern</h2>
                                        <p className="text-lg text-camgreen">Sheetz, Inc.</p>
                                        <p className="text-base">May 2025 – Present</p>
                                        <ul className="list-disc list-inside text-base leading-relaxed">
                                            <li>Collaborated with the Unified Endpoint Management team to improve device deployment workflows.</li>
                                            <li>Automated routine maintenance tasks using PowerShell and Bash for 2500+ devices.</li>
                                            <li>Assisted in developing internal documentation and system configurations.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Peer Tutor */}
                                <div className="flex flex-col md:flex-row items-center gap-6 text-left">
                                    <div className="md:w-1/3 text-center">
                                        <Image
                                            src="/pennwest-logo.png"
                                            alt="PennWest Logo"
                                            width={300}
                                            height={150}
                                            className="rounded-xl object-contain mx-auto"
                                        />
                                    </div>
                                    <div className="md:w-2/3 space-y-2">
                                        <h2 className="text-2xl font-semibold">Peer Tutor</h2>
                                        <p className="text-lg text-camgreen">PennWest California</p>
                                        <p className="text-base">August 2023 – May 2025</p>
                                        <ul className="list-disc list-inside text-base leading-relaxed">
                                            <li>Provided academic support in computer science and programming fundamentals.</li>
                                            <li>Customized tutoring strategies based on student learning styles and course content.</li>
                                            <li>Encouraged student independence and academic confidence through guided problem-solving.</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* True Value */}
                                <div className="flex flex-col md:flex-row items-center gap-6 text-left">
                                    <div className="md:w-1/3 text-center">
                                        <Image
                                            src="/truevalue-logo.webp"
                                            alt="True Value Logo"
                                            width={300}
                                            height={150}
                                            className="rounded-xl object-contain mx-auto"
                                        />
                                    </div>
                                    <div className="md:w-2/3 space-y-2">
                                        <h2 className="text-2xl font-semibold">Sales Associate</h2>
                                        <p className="text-lg text-camgreen">True Value Hardware</p>
                                        <p className="text-base">May 2023 – May 2025</p>
                                        <ul className="list-disc list-inside text-base leading-relaxed">
                                            <li>Assisted customers with product selection and provided knowledgeable hardware support.</li>
                                            <li>Maintained inventory organization and restocking procedures across departments.</li>
                                            <li>Handled POS transactions, returns, and special orders with professionalism and accuracy.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>




                        {/* Contact */}
                        <div
                            className="flex flex-col items-center w-full md:w-5/6 p-8 gap-6 rounded-xl bg-camblack/[50%] backdrop-blur-xs relative"
                            id="contact"
                        >
                            <div className="flex flex-col items-center gap-2 w-full">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl pointer-events-auto">Contact Me</h1>
                                <div className="w-full border-camgreen border rounded-xl"></div>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-8 mt-6 w-full">
                                {/* Text Section */}
                                <div className="md:flex-1 lg:flex-[2] text-left space-y-4 text-xl md:text-2xl pointer-events-auto">
                                    <p>
                                        I’m always open to connecting! Feel free to reach out through any of the following platforms:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>
                                            <strong>Email:</strong>{" "}
                                            <a
                                                href="mailto:cameron.calhoun01@gmail.com"
                                                className="text-camgreen hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                cameron.calhoun01@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <strong>LinkedIn:</strong>{" "}
                                            <a
                                                href="https://linkedin.com/in/cameron-calhoun-b477152b0/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-camgreen hover:underline"
                                            >
                                                linkedin.com/in/cameron-calhoun-b477152b0/
                                            </a>
                                        </li>
                                        <li>
                                            <strong>GitHub:</strong>{" "}
                                            <a
                                                href="https://github.com/CamCalhoun"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-camgreen hover:underline"
                                            >
                                                github.com/CamCalhoun
                                            </a>
                                        </li>
                                        <li>
                                            <strong>Resume:</strong>{" "}
                                            <a
                                                href="/CameronCalhounResume.pdf"
                                                download
                                                className="text-camgreen hover:underline"
                                            >
                                                Download PDF
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Image Section */}
                                <div className="md:flex-1 lg:flex-[1] flex items-center justify-center pointer-events-auto">
                                    <Image
                                        src="/contact-photo.tif"
                                        alt="Contact image"
                                        width={350}
                                        height={400}
                                        className="rounded-xl object-cover max-w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                </motion.div>
            </div >
        </div >
    );
}
