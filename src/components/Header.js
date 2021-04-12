import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.png";

function App() {
  return (
    <header className="app-header">
      <img src={Logo} alt="logo" width={100} />
      <Menu as="nav" pointing secondary>
        <Menu.Item name="HomePage" as={NavLink} to="/" exact />
        <Menu.Item name="Our services" as={NavLink} to="/services" />
        <Menu.Item name="Staff" as={NavLink} to="/staff" />
        <Menu.Item name="Book online" as={NavLink} to="/booking" />
        <Menu.Item name="Contacts" as={NavLink} to="/contacts" />
      </Menu>
    </header>
  );
}

export default App;
