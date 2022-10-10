import PageLayout from "components/PageLayout";
import { useRouter } from "next/router"
import { getBlogBySlug } from "lib/api"

const BlogDetail = ({ blog }) => { 
    console.log("Displaying Page")
    return (
    <PageLayout>
        <h1>Hello Detail Page - {blog.slug}</h1>
    </PageLayout>
)}

export async function getStaticProps({ params }) {
    console.log("fetching blog by", params.slug)

    const blog = await getBlogBySlug(params.slug);
    return {
        props: {blog}
    }
}

export async function getStaticPaths() {
    console.log("Getting paths for every page")
    return {
        paths:[
            {
                params: {slug: "my-second-blog"}
            },
            {
                params: {slug: "my-first-blog"}
            },
            {
                params: {slug: "my-third-blog"}
            },
        ],
        fallback: false
    }
}

export default BlogDetail;