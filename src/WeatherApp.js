import "./WeatherApp.css";
import axios from "axios";
import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import FormatDate from "./FormatDate";
import Current from "./Current";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      country: response.data.sys.country,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      low: Math.floor(response.data.main.temp_min),
      high: Math.round(response.data.main.temp_max),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,

      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    let apiKey = "0a521eaf234a3a56f45252fac3c737";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}ad&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <Container fluid className="Weather">
          <Row>
            <Col sm className="main-col">
              <Card>
                <Card.Header>Location</Card.Header>
                <Card.Body>
                  <p id="country">{weatherData.country}</p>
                  <p id="city">{weatherData.city}</p>
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
                            <span id="low">{weatherData.low}</span>
                            <span className="unit"> ºc</span>
                          </li>
                          <li>
                            <span id="high">{weatherData.high}</span>
                            <span className="unit"> ºc</span>
                          </li>
                          <li>{weatherData.wind} km/h</li>
                          <li>{weatherData.humidity} %</li>
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
                <img src={weatherData.icon} alt={weatherData.description} />
                <p className="description">{weatherData.description}</p>
                <p id="temp-num">
                  <span id="temp">{weatherData.temperature}</span>
                  <span id="temp-unit" className="unit">
                    {" "}
                    ºc
                  </span>
                </p>
              </Card>

              <Form className="search-city" onSubmit={handleSubmit}>
                <InputGroup>
                  <Button type="submit" className="search-btn">
                    search
                  </Button>
                  <Form.Control
                    type="search"
                    placeholder="  Type a city"
                    id="city-input"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </InputGroup>
              </Form>
            </Col>
            <Col sm className="main-col">
              <Card>
                <Card.Header className="date">
                  {" "}
                  <FormatDate />{" "}
                </Card.Header>
                <Card.Body>
                  <Current date={weatherData.date} />
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
  } else {
    search();
    return <div>Loading . . .</div>;
  }
}
