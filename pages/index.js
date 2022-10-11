import { useState } from "react";
import { Row, Col} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from 'lib/api';

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: {
      list: 1 
    }
  })

return(
  <PageLayout>
    <AuthorIntro />
    <FilteringMenu
      onChange={() => {alert("Alert from Index")}} />
    <hr/>
    <Row className="mb-5">
      {/* <Col md="10">
        <CardListItem />
      </Col> */}

    {blogs.map(blog => (  
      filter.view.list ?
        <Col md="9">
          <CardListItem />
        </Col>
      :
      <Col md="4" key={blog.slug}>
        <CardItem 
          author={blog.author}
          title={blog.title}
          subtitle={blog.subtitle}
          date={blog.date}
          image={blog.coverImage}
          slug={blog.slug}
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

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    }
  }
}

export async function getServerSide() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    }
  }
}

// Static Page
// Faster, can be cached using CDN
// Created at build time
// When we making the request we are always receiving the same html document



// Dynamic Page
// Created at request time (we can fetch data on server)
// Little bit slower, the time depends on data you are fetching