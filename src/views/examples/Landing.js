/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/saveMe.png";
import promo2 from "assets/img/theme/SaveMe1.png";

import cardImg from "assets/img/theme/Moha.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Software Developer Inprogress {" "}
                        <span>Learning Codings</span>
                      </h1>
                      <p className="lead text-white">
                        I am learning codings and creating projects using HTML,CSS and Javascript and I
                        want to develop my skills and working in different programming languages to be
                        professional in my career.
                      </p>
                      {/* <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button>
                      </div> */}
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="fa fa-terminal" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            CODE 201 PROJECT
                          </h6>
                          <p className="description mt-3">
                            SaveMe is a blood donation platform that encourages people to donate and request blood
                            anonymously.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Mission
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Vision
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              AboutUs
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://pro-fellows.github.io/SaveMe/"
                            target="_blank"
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="fa fa-file-code-o" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            CODE 301 PROJECT
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Mission
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              AboutUs
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-code" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            CODE 401 PROJECT
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Mission
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Vision
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              AboutUs
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <Row>
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={promo1}
                    />
                  </Row>
                  <Row>
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={promo2}
                    />
                  </Row>
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle mb-5">
                      <i className="fa fa-heart-o" />
                    </div>
                    <h3>SaveMe Project</h3>
                    <p>
                      blood donation is not a culture in our tribal society , Jordan doesn't have the culture for anonymous blood donations, we are generous, helpful but probably helping those who we know, neighbors, friends of friends, family members, we want this culture to become a norm. Jordan is and has been hosting a lot of refugees along the years, our society is getting mixed , people can be strangers in the same building or neighborhood , place also in mind the medical tourism in jordan, and the great medical sector that hospitalize a lot of patients and especially cancer patients who are number one blood donation recipients of blood transfusion in every country. We need this anonymous blood donations that can help save lives. Our main goal to our website is to advocate for this culture, promote for a better society, through the big picture to pass on any type of kindness.
                    </p>
                
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                    {/* <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote> */}
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="fa fa-user" />
                    </div>
                    <h3>My Background</h3>
                    <p className="lead">
                          My name is Mohammad AL-Khaleel I graduated from University of Jordan Since 2011
                          as Mechatronics Engineer, I had long experience in my field, I am following my
                          passion and I decided to turn my career path into a software development and
                          I started working as Software Developer after Intensive training for six months
                          about coding and programming with Abdul Aziz Al Ghurair School of Advanced Computing (ASAC)
                    </p>
                  
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
