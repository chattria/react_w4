import "./WeatherApp.css";
import React, { useState } from "react";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loading, setLoading] = useState(false);

  function showWeather(response) {
    console.log(response.data);
    setLoading(true);
    setWeather({
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      country: response.data.sys.country,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      low: Math.floor(response.data.main.temp_min),
      high: Math.round(response.data.main.temp_max),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0a521eaf234a3a56f45252fac3c737";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}ad&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <Form onSubmit={handleSubmit} className="search-city">
      <InputGroup>
        <Button type="submit" className="search-btn">
          search
        </Button>
        <Form.Control
          type="search"
          placeholder="  Type a city"
          id="city-input"
          onChange={updateCity}
        />
      </InputGroup>
    </Form>
  );

  if (loading) {
    return (
      <Container fluid className="Weather">
        <Row xs={3}>
          <Col sm className="main-col">
            <Card>
              <Card.Header>Location</Card.Header>
              <Card.Body>
                <p id="country">{weather.country}</p>
                <p id="city">{weather.city}</p>
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
                          <span id="low">{weather.low}</span>
                          <span class="unit"> ºc</span>
                        </li>
                        <li>
                          <span id="high">{weather.high}</span>
                          <span class="unit"> ºc</span>
                        </li>
                        <li>
                          <span id="wind">{weather.wind}</span>km/h
                        </li>
                        <li>
                          <span id="humidity">{weather.humidity}</span>%
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
              <img src={weather.icon} alt={weather.description} />
              <p class="description">{weather.description}</p>
              <p id="temp-num">
                <span id="temp">{weather.temperature}</span>
                <span id="temp-unit" class="unit">
                  {" "}
                  ºc
                </span>
              </p>
            </Card>
            {form}
          </Col>
          <Col sm className="main-col">
            <Card>
              <Card.Header className="date">{weather.today}</Card.Header>
              <Card.Body>
                <p id="today">{weather.date}</p>
                <p id="time">{weather.time}</p>
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
    );
  } else {
    return form;
  }
}
