"use client"
import { initParticlesEngine } from "@tsparticles/react"
import Nebula from "./Nebula"
import { useState, useEffect } from 'react'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-auto">
                <Nebula />
            </div>
            <div className="relative z-1 pointer-events-none">
                {children}
            </div>
        </>
    )
}
