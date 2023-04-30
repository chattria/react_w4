import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Forcast() {
  return (
    <Card>
      <Card.Header id="card-forcast">Forecast</Card.Header>
      <Card.Body className="text-center">
        <Container>
          <Row>
            <Col>
              <ul>
                <li className="li-week" id="tomorrow"></li>
                <li className="li-week" id="day-after-tomorrow"></li>
                <li className="li-week" id="third-day"></li>
                <li className="li-week" id="fourth-day"></li>
                <li className="li-week" id="fifth-day"></li>
                <li className="li-week" id="sixth-day"></li>
              </ul>
            </Col>
            <Col>
              <li>
                <span className="forecast" id="tom-degree"></span>
                <span className="unit"> ºc</span>
              </li>
              <li>
                <span className="forecast" id="day-degree"></span>
                <span className="unit"> ºc</span>
              </li>
              <li>
                <span className="forecast" id="thi-degree"></span>
                <span className="unit"> ºc</span>
              </li>
              <li>
                <span className="forecast" id="fou-degree"></span>
                <span className="unit"> ºc</span>
              </li>
              <li>
                <span className="forecast" id="fif-degree"></span>
                <span className="unit"> ºc</span>
              </li>
              <li>
                <span className="forecast" id="six-degree"></span>
                <span className="unit"> ºc</span>
              </li>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
