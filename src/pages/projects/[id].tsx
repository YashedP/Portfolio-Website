import { useRouter } from "next/router";
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import fs from 'fs';
import path from 'path';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html";
import rehypeRaw from "rehype-raw";

import MyHeader from "@/components/Header";


export const getStaticProps = async (context: GetStaticPropsContext) => {
    const file_path = path.join(process.cwd(), `Projects`, `${context.params?.id}`, `${context.params?.id}.md`)    
    const content = fs.readFileSync(file_path, 'utf-8')

    return {
        props: { content: String(content) }
    }
}

export const getStaticPaths = async () => {
    const file_path = path.join(process.cwd(), 'Projects')
    const folders = fs.readdirSync(file_path)

    const paths = folders.map((folder) => {
        return {
            params: { id: folder.replace('.md', '') }
        }
    })

    return {

        paths: paths,
        fallback: false
    }
}

const ProjectPage = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <MyHeader />
            <div className="article-body prose w-full max-w-3xl mx-auto mt-8 lg:py-16 lg:px-6 p-2 sm:p-4">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkHtml]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </>
    );
};

export default ProjectPage;
