import React, { useEffect, useState, Fragment } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { Col, Row, Container, Button } from 'reactstrap'
import BasePage from '../components/BasePage'
import {deletePortfolio, getPortfolios} from "../actions"
import { Router } from '../routes'
import { useAuth0 } from '../react-auth0-spa'
import PortfolioCard from "../components/portfolios/PortfolioCard";

const Portfolios = () => {
  const { isAuthenticated, isSiteOwner } = useAuth0();
  const [portfolio, setPortfolio] = useState([]);

  const getData =  async () => {
    let portfolios;
    try {
      portfolios = await getPortfolios();
      setPortfolio(portfolios);
    } catch (error) {
      console.log(error)
    }

  };

  useEffect(() => {
    getData();
  }, []);

  const displayDeleteWarning = (portfolioId, event) => {
    event.stopPropagation();
    const isConfirm = confirm('Are you sure want to delete this portfolio? ');

    if (isConfirm) {
      deletePortfolioNew(portfolioId)
    }

  };

  const deletePortfolioNew = (portfolioId) => {
    deletePortfolio(portfolioId)
      .then(() => {
        location.reload();
      })
      .catch(err => console.log(err))
  };

  const navigateToEdit = (portfolioId, event) => {
    event.stopPropagation();
    Router.pushRoute(`/portfolios/${portfolioId}/edit` )
  };


  const renderPortfolios = portfolios =>
    portfolios.map((portfolio, index) =>
      <Col md="4"  key={index}>
        <PortfolioCard portfolio={portfolio}>
          { isAuthenticated && isSiteOwner &&
            <Fragment>
              <Button  onClick={(event) => navigateToEdit(portfolio._id, event) } color="warning">Edit</Button>{' '}
              <Button  onClick={(event) => displayDeleteWarning(portfolio._id, event)} color="danger">Delete</Button>
            </Fragment>
          }
        </PortfolioCard>
      </Col>
    );

  return (
    <BaseLayout>
      <BasePage className="portfolio-page" title='Portfolios'>
        {
          isAuthenticated && isSiteOwner && <Button onClick={() => Router.pushRoute('/portfolioNew')} color='success' className='create-port-btn'>Create portfolio</Button>
        }
        <Container>
          <Row>
            { renderPortfolios(portfolio) }
          </Row>
        </Container>
      </BasePage>
    </BaseLayout>
  )
};

export default Portfolios;
