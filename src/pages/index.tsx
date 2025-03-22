import Timeline from "@/components/Timeline";
import Header from "@/components/Header"
import About from "@/components/About"
import path from "path"
import fs from "fs"
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
    const file_path = path.join(process.cwd(), 'Projects')
    const folders = fs.readdirSync(file_path)
    
    const content = folders.map((folder) => {
        const json_path = path.join(file_path, folder, `${folder}.json`)
        const json = fs.readFileSync(json_path, 'utf-8')
        return {name: folder, json: JSON.parse(json)}
    })

    return {
        props: { content: content }
    }
}

export default function Home({ content }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Header />
            <About />
            <Timeline projects={content} />
        </>
    );
}
