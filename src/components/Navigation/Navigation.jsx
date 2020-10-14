import React from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

const Navigation = () => (
  <Sidebar as={Menu} direction="left" icon="labeled" vertical visible>
    <Menu.Item to="/" name="Home">
      <Link to="/">
        <Icon name="home" />
        Home
      </Link>
    </Menu.Item>
    <Menu.Item to="/profile" name="profile">
      <Link to="/profile">
        <Icon name="info circle" />
        Profile
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Icon name="log out" />
      Logout
    </Menu.Item>
  </Sidebar>
);

export default Navigation;
