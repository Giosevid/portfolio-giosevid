import React, { useEffect, useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import {Col, Row, Card, CardHeader, CardBody, CardTitle, CardText, Container } from 'reactstrap'
import BasePage from '../components/BasePage'
import { getPortfolios } from "../actions";

const Portfolios = () => {

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
    getData()
  }, []);


  const renderPortfolios = portfolios =>
    portfolios.map((portfolio, index) =>
        <Col md="4"  key={index}>
            <span>
              <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                <CardBody>
                  <p className="portfolio-card-city">{portfolio.location} </p>
                  <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                  <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                  <div className="readMore"> </div>
                </CardBody>
              </Card>
            </span>
        </Col>
    );

  return (
    <BaseLayout>
      <BasePage className="portfolio-page" title='Portfolios'>
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
