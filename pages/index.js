import { useEffect, useState } from "react";
import { Row, Button} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from 'lib/api';
import { useGetBlogsPages } from "actions/pagination"


export default function Home({ blogs }) {
  console.log(blogs);
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 }
  })

// loadMore: to load more data from
// isLoadingMore: is true whenever we are making request to fetch data
// isReachingEnd: is true when we loaded all of the data, data is empty (empty array)

const { 
    pages, 
    isLoadingMore, 
    isReachingEnd, 
    loadMore } = useGetBlogsPages({ blogs, filter });

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
      { pages }
    </Row>
    <div style={{textAlign: 'center'}}>
      <Button 
        size="lg"
        variant="outline-secondary"
        onClick={loadMore}
        disabled={ isReachingEnd || isLoadingMore }>
        {isLoadingMore ? "..." : isReachingEnd ? "No More Blogs" : "More Blogs" }
      </Button>
    </div>
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