import React from "react";
import "./Location.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Location() {
  return (
    <Card>
      <Card.Header>Location</Card.Header>
      <Card.Body>
        <p>Sweden</p>
        <p>Stockholm</p>
      </Card.Body>
    </Card>
  );
}
