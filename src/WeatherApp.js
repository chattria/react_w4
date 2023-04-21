import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import Location from "./Location";

export default function WeatherApp() {
  return (
    <Container>
      <Row xs={3}>
        <Col sm>
          <Location />
        </Col>
        <Col sm>col 2</Col>
        <Col sm>col 3</Col>
      </Row>
    </Container>
  );
}
