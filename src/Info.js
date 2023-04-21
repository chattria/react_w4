import React from "react";
import "./Info.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Info() {
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
                <li>6ºC</li>
                <li>13ºC</li>
                <li>3km/h</li>
                <li>50%</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
