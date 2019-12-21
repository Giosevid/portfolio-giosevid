import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Container } from 'reactstrap';

const About = () =>
  <BaseLayout>
    <BasePage className='about-page'>
      <Container>
        <h1>About Page Next.js</h1>
      </Container>
    </BasePage>
  </BaseLayout>;

export default About;
