import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import { Row, Col } from 'reactstrap'


const About = () =>
  <BaseLayout>
    <BasePage className='about-page'>
      <Row className='mt-5'>
        <Col md='6'>
          <div className="left-side">
            <h1 className='title fadein'>Hello, welcome</h1>
            <h4 className="subtitle fadein">To About Page</h4>
            <p className="subsubTiltle fadein">Feel free to read</p>
          </div>
        </Col>
        <Col md='6'>
          <div className="fadein">
            <p>My name is Giosevid Acosta and I am an experiemnced software developer</p>
            <p>I have a Master in bla bls bla bvla bvlas</p>
            <p>
              My carrer, i have acquired adsvanced bla bla bla bla vbls a vla lsakjdflsjkdflksnkb sñjkhf slkdjhf lskjdh sdlkfjhs dlfjkhs dlfkjhs dfkjshd flskjhf sldkjfhsd kjh
            </p>
          </div>
        </Col>
      </Row>
    </BasePage>
  </BaseLayout>;

export default About;
