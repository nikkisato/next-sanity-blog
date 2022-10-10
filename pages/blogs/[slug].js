import PageLayout from "components/PageLayout";
import { useRouter } from "next/router"
import { getBlogBySlug, getAllBlogs } from "lib/api"

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
    const blogs = await getAllBlogs();
    const paths = blogs?.map((blog) => {
        return {
            params: {slug: blog.slug}
        }
    })
    console.log("Getting paths for every page")
    return {
        paths,
        fallback: false
    }
}

export default BlogDetail;