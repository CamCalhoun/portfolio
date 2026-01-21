
// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function WMS() {
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
                    <h1 className="text-5xl md:text-6xl font-bold">WMS Cloud Migration</h1>
                    <div className="h-1 w-24 bg-camgreen mx-auto rounded" />
                </div>

                {/* Image */}
                <Image
                    src="/wms.png"
                    alt="WMS Migration"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full max-w-[600px] h-auto shadow-lg"
                />

                {/* Motivation */}
                <section className="space-y-4 text-left w-full md:w-5/6 gap-20 p-4 rounded-xl backdrop-blue-xs bg-camblack/[50%] relative">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Motivation</h2>
                    <div className="h-1 w-full bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed indent-16">
                        The WMS Cloud Migration project was initiated to modernize endpoint management infrastructure while reducing long-term operational overhead.
                        Beyond the technical migration itself, the project presented an opportunity to lead a production-facing change through structured planning, review, and execution within an enterprise environment.
                    </p>
                    <p className='mt-6'></p>
                    <p className='text-lg leading-relaxed indent-16'>
                        The goal was not only to move to a cloud-hosted solution, but to do so in a way that aligned with established change management practices, minimized risk, and ensured long-term maintainability.
                    </p>
                </section>

                {/* Design Goals*/}
                <section className="space-y-4 text-left w-full md:w-5/6 gap-20 p-4 rounded-xl backdrop-blue-xs bg-camblack/[50%] relative">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Design Goals</h2>
                    <div className="h-1 w-full bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed indent-16">
                        A primary design goal of this project was to execute a large-scale infrastructure change with minimal disruption to end users.
                        This required careful impact analysis, phased rollouts, and clear rollback strategies to ensure system stability throughout the migration.
                    </p>
                    <p className='mt-6'></p>
                    <p className='text-lg leading-relaxed indent-16'>
                        Equally important was treating the effort as an iterative, process-driven project.
                        Work was broken into manageable phases, progress was tracked, and changes were reviewed and approved through a formal Change Advisory Board (CAB) process.
                        This approach ensured accountability, transparency, and alignment with organizational standards.
                    </p>
                </section>

                {/* Implementation Overview */}
                <section className="space-y-4 text-left w-full md:w-5/6 gap-20 p-4 rounded-xl backdrop-blue-xs bg-camblack/[50%] relative">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center">Implementation Overview</h2>
                    <div className="h-1 w-full bg-camgreen mx-auto rounded" />
                    <p className="text-lg leading-relaxed indent-16">
                        The migration involved transitioning approximately 1,600 Dell Thin Clients from an on-premises Wyse Management Suite deployment to a cloud-hosted environment.
                        The project was planned and executed using an agile mindset, with incremental milestones, validation checkpoints, and continuous feedback.
                    </p>
                    <p className='mt-6'></p>
                    <p className='text-lg leading-relaxed indent-16'>
                        Each phase of the migration required impact planning to identify affected systems, users, and dependencies.
                        Change orders were authored, reviewed, and approved through the CAB, with clear documentation outlining scope, risk, mitigation strategies, and rollback procedures.
                    </p>
                    <p className='mt-6'></p>
                    <p className='text-lg leading-relaxed indent-16'>
                        In parallel with the technical work, standard operating procedures (SOPs) were created and updated to reflect the new cloud-based management workflows.
                        This ensured that the solution was not only deployed successfully, but also supportable and repeatable after handoff.
                    </p>
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

