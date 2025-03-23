import { useRouter } from "next/router";
import { useEffect } from "react";
import MyHeader from "@/components/Header";

const blog_post = () => {
    const router = useRouter()
    const { article } = router.query;

    return (
        <div>
        <h1>Blog Post</h1>
        <p>This is a blog post page.</p>
        </div>
    );
}

export default blog_post;