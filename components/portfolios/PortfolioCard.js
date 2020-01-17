import React, { useState } from 'react'
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap"
import PortfolioCardDetail from "./PortfolioCardDetail";


const PortfolioCard = ({ portfolio, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <span onClick={handleToggle}>
      <PortfolioCardDetail toggle={handleToggle} isOpen={isOpen} portfolio={portfolio}/>
      <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
        <CardBody>
          <p className="portfolio-card-city">{portfolio.location} </p>
          <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
          <CardText className="portfolio-card-text">{portfolio.description}</CardText>
          <div className="readMore">
            { children }
          </div>
        </CardBody>
      </Card>
    </span>
  )
};

export default PortfolioCard
