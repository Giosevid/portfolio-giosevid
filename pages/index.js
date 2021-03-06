import React, { useEffect, useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { Container, Row, Col } from 'reactstrap'
import Typed from 'react-typed'
import { useAuth0 } from '../react-auth0-spa'

const Index = () => {
    const roles = ['React.js', 'React Native', 'Angular.js', 'Angular',  'JavaScript'];
    const { isAuthenticated, user } = useAuth0();
    const [isFlipping, setIsFlipping] = useState(true);
    let intervalAssigned;

    useEffect(() => {
        animateCard();
        return () => {
            clearInterval(intervalAssigned)
        };
    }, [isFlipping]);


    const animateCard = () => {
        intervalAssigned = setInterval(() => {
           setIsFlipping(!isFlipping)
       }, 10000)
    };

    return (
    <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} headerType='index' title="Giosevid Acosta - Portfolio">
        <div className="main-section">
            <div className="background-image">
                <img src="/static/images/background-index.png"/>
            </div>
            <Container>
                <Row md='2'>
                    <Col>
                        <div className="hero-section">
                            <div className={`flipper ${isFlipping && 'isFlipping'}`}>
                                <div className="front">
                                    <div className="hero-section-content">
                                        <h2> Front End Web and Mobile Developer </h2>
                                        <div className="hero-section-content-intro">
                                            Have a look at my portfolio and job history.
                                        </div>
                                    </div>
                                    <img className="image" src="/static/images/section-1.png"/>
                                    <div className="shadow-custom">
                                        <div className="shadow-inner"/>
                                    </div>
                                </div>
                                <div className="back">
                                    <div className="hero-section-content">
                                        <h2> Get Your Projects Done </h2>
                                        <div className="hero-section-content-intro">
                                            Professional and quot quality service in web development.
                                        </div>
                                    </div>
                                    <img className="image" src="/static/images/section-2.png"/>
                                    <div className="shadow-custom shadow-custom-2">
                                        <div className="shadow-inner"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="hero-welcome-wrapper">
                        <div className="hero-welcome-text">
                            <h1>
                                {isAuthenticated && <span><b> { user && user.name } </b></span>}
                                Welcome to the portfolio website of Giosevid Acosta.
                                Get informed, collaborate and discover projects I was working on through the years!
                            </h1>
                        </div>
                        <Typed
                            loop
                            typeSpeed={66}
                            backSpeed={66}
                            strings={roles}
                            backDelay={1000}
                            loopCount={0}
                            showCursor
                            className="self-type"
                            cursorChar="|"
                        />
                        <div className="hero-welcome-bio">
                            <h1>
                                Let's take a look on my work.
                            </h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </BaseLayout>
)};

export default Index;
