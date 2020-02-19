import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap'

const Cv = () =>
  <BaseLayout>
    <BasePage title="Preview of my CV" className="cv-page">
      <Row>
        <Col md={{size: 8, offset: 2}}>
          <div className="cv-title">
            <a download="Giosevid_cv.pdf" className="btn btn-success" href="/static/Giosevid_EN_CV.pdf">
              Download
            </a>
          </div>
          <iframe style={{width: '100%', height: '800px'}} src="/static/Giosevid_EN_CV.pdf"></iframe>
        </Col>
      </Row>
    </BasePage>
  </BaseLayout>;

export default Cv;
