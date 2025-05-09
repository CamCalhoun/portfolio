"use client"
import Nebula from "./Nebula"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Nebula />
            {children}
        </>
    )
}
