import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            Hi Everyone, I am <span className="purple">Brian Bartley (Raffy) </span>
            from <span className="purple"> Brampton, Canada.</span>
            <br />
            <br />
            I’m a passionate developer with a keen interest in both front-end and back-end technologies. 
            I love creating engaging user experiences and building seamless applications.
            <br />
            <br />
            Throughout my learning journey, I’ve developed a social app, an e-commerce platform, and a simple chat application. 
            These projects allowed me to explore various technologies and design principles, and I’m excited to bring my skills and enthusiasm to a dynamic team.
            <br />

          </p>
          

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
