import React, { useState } from "react";
import "./Location.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Location() {
  return (
    <Card>
      <Card.Title>Location</Card.Title>
      <Card.Body>
        <p>Sweden</p>
        <p>Stockholm</p>
      </Card.Body>
    </Card>
  );
}
