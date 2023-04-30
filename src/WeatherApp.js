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

import Location from "./Location";
import Info from "./Info";
import CurrentTemp from "./CurrentTemp";
import FormatDate from "./FormatDate";
import Current from "./Current";
import Forcast from "./Forcast";
import TempUnit from "./TempUnit";

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
              <Location country={weatherData.country} city={weatherData.city} />
              <Info
                low={weatherData.low}
                high={weatherData.high}
                wind={weatherData.wind}
                humidity={weatherData.humidity}
              />
              <TempUnit celsius={weatherData.temperature} />
            </Col>
            <Col sm className="main-col">
              <CurrentTemp
                icon={weatherData.icon}
                description={weatherData.description}
                temperature={weatherData.temperature}
              />
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
                  <FormatDate />
                </Card.Header>
                <Card.Body>
                  <Current date={weatherData.date} />
                </Card.Body>
              </Card>
              <Forcast />
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
