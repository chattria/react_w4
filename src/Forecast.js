import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import ForecastTemp from "./ForecastTemp";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <Card>
        <Card.Header id="card-forcast">Forecast</Card.Header>
        <Card.Body className="text-center">
          <Container>
            <Row>
              <Col>
                <ul>
                  <li className="li-week">
                    <ForecastDay data={forecast[1]} />
                  </li>
                  <li className="li-week">
                    <ForecastDay data={forecast[2]} />
                  </li>
                  <li className="li-week">
                    <ForecastDay data={forecast[3]} />
                  </li>
                  <li className="li-week">
                    <ForecastDay data={forecast[4]} />
                  </li>
                  <li className="li-week">
                    <ForecastDay data={forecast[5]} />
                  </li>
                  <li className="li-week">
                    <ForecastDay data={forecast[6]} />
                  </li>
                </ul>
              </Col>
              <Col>
                <li>
                  <span className="forecast">
                    <ForecastTemp data={forecast[1]} />
                  </span>
                </li>
                <li>
                  <span className="forecast">
                    <ForecastTemp data={forecast[2]} />
                  </span>
                </li>
                <li>
                  <span className="forecast">
                    <ForecastTemp data={forecast[3]} />
                  </span>
                </li>
                <li>
                  <span className="forecast">
                    <ForecastTemp data={forecast[4]} />
                  </span>
                </li>
                <li>
                  <span className="forecast">
                    <ForecastTemp data={forecast[5]} />
                  </span>
                </li>
                <li>
                  <span className="forecast">
                    <ForecastTemp data={forecast[6]} />
                  </span>
                </li>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  } else {
    let apiKey = "c8a77112b2faf6684bb4b21a0aa778ae";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
