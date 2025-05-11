"use client";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const target = document.getElementById("second-block")

        if (!target) {
            console.warn("No element with id 'second-block' found.")
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(!entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        )

        observer.observe(target);
        return () => observer.disconnect();
    }, [])

    return (
        <a
            href="#demo"
            className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="flex flex-col items-center justify-center space-y--2">
                <span className="w-3 h-3 lg:w-5 lg:h-5 border-r-2 border-b-2 border-white transform rotate-45 animate-scroll"></span>
                <span className="w-3 h-3 lg:w-5 lg:h-5 border-r-2 border-b-2 border-white transform rotate-45 animate-scroll delay-200"></span>
                <span className="w-3 h-3 lg:w-5 lg:h-5 border-r-2 border-b-2 border-white transform rotate-45 animate-scroll delay-400"></span>
            </div>
        </a>
    )
}

export default ScrollIndicator

