import React, { useEffect } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./GetAllActivities.css";

import { getActivities } from "../api";

const ShowActivityCards = (props) => {
  const { activities, setActivities } = props;

    useEffect(() => {
      getActivities()
        .then((activities) => {
          setActivities(activities);
        })
        .catch(console.error);
    });

    const renderCard = (activity, index) => {
      return (
        <div className="card-container">
      <Card className="card">
        <CardBody key={index}>
          <CardTitle tag="h5">{activity.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{activity.description}</CardText>
          <Button>Add to Routine</Button>
        </CardBody>
      </Card>
      </div>
      );
    };
    const mappedActivities = activities.map(renderCard);

    return <div className="App">
      {mappedActivities}</div>;
  };

export default ShowActivityCards;
