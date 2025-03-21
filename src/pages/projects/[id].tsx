import { useRouter } from "next/router";
import type { InferGetStaticPropsType, GetStaticPathsContext, GetStaticPropsContext } from 'next'
import MyHeader from "@/components/Header";
import fs from 'fs';
import path from 'path';
import remarkGfm from "remark-gfm"
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "github-markdown-css"

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const file_path = path.join(process.cwd(), 'Projects', `${context.params?.id}.md`)
    const content = fs.readFileSync(file_path, 'utf-8')

    return {
        props: {content: String(content)}
    }
}

export const getStaticPaths = async () => {
    const file_path = path.join(process.cwd(), 'Projects')
    const folders = fs.readdirSync(file_path)

    const paths = folders.map((folder) => {
        return {
            params: { id: folder.replace('.md', '')}
        }
    })
    
    return {
        
        paths: paths,
        fallback: false
    }
}

const ProjectPage = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    const { id } = router.query

    console.log(content)

    return (
        <>
            {/* <MyHeader />
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
            {/* <div 
                className="newTimesRoman flex flex-col justify-center items-center w-full max-w-[40%] mx-auto px-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
            </div> */}
            <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    rehypePlugins={[rehypeHighlight]}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </>        
    );
};

export default ProjectPage;
