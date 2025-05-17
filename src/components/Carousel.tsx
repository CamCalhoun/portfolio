"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const Carousel = () => {
    const listRef = useRef<HTMLDivElement | null>(null)
    const itemRefs = useRef<HTMLDivElement[]>([])
    const indicatorRefs = useRef<HTMLDivElement[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const list = listRef.current
        const items = itemRefs.current
        const indicators = indicatorRefs.current

        const observer = new IntersectionObserver(onIntersectionObserved, {
            root: list,
            threshold: 0.6,
        })

        function onIntersectionObserved(entries: IntersectionObserverEntry[]) {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                    const intersectingIndex = items.indexOf(entry.target as HTMLDivElement)
                    activateIndicator(intersectingIndex)
                }
            })
        }

        function activateIndicator(index: number) {
            setCurrentIndex(index)
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle("active", i === index)
            })
        }

        items.forEach((item) => observer.observe(item))

        indicators.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                items[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
            })
        })

        return () => {
            observer.disconnect()
            indicators.forEach((indicator, index) => {
                indicator.removeEventListener("click", () => {
                    items[index]?.scrollIntoView();
                });
            });
        }

    }, [])

    const items = [
        <div key="1" className="item">1</div>,
        <div key="2" className="item">2</div>,
        <div key="3" className="item">3</div>,
        <div key="4" className="item">4</div>,
        <Image
            src='/cat.jpg'
            alt='cool cat that shall serve as a placeholder'
            width={350}
            height={350}
            className="item rounded-xl object-cover max-w-full h-auto"
            key="5"
        />,
    ]
    return (
        <>
            <div className="flex items-center w-full justify-between gap-4">
                <button
                    onClick={() => {
                        const prev = Math.max(0, currentIndex - 1)
                        itemRefs.current[prev]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                        setCurrentIndex(prev)
                    }}
                    className="h-1/5 z-10 border-2 border-camgreen text-camwhite font-bold px-3 py-2 rounded-l pointer-events-auto"
                >←</button>
                <div ref={listRef} className="border-camgreen border-1 rounded-xl list w-auto gap-10 pointer-events-auto">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="item"
                            ref={(el) => {
                                if (el) itemRefs.current[index] = el
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => {
                        const next = Math.min(items.length - 1, currentIndex + 1)
                        itemRefs.current[next]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
                        setCurrentIndex(next)
                    }}
                    className="h-1/5  z-10 border-2 border-camgreen text-camwhite font-bold px-3 py-2 rounded-r pointer-events-auto"
                >→</button>
            </div>
            <div className="indicatorsList pointer-events-auto" aria-hidden>
                {items.map((_, index) => (
                    <div
                        key={index}
                        className="indicator"
                        ref={(el) => {
                            if (el) indicatorRefs.current[index] = el
                        }}
                    ></div>
                ))}
            </div>

        </>
    )
}
export default Carousel;
