import "./WeatherApp.css";
import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Container fluid className="Weather">
        <Row>
          <Col sm className="main-col">
            <Card>
              <Card.Header>Location</Card.Header>
              <Card.Body>
                <p id="country"></p>
                <p id="city"></p>
              </Card.Body>
            </Card>
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
                          <span id="low"></span>
                          <span className="unit"> ºc</span>
                        </li>
                        <li>
                          <span id="high"></span>
                          <span className="unit"> ºc</span>
                        </li>
                        <li>
                          <span id="wind"></span>km/h
                        </li>
                        <li>
                          <span id="humidity"></span>%
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
            <div className="unit-button">
              <Button className="change-button" id="current-btn">
                current
              </Button>
            </div>
          </Col>
          <Col sm className="main-col">
            <Card className="temp-card">
              <p className="description"></p>
              <p id="temp-num">
                <span id="temp"></span>
                <span id="temp-unit" className="unit">
                  {" "}
                  ºc
                </span>
              </p>
            </Card>

            <Form className="search-city">
              <InputGroup>
                <Button type="submit" className="search-btn">
                  search
                </Button>
                <Form.Control
                  type="search"
                  placeholder="  Type a city"
                  id="city-input"
                  autoFocus="on"
                />
              </InputGroup>
            </Form>
          </Col>
          <Col sm className="main-col">
            <Card>
              <Card.Header className="date"></Card.Header>
              <Card.Body>
                <p id="today"></p>
                <p id="time"></p>
              </Card.Body>
            </Card>

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
          </Col>
        </Row>
      </Container>
    </div>
  );
}
