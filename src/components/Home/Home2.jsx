import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a programmer with a strong passion for coding and a
              foundation in
              <b className="blue"> JavaScript</b>
              . My journey into the world of
              programming has been driven by curiosity and the desire to create
              impactful web applications and solutions.
            </p>
            <p className="home-about-body">
              I am particularly interested in:
              <ul>
                <li>
                  Building dynamic web products using{" "}
                  <b className="blue">JavaScript</b>
                </li>
                
                <li>
                  Learning modern frameworks like{" "}
                  <b className="blue">React.js</b> and{" "}
                  <b className="blue">Vite.js</b>
                </li>
              </ul>
            </p>
            <p className="home-about-body">
              Currently, I'm focusing on developing my skills by working on
              personal projects and completing online courses. I'm excited to
              connect with like-minded individuals and contribute to interesting
              projects as I embark on this coding journey!
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://github.com/RaffyLeong"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ka-fong-leong-77a0a4245/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="mailto:raffy36249@example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
