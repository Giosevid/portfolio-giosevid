import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Container } from 'reactstrap'
import withAuth from '../components/hoc/withAuth'

const Owner = () =>
  <BaseLayout>
    <BasePage>
      <Container>
        <h1>Owner Page Next.js</h1>
      </Container>
    </BasePage>
  </BaseLayout>;

export default withAuth('siteOwner')(Owner);
