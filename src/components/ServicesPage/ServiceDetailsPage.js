import React, { useState, useEffect } from "react";
import { Header, Image, Button } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { API_HOST } from "../../config";

function ServiceDetailsPage() {
  const { id } = useParams();
  const services = useSelector(state => state.services);
  const [service, setService] = useState({});

  useEffect(() => {
    if (services.servicesLoadingState === "succeed") {
      setService(services.items.find(({ _id }) => _id === id));
    }
  }, [services, id]);

  return (
    <main className="service-details-page">
      <Header as="h1" textAlign="center" content={service.name} />
      <Header as="h2" color="pink" textAlign="center" content={service.category} />
      <Image src={`${API_HOST}/images/services/${service.pictureURL || "image.png"}`}
        centered
        size='large'
        rounded
      />
      <p className="align-center">{service.description}</p>
      <div className="align-center">
        <Button color="pink" content="Book" />
      </div>
    </main>
  );
}
export default ServiceDetailsPage;
