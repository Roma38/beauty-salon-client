import React from "react";
import { Card, Image } from "semantic-ui-react";
// import { Link } from "react-router-dom";

import { API_HOST } from "../../config";

function MastersCards({
  master: { _id, name, description, services, pictureURL }
}) {

  return (
    <Card>
      <Image
        src={`${API_HOST}/images/staff/${pictureURL || "image.png"}`}
        wrapped
        ui={false}
      />
      <Card.Content textAlign="center">
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default MastersCards;
