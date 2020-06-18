import React from 'react';
import { Container, Dimmer, Loader, Message } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { useFetching } from "./customHooks";
import { getStaff } from "./redux/actions/staff";
import { getServices } from "./redux/actions/services";
import Header from "./components/Header";
import HomePage from "./components/Homepage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import StaffPage from "./components/StaffPage/StaffPage";
import './App.scss';

function App() {
  const { staff: { staffLoadingState, error: staffError }, services: { servicesLoadingState, error: servicesError } } = useSelector(state => state);

  useFetching(getStaff);
  useFetching(getServices);

  return (
    <Container className="application">
      {(staffLoadingState === "loading" || servicesLoadingState === "loading") &&
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>}
      {(staffLoadingState === "failed" || servicesLoadingState === "failed") &&
        <Message negative>
          <Message.Header>Looks like, something went wrong</Message.Header>
          <p>{staffLoadingState === "failed" && staffError}</p>
          <p>{servicesLoadingState === "failed" && servicesError}</p>
        </Message>}
      {staffLoadingState === "succeed" && servicesLoadingState === "succeed" && <>
        <Header />

        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/staff">
          <StaffPage />
        </Route>


        {/* <Route path="/add">
          <AddHeroPage />
        </Route>

        <Route path="/edit/:id">
          <EditHeroPage />
        </Route>

        <Route path="/detail/:id">
          <HeroDetailPage />
        </Route> */}
      </>}
    </Container>
  );
}

export default App;
