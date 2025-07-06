import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            Hi Everyone, I am <span className="purple">Brian Bartley </span>
            from <span className="purple"> Brampton, Canada.</span>
            <br />
            <br />
            I'm a passionate developer with an interest in both front-end and back-end technologies. 
            I love creating applications and engaging user experiences.
            <br />
            <br />
           Throughout my journey, I've developed a wide range of applications, including e-commerce websites,
            blogs, landing pages, and email campaigns. I also have hands-on experience building Shopify-based 
            e-commerce stores, designing landing pages for email marketing, and crafting targeted email campaigns
             to boost engagement and drive sales. I'm excited to bring this blend of technical expertise and 
             creative energy to a dynamic, forward-thinking team.
            <br />

          </p>
          

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
