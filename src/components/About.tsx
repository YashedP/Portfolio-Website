import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Image from "next/image"

export default function About() {
    return (
        <section id="about" className="flex md:flex-row flex-col md:justify-center items-center py-40">
            <div className="basis-1/2 text-center">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg mb-8">
                    I am a passionate software developer with a love for creating innovative solutions.
                </p>
                <p className="text-lg mb-8">
                    I enjoy working with modern technologies and continuously learning new skills.
                </p>
            </div>

            <div className="w-[400px] h-[480px]">
                <div className="relative shadow-lg">
                    <AspectRatio ratio={2.5 / 3}>
                    <Image 
                        src="/IMG_7229.jpeg" 
                        alt="Image" 
                        fill 
                        className="rounded-md object-cover" 
                    />
                    </AspectRatio>
                </div>
            </div>
        </section>
    )
}
