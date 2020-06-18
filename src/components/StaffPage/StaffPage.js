import React from "react";
import { Header, Card } from "semantic-ui-react";
// import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MasterCard from "./MasterCard";

function StaffPage() {
  const staff = useSelector(state => state.staff.items);

  return (
    <main className="staff-page">
      <Header as="h1" textAlign="center" content="Staff" />
      <Card.Group centered>
        {staff.map(master => (
          <MasterCard master={master} key={master.name} />
        ))}
      </Card.Group>
    </main>
  );
}
export default StaffPage;
