import React from "react";
import { Card, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

function CategoryCard({ category, services }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header textAlign="center">{category}</Card.Header>
        <List as="ul">
          {services.map((service) => (
            <List.Item key={service._id}>
              <Link to={`/services/edit/${service._id}`}>{service.name}</Link>
            </List.Item>
          ))}
        </List>
      </Card.Content>
      {/* <Card.Content extra>
        <Link to={`/services/add/${category}`}>Add service</Link>
      </Card.Content> */}
    </Card>
  );
}

export default CategoryCard;
