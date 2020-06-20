import React from "react";
import { Header } from "semantic-ui-react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Grid } from 'semantic-ui-react'

import { GOOGLE_API_KEY } from "../config";

function ContactsPage(props) {
  return (
    <>
      <Header as="h1" textAlign="center" content="Contacts" />
      <Grid centered>
        <Grid.Column className="google-map" mobile={16} tablet={8} computer={8}>
          <Map
            google={props.google}
            zoom={14}
            initialCenter={{ lat: 40.718192, lng: -73.844819 }}
          >
            <Marker position={{ lat: 40.718192, lng: -73.844819 }} />
          </Map>
        </Grid.Column>

        <Grid.Column className="contacts-page__right-col" mobile={16} tablet={8} computer={8}>
          <p>Phone: <a href="tel:+38097XXXXXXX">+38(097)-XXX-XX-XX</a></p>
          <p>Email: <a href="mailto:beauty.sallon@gmail.com">beauty.sallon@gmail.com</a></p>
          <p>Address: Forest Hills, NY 11375</p>
          <p>Hours: M - F : 10am - 7:30pm</p>
          <p>Sat: 10am - 7:30pm | Sun: 10am - 6:30pm</p>
        </Grid.Column>
      </Grid>
    </>
  );
}
export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(ContactsPage);
