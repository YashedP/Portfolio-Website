import { AspectRatio } from "@radix-ui/react-aspect-ratio"

export default function Showcase({ isImage, src }: { isImage: boolean, src: string }) {
    
    return (
        <section id="showcase" className="flex justify-center flex-row py-40">
            <div className="w-[450px]">
                <AspectRatio ratio={1 / 1}>
                    <img src="/IMG_7229.jpeg" alt="Image" className="rounded-md object-cover"/>
                </AspectRatio>
            </div>
        </section>
    )
}
