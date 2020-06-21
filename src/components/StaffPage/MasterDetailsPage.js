import React, { useState, useEffect } from "react";
import { Header, Image, Button, Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { API_HOST } from "../../config";

function MasterDetailsPage() {
  const { id } = useParams();
  const { staff, services } = useSelector(state => state);
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
      
      <Segment.Group compact horizontal>
        {master.services && master.services.map(id => {
          const service = services.items.find(({ _id }) => _id === id);
          return service && <Segment textAlign='center' key={id}>
            <Image src={`${API_HOST}/images/services/${service.pictureURL || "image.png"}`}
              centered
              size='small'
              rounded
            />
            <span>{service.name}</span>
          </Segment>
        })}
      </Segment.Group>

      <div className="align-center">
        <Button color="pink" content="Book" />
      </div>
    </main>
  );
}
export default MasterDetailsPage;
