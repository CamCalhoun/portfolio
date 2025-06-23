
// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function ASC() {
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
                    <h1 className="text-5xl md:text-6xl font-bold">AI Study Companion</h1>
                    <div className="h-1 w-24 bg-camgreen mx-auto rounded" />
                </div>

                {/* Image */}
                <Image
                    src="/asc.png"
                    alt="Cool cat placeholder"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full max-w-[600px] h-auto shadow-lg"
                />

                {/* Motivation */}
                <section className="space-y-4 text-left w-full">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Motivation</h2>
                    <div className="h-1 w-20 bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed">
                        AI Study Companion (ASC) was created for my Senior Project course at PennWest California.
                        ASC was inspired by my experience as a peer tutor. A common struggle I faced was finding new
                        ways to help students grasp material and study in ways that worked for them. Artificial Intelligence,
                        particularly large language models (LLMs) and generative AI, has often been viewed negatively in education.
                        I believe it's a powerful tool when used correctly and sought to explore that idea in this project.
                        ASC uses these tools to adapt to the user’s skill level and grow with them.
                    </p>
                </section>

                {/* Tech Stack */}
                <section className="space-y-4 text-left w-full">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Tech Stack</h2>
                    <div className="h-1 w-20 bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed">
                        ASC is a React application with a Python backend. It uses a client-server architecture: each browser session acts as a client,
                        while a FastAPI backend handles user tracking and LLM requests. React was chosen for its frontend flexibility,
                        and Python's FastAPI library makes building APIs fast and efficient. The frontend is hosted on Vercel, and the backend on Render.
                    </p>
                </section>

                {/* Documentation & Links */}
                <section className="space-y-4 text-left w-full">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Documentation and Links</h2>
                    <div className="h-1 w-20 bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed text-center">
                        Below are links related to ASC. You can find weekly reports when I was building this project,
                        design documents, and even a user manual! For questions, feel free to reach out via the contact info on the homepage!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 text-camgreen text-lg font-medium text-center">
                        <a href="https://ai-study-companion-pwc.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            ASC App
                        </a>
                        <a href="https://ai-study-companion-pwc.vercel.app/progress" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Weekly Progress
                        </a>
                        <a href="https://ai-study-companion-pwc.vercel.app/about" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            About ASC
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

