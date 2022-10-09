import { Row, Col} from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import { getAllBlogs } from 'lib/api';

export default function Home({ blogs }) {

return(
  <PageLayout>
    <AuthorIntro />
    <hr/>
    <Row className="mb-5">
      {/* <Col md="10">
        <CardListItem />
      </Col> */}

    {blogs.map(blog => (  
      <Col md="4" key={blog.slug}>
        <CardItem 
        title={blog.title}
        subtitle={blog.subtitle}
        slug={blog.slug} />
      </Col>))}
    
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
      blogs 
    }
  }
}