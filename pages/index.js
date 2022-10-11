import { useEffect, useState } from "react";
import { Row, Col} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from 'lib/api';
import { useGetBlogsPages } from "actions/pagination"


export default function Home({blogs}) {
  console.log(blogs);
  const [filter, setFilter] = useState({
    view: {
      list: 0 
    }
  })

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({ blogs, filter });
console.log(blogs)
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