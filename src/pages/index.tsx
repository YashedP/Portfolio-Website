import Header from "@/components/Header"
import About from "@/components/About"
import MainBlog from "@/components/MainBlog"
import Timeline from "@/components/Timeline";
import path from "path"
import fs from "fs"
import { InferGetStaticPropsType } from "next";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { info } from "../../info"
import BackgroundWrapper from "@/components/backgroundWrapper";

export const getStaticProps = async () => {
    const file_path = path.join(process.cwd(), 'Projects')
    const folders = fs.readdirSync(file_path)
    
    const content = folders.map((folder) => {
        const json_path = path.join(file_path, folder, `${folder}.json`)
        const json = fs.readFileSync(json_path, 'utf-8')
        return {name: folder, json: JSON.parse(json)}
    })

    return {
        props: {
            content: content,
            skills: info.skills,
        }
    }
}

export default function Home({ content, skills }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <BackgroundWrapper>
                <Header />
                <About />
                <MainBlog articles={["hehe"]} />
            </BackgroundWrapper>
            <VelocityScroll 
                defaultVelocity={1}
                numRows={2}
                className="text-neutral-400"
            >
                {skills.join(" ")}
            </VelocityScroll>
            <Timeline projects={content} />
        </>
    );
}
