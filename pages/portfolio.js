import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";

const portfolio = withRouter(props => (
    <BaseLayout>
        <h1>Portfolio Page</h1>
        <h2>{props.router.query.title}</h2>
    </BaseLayout>
));


export default portfolio
