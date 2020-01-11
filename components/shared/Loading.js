import BaseLayout from '../../components/layouts/BaseLayout'
import BasePage from '../../components/BasePage'
import { Container } from 'reactstrap'

const Loading = () =>
  <BaseLayout>
    <BasePage>
      <Container>
        <h1>Cargando...</h1>
      </Container>
    </BasePage>
  </BaseLayout>;

export default Loading;
