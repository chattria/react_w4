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

  let dates = new Date();
  let shortDays = ["SUN", "MON", "TUS", "WED", "THU", "FRI", "SAT"];

  let tomorrow = new Date(dates.getTime() + 24 * 60 * 60 * 1000);
  let dayAfterTomorrow = new Date(dates.getTime() + 2 * 24 * 60 * 60 * 1000);
  let thirdDay = new Date(dates.getTime() + 3 * 24 * 60 * 60 * 1000);
  let fourthDay = new Date(dates.getTime() + 4 * 24 * 60 * 60 * 1000);
  let fifthDay = new Date(dates.getTime() + 5 * 24 * 60 * 60 * 1000);
  let sixthDay = new Date(dates.getTime() + 6 * 24 * 60 * 60 * 1000);

  document.querySelector("#tomorrow").innerHTML = shortDays[tomorrow.getDay()];
  document.querySelector("#day-after-tomorrow").innerHTML =
    shortDays[dayAfterTomorrow.getDay()];
  document.querySelector("#third-day").innerHTML = shortDays[thirdDay.getDay()];
  document.querySelector("#fourth-day").innerHTML =
    shortDays[fourthDay.getDay()];
  document.querySelector("#fifth-day").innerHTML = shortDays[fifthDay.getDay()];
  document.querySelector("#sixth-day").innerHTML = shortDays[sixthDay.getDay()];

  function formatDate(datestamp) {
    let dates = new Date(datestamp);
    let fullYear = dates.getFullYear();
    let months = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
    let month = months[dates.getMonth()];
    if (month < 10) {
      month = `0${month}`;
    }
    let date = dates.getDate();
    if (date < 10) {
      date = `0${date}`;
    }
    return `${fullYear}-${month}-${date}`;
  }

  function formatDay(daystamp) {
    let dates = new Date(daystamp);
    let days = [
      "Sunday",
      "Monday",
      "Tuseday",
      "Wednesday",
      "Thurseday",
      "Friday",
      "Saturday",
    ];
    let day = days[dates.getDay()];
    return day;
  }

  function formatTime(timestamp) {
    let dates = new Date(timestamp);
    let hours = dates.getHours();
    let minutes = dates.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let seconds = dates.getSeconds();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  }

  function formatDayForecast(timestamp) {}

  function showWeather(response) {
    console.log(response.data);
    setLoading(true);
    setWeather({
      country: response.data.sys.country,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      low: Math.floor(response.data.main.temp_min),
      high: Math.round(response.data.main.temp_max),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      today: formatDay(response.data.dt * 1000),
      date: formatDay(response.data.dt * 1000),
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
  } else {
    return form;
  }
}
