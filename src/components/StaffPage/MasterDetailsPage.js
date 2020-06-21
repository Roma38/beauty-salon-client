import React, { useState, useEffect } from "react";
import { Header, Image, Button } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { API_HOST } from "../../config";

function MasterDetailsPage() {
  const { id } = useParams();
  const staff = useSelector(state => state.staff);
  const [master, setMaster] = useState({});

  useEffect(() => {
    if (staff.staffLoadingState === "succeed") {
      setMaster(staff.items.find(({ _id }) => _id === id));
    }
  }, [staff, id]);

  return (
    <main className="master-details-page">
      <Header as="h1" textAlign="center" content={master.name} />
      <Image src={`${API_HOST}/images/staff/${master.pictureURL || "image.png"}`}
        centered
        size='large'
        rounded
      />
      <p className="align-center">{master.description}</p>
      <div className="align-center">
        <Button color="pink" content="Book" />
      </div>
    </main>
  );
}
export default MasterDetailsPage;
