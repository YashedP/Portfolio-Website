import Link from "next/link"
import { Button } from "@/components/ui/button"

const MyHeader = () => {
    return (
        <header className="relative lg:sticky top-0 left-0 right-0 z-25 border-b border-black">
            <div className=" flex items-center justify-between px-6 py-4 backdrop-blur-xl relative">
                <div className="flex items-center gap-2">
                    <Link href="/" className="myHeader flex items-center gap-3">
                        <span className="font-extrabold text-lg">Yash Jani</span>
                    </Link>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2">
                    <nav className=" flex items-center gap-8 font-semibold">
                        <Link href="/#about" className="myHeader text-sm hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="" className="myHeader text-sm hover:text-white transition-colors">
                            Projects
                        </Link>
                        <Link href="" className="myHeader text-sm hover:text-white transition-colors">
                            Publications
                        </Link>
                        <Link href="" className="myHeader text-sm hover:text-white transition-colors">
                            Blog
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center">
                    <Button>
                        <Link href="#contact" className="text-sm hover:text-white transition-colors">
                            Connect with me!
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default MyHeader
