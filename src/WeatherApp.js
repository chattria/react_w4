import "./WeatherApp.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherApp() {
  return (
    <Container fluid>
      <Row xs={3}>
        <Col sm className="main-col">
          <Card>
            <Card.Header>Location</Card.Header>
            <Card.Body>
              <p>Sweden</p>
              <p>Stockholm</p>
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
                        <span class="unit"> ºc</span>
                      </li>
                      <li>
                        <span id="high"></span>
                        <span class="unit"> ºc</span>
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
          <div class="unit-button">
            <button class="change-button" id="current-btn">
              current
            </button>
          </div>
        </Col>
        <Col sm className="main-col">
          <Card className="temp-card">
            <p class="description"></p>
            <p id="temp-num">
              <span id="temp"></span>
              <span id="temp-unit" class="unit">
                {" "}
                ºc
              </span>
            </p>
          </Card>
        </Col>
        <Col sm className="main-col">
          <Card>
            <Card.Header className="date">2023-04-22</Card.Header>
            <Card.Body>
              <p id="today">Friday</p>
              <p id="time">22:41</p>
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
                      <span className="forecast" id="tom-degree">
                        0
                      </span>
                      <span className="unit"> ºc</span>
                    </li>
                    <li>
                      <span className="forecast" id="day-degree">
                        0
                      </span>
                      <span className="unit"> ºc</span>
                    </li>
                    <li>
                      <span className="forecast" id="thi-degree">
                        0
                      </span>
                      <span className="unit"> ºc</span>
                    </li>
                    <li>
                      <span className="forecast" id="fou-degree">
                        0
                      </span>
                      <span className="unit"> ºc</span>
                    </li>
                    <li>
                      <span className="forecast" id="fif-degree">
                        0
                      </span>
                      <span className="unit"> ºc</span>
                    </li>
                    <li>
                      <span className="forecast" id="six-degree">
                        0
                      </span>
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
  );
}
