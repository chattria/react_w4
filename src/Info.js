import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Info({ low, high, wind, humidity }) {
  return (
    <Card>
      <Card.Header>Info</Card.Header>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <ul>
                <li>Low</li>
                <li>High</li>
                <li>Wind</li>
                <li>Humidity</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <span id="low">{low}</span>
                  <span className="unit"> ºc</span>
                </li>
                <li>
                  <span id="high">{high}</span>
                  <span className="unit"> ºc</span>
                </li>
                <li>{wind} km/h</li>
                <li>{humidity} %</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
