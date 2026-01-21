
// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <div className="text-camwhite min-h-screen px-6 py-10 flex flex-col items-center ">
            <div className="flex flex-col items-center gap-16 max-w-4xl w-full text-center pointer-events-auto">
                <div className="absolute top-6 left-6">
                    <Link
                        href="/"
                        className="text-camgreen text-sm md:text-base border border-camgreen px-4 py-2 rounded-md hover:bg-camgreen hover:text-black transition"
                    >
                        ← Back
                    </Link>
                </div>
                {/* Title */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold">Digital Portfolio</h1>
                    <div className="h-1 w-24 bg-camgreen mx-auto rounded" />
                </div>

                {/* Image */}
                <Image
                    src="/portfolio.png"
                    alt="Digital Portfolio"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full max-w-[600px] h-auto shadow-lg"
                />

                {/* Motivation */}
                <section className="space-y-4 text-left w-full md:w-5/6 gap-20 p-4 rounded-xl backdrop-blue-xs bg-camblack/[50%] relative">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Motivation</h2>
                    <div className="h-1 w-full bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed indent-16">
                        The Digital Portfolio was created to serve as a practical showcase of my abilities in software development while also giving me space to expand my knowledge through hands-on practice.
                        Rather than treating learning and presentation as separate efforts, this project intentionally blends the two.
                    </p>
                    <p className='mt-6'></p>
                    <p className='text-lg leading-relaxed indent-16'>
                        By building and maintaining my own portfolio site, I am able to continuously apply new ideas, tools, and patterns in a real-world context while presenting my work in a way that is accessible and engaging for others.
                        The result is a living project that grows alongside my skills, serving both as a personal learning experience and a professional showcase.</p>
                </section>

                {/* Tech Stack */}
                <section className="space-y-4 text-left w-full md:w-5/6 gap-20 p-4 rounded-xl backdrop-blue-xs bg-camblack/[50%] relative">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Tech Stack</h2>
                    <div className="h-1 w-full bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed indent-16">
                        The Digital Portfolio is a modern web application built with a component-based frontend architecture.
                        It is developed using React and Next.js for performant, server-rendered page delivery, with Tailwind CSS providing a consistent and maintainable styling system.
                    </p>
                    <p className='mt-6'></p>
                    <p className='text-lg leading-relaxed indent-16'>
                        The site is deployed on Vercel, enabling seamless builds, fast global delivery, and straightforward iteration.
                        The stack was intentionally chosen to reflect industry-standard tools while keeping the application lightweight and easy to maintain.</p>
                </section>

                {/* Design Goals*/}
                <section className="space-y-4 text-left w-full md:w-5/6 gap-20 p-4 rounded-xl backdrop-blue-xs bg-camblack/[50%] relative">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Design Goals</h2>
                    <div className="h-1 w-full bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed indent-16">
                        A key design goal of this portfolio was to create an experience that people genuinely enjoy navigating.
                        Instead of functioning as a simple dump of information, much like a traditional resume, the site is designed to feel polished, intentional, and pleasant to explore.
                    </p>
                    <p className='mt-6'></p>
                    <p className='text-lg leading-relaxed indent-16'>
                        The goal is for visitors to leave with the impression that the site is both thoughtfully designed and technically sound, ideally thinking, <span className='italic'>“wow, this is neat!” </span>
                        At the same time, the portfolio serves as a personal sandbox for experimentation and development, allowing me to explore new ideas in layout, interaction, and frontend architecture while keeping usability and clarity at the forefront.
                    </p>
                </section>

                {/* Documentation & Links */}
                <section className="space-y-4 text-left w-full md:w-5/6 gap-20 p-4 rounded-xl backdrop-blue-xs bg-camblack/[50%] relative">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Documentation and Links</h2>
                    <div className="h-1 w-full bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed indent-16">
                        Below are links related to the Digital Portfolio, including the live site and relevant project resources.
                        The portfolio is actively maintained and updated as new projects, skills and experiences are added.
                    </p>
                    <p className='mt-6'></p>
                    <p className="text-lg leading-relaxed indent-16">
                        If you have any questions or would like to connect, feel free to reach out using the contact information provided on this site.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 text-camgreen text-lg font-medium text-center">
                        <a href="https://cameroncalhoun.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Live Portfolio
                        </a>
                        <a href="https://github.com/CamCalhoun/portfolio" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Source Code
                        </a>
                    </div>
                </section>

                {/* Home Link */}
                <Link
                    href="/"
                    className="mt-6 inline-block border border-camgreen text-camgreen px-6 py-3 rounded-xl hover:bg-camgreen hover:text-black transition"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}

