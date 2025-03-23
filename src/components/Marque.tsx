"use client"

import { motion } from "framer-motion"

export default function Marquee({ skills, angle, top, left }: { skills: string[], angle: number, top: number, left: number }) {
    console.log(`rotate-${angle}`)
    let my_skills = "";
    for (let i = 0; i < skills.length; i++) {
        my_skills += skills[i] + " ";
    }

    return (
        <div
        className={`relative w-full overflow-hidden bg-background py-16`}
        style={{
            top: `${top}rem`,
            left: `${left}rem`,
            transform: `rotate(${angle}deg)`,
            zIndex: -10
        }}
        >
            <div className="" />
            <motion.div
                className="flex min-w-max whitespace-nowrap"
                initial={{ x: 0 }} 
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                <div className="flex min-w-max">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center mx-4">
                            <span
                                className="text-7xl sm:text-8xl md:text-9xl font-bold text-transparent px-4"
                                style={{
                                    WebkitTextStroke: "1px rgb(156 163 175)",
                                }}
                            >
                                { my_skills }
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
