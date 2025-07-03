import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/developer2.svg";
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
              foundation in <b className="blue">JavaScript</b>. My journey into
              the world of programming has been driven by curiosity and the
              desire to create impactful web applications and solutions.
            </p>

            <div className="home-about-body">
              <p>I am particularly interested in:</p>
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
            </div>

            <p className="home-about-body">
              Currently, I'm focusing on developing my skills by working on
              personal projects and completing online courses. I'm excited to
              connect with like-minded individuals and contribute to interesting
              projects as I embark on this coding journey!
            </p>
          </Col>

              <Col md={4} style={{ paddingTop: 200, paddingLeft: "70px" }}>
                        <img
                          src={homeLogo}
                          alt="home pic"
                          className="img-fluid"
                          style={{ maxHeight: "450px", paddingTop: "1.2em" }}
                        />
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
                  href="https://github.com/Brian7650"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brian-bartley-1bb4ab267/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:bbartley719@gmail.com"
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
