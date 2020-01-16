import Rect, { useState, useEffect } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'
import withAuth from '../components/hoc/withAuth'
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm"
import { Row, Col } from 'reactstrap'
import {getPortfolioById, updatePortfolio} from "../actions"
import { Router } from '../routes'
import { withRouter } from 'next/router'
import axios from "axios";

const PortfolioEdit = withRouter( ({ router: { query } }) => {
  const [portfolioData, setPortfolioData] = useState({});
  const [error, setError] = useState('');
  let portfolio;

  const getInitialProps = async () => {

    try {
      portfolio = await getPortfolioById(query.id);
      setPortfolioData(portfolio)
    } catch (e) {
      setError(e)
    }

    return { portfolio }
  };

  const updatePortfolios = (portfolioData, { setSubmitting }) => {
    setSubmitting(true);
    console.log('entro')
    updatePortfolio(portfolioData)
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

  useEffect(() => {
    getInitialProps()
  }, []);

  return (
    <BaseLayout>
      <BasePage className='portfolio-create-page' title='Upadte portfolio'>
        <Row>
          <Col md="6">
            <PortfolioCreateForm initialValues={portfolioData} error={error} onSubmit={updatePortfolios} />
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )

});

export default withAuth('siteOwner')(PortfolioEdit);
