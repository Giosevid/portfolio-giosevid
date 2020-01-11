import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import BasePage from '../components/BasePage';
import { Container } from 'reactstrap'

const portfolio = withRouter(props => (
    <BaseLayout>
      <BasePage>
        <Container>
          <h1>Portfolio Page</h1>
          <h2>{props.router.query.title}</h2>
        </Container>
      </BasePage>
    </BaseLayout>
));


export default portfolio
