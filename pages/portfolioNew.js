import Rect, {useState} from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import withAuth from '../components/hoc/withAuth'
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm"
import { Row, Col } from 'reactstrap'
import { createPortfolio } from "../actions"
import { Router } from '../routes'
import moment from "moment"

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: moment().toDate(),
  endDate: moment().toDate()
};

const PortfolioNew = () => {

  const [error, setError] = useState('');

  const savePortfolio = (portfolioData, { setSubmitting }) => {
    setSubmitting(true);
    createPortfolio(portfolioData)
      .then(portfolio  => {
        Router.pushRoute('/portfolios');
        setError(undefined)
      })
      .catch(err =>{
        const error = err.message || 'Server error';
        setError(error)
      })
      .finally(() => {
        setSubmitting(false);
    })
  };

  return (
    <BaseLayout>
      <BasePage className='portfolio-create-page' title='Create new portfolio'>
        <Row>
          <Col md="6">
            <PortfolioCreateForm initialValues={INITIAL_VALUES} error={error} onSubmit={savePortfolio} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
};

export default withAuth('siteOwner')(PortfolioNew);
