import { useEffect, useState } from "react";
import { Row, Col} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from 'lib/api';
import { useGetBlogs } from 'actions';


export default function Home({blogs: initialData}) {
  const [filter, setFilter] = useState({
    view: {
      list: 0 
    }
  })
  
  const { data: blogs, error } = useGetBlogs(initialData);

return(
  <PageLayout>
    <AuthorIntro />
    <FilteringMenu
    filter={filter}
      onChange={(option, value) => {
        setFilter({...filter, [option]: value})
      }} 
    />
    <hr/>
    <Row className="mb-5">

    {blogs.map(blog => (  
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
      ))}
    </Row>
  </PageLayout>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs({offset: 0});
  return {
    props: {
      blogs
    }
  }
}