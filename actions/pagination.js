/* eslint-disable react-hooks/rules-of-hooks */
import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';
import { Col } from 'react-bootstrap';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

 export const useGetBlogsPages = ({ blogs: initialData, filter }) => {
    return useSWRPages('index-page',
        ({ offset, withSWR }) => { 
            let initialData = !offset && blogs;
            const { data: paginatedBlogs } = withSWR(useGetBlogs({offset}, initialData));

            if (!paginatedBlogs) {return "Loading..."}
            return (paginatedBlogs.map(blog => (  
                filter.view.list ?
                <Col md="9" key={`${blog.slug}-list`}>
                <CardListItem
                    author={blog.author}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    link={{
                    href: '/blogs/[slug]',
                    as: `/blogs/${blog.slug}`
                    }}
                /> 
                </Col>
                :
                <Col md="4" key={blog.slug}>
                    <CardItem 
                    author={blog.author}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    image={blog?.coverImage}
                    link={{
                        href: '/blogs/[slug]',
                        as: `/blogs/${blog.slug}`
                    }}
                    />
                </Col> 
                ))
            )
        }, 
        // here you will compute offset that will get passed into previous callback functions
        // SWR: data you will get from "withSWR" function
        // index: number of current page
        (SWR, index) => {
            if (SWR.data && SWR.data.length === 0) {
                return null;
            }
            return (index + 1 )* 3;
        },
        [filter]
    )
 };