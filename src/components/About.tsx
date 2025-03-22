import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import Image from "next/image"

const About = () => {
    return (
        <section id="about" className="flex justify-center flex-row py-40">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg mb-8">
                    I am a passionate software developer with a love for creating innovative solutions.
                </p>
                <p className="text-lg mb-8">
                    I enjoy working with modern technologies and continuously learning new skills.
                </p>
            </div>
            <div className="w-[450px]">
                <AspectRatio ratio={1 / 1}>
                    <Image src="/IMG_7229.jpeg" alt="Image" fill className="rounded-md object-cover"/>
                </AspectRatio>
            </div>
            <img src="/travelamulet/timeline.png" alt="Image" className="rounded-md object-cover"/>
        </section>
    )
}

export default About;