import BaseLayout from '../components/layouts/BaseLayout'
import Link from "next/link";

const Portfolios = () =>
  <BaseLayout>
      <h1>Portfolios Page</h1>
      <Link as={'/portfolio/1'} href={`/portfolio?title=${'Giosevid Acosta'}`}><a>Portfolio</a></Link>
  </BaseLayout>;

export default Portfolios;
