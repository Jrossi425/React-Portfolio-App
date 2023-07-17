import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardImg, Button } from "reactstrap";

export default function Project(props) {
  const cardStyle = {
    backgroundColor: "#373f47",
    color: "#ffffff",
  };

  const imgStyle = {
    maxHeight: "200px", // Adjust the max height as needed
    maxWidth: "25%", // Add the maxWidth property
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <Card className="text-center" style={cardStyle}>
      <CardHeader>{props.project}</CardHeader>
      <CardBody>
        <CardTitle tag="h3">{props.name}</CardTitle>
        <CardImg src={props.image} alt="project image" style={imgStyle} />
        <Button color="primary" href={props.link}>Check Out Project!</Button>
      </CardBody>
    </Card>
  );
}