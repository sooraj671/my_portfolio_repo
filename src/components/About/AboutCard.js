import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Sooraj Kumar </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br /> I am a fresh computer science graduate from <span className="purple">Sukkur IBA University.</span>
            <br /> <br /> 
            Additionally, I am currently employed as a machine learning engineer at Perfext Solutions.
            <br />
            <br />
            My all time favorite quote is <br />  <span className="purple">"Think twice, code once!"</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new techs.
            </li>
            <li className="about-activity">
              <ImPointRight /> Staying upto date with latest technology news.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Write code and build Solutions"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
