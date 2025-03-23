import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

export default function MyHeader() {
    const [firstVisit, setFirstVisit] = useState<boolean | null>(null);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (!hasVisited) {
            setFirstVisit(true);
            sessionStorage.setItem("hasVisited", "true");
        } else {
            setFirstVisit(false);
        }
    }, []);

    if (firstVisit === null) {
        return null;
    }

    return (
        <motion.header
            className="lg:sticky top-0 left-0 right-0 z-25 border-b border-black"
            initial={firstVisit ? { y: -75 } : { y: 0 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="flex md:flex-row flex-col items-center justify-around px-6 py-4 backdrop-blur-xl relative">
                <div className="flex items-center">
                    <Link href="/" className="myHeader flex items-center gap-3">
                        <span className="font-extrabold text-lg">Yash Jani</span>
                    </Link>
                </div>

                <div>
                    <nav className="flex md:gap-12 gap-3 font-semibold">
                        <Link href="/#about" className="myHeader hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="/projects/FLOMIR" className="myHeader hover:text-white transition-colors">
                            Projects
                        </Link>
                        <Link href="" className="myHeader hover:text-white transition-colors">
                            Publications
                        </Link>
                        <Link href="" className="myHeader hover:text-white transition-colors">
                            Blog
                        </Link>
                    </nav>
                </div>
                    <InteractiveHoverButton className="border-4 border-dotted border-amber-950">
                        Contact Me!
                    </InteractiveHoverButton>
                </div>
        </motion.header>
    )
}
