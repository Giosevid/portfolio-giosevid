import BaseLayout from '../components/layouts/BaseLayout'
import Link from "next/link"
import BasePage from '../components/BasePage'
import { Container } from "reactstrap"

const Portfolios = () =>
  <BaseLayout>
    <BasePage>
      <Container>
        <h1>Portfolios Page</h1>
        <Link as={'/portfolio/1'} href={`/portfolio?title=${'Giosevid Acosta'}`}><a>Portfolio</a></Link>
      </Container>
    </BasePage>
  </BaseLayout>;

export default Portfolios;
