import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import fs from 'fs';
import path from 'path';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import MyHeader from "@/components/Header";

const customOneDark = {
    ...dracula,
    'pre[class*="language-"]': {
        backgroundColor: 'transparent !important',  // Force transparent background
        color: 'white !important'  // Force white text color
    },
    'code[class*="language-"]': {
        backgroundColor: 'transparent !important',  // Force transparent background
        color: 'white !important'  // Force white text color
    }
};

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
                    components={{
                        code({ node, inline, className, children, ...props }: { node?: any, inline?: boolean, className?: string, children?: React.ReactNode }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    style={customOneDark}
                                    language={match[1]}
                                    PreTag="div"
                                    showLineNumbers={true}
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, "")}
                                </SyntaxHighlighter>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </>
    );
};

export default ProjectPage;
