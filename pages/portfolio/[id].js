import BaseLayout from '../../components/layouts/BaseLayout'
import { withRouter } from 'next/router'
import BasePage from '../../components/BasePage'
import { Container } from 'reactstrap'
import axios from 'axios'

const Portfolio = withRouter(props => {
  const { posts: { title, body, id } } = props;
  return (
    <BaseLayout>
      <BasePage>
        <Container>
          <h1>{ title }</h1>
          <h2>{ body }</h2>
          <p>{ id }</p>
        </Container>
      </BasePage>
    </BaseLayout>
  )
});

Portfolio.getInitialProps = async (context) => {
  let posts;
  const postId = context.query.id;
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    posts = response.data;
  } catch (error) {
    console.log(error)
  }

  return {
    posts
  };
};


export default Portfolio
