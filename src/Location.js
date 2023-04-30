import React from "react";
import Card from "react-bootstrap/Card";

export default function Location({ country, city }) {
  return (
    <Card>
      <Card.Header>Location</Card.Header>
      <Card.Body>
        <p>{country}</p>
        <p>{city}</p>
      </Card.Body>
    </Card>
  );
}
