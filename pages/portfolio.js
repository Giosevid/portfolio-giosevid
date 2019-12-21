import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import BasePage from '../components/BasePage';

const portfolio = withRouter(props => (
    <BaseLayout>
      <BasePage>
        <h1>Portfolio Page</h1>
        <h2>{props.router.query.title}</h2>
      </BasePage>
    </BaseLayout>
));


export default portfolio
