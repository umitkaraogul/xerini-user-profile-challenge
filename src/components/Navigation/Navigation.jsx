import React from "react";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

const Navigation = () => (
  <Sidebar as={Menu} direction="left" icon="labeled" vertical visible>
    <Menu.Item name="Home">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item name="profile">
      <Icon name="info circle" />
      Profile
    </Menu.Item>
    <Menu.Item>
      <Icon name="log out" />
      Logout
    </Menu.Item>
  </Sidebar>
);

export default Navigation;
