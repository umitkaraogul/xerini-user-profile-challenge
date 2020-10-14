import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import ProfileService from "../services/ProfileService";
import { Form, Button, Grid } from "semantic-ui-react";

const Login = () => {
  const { appState, setAppState } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAppState({
      ...appState,
      isLoggedIn: true,
      users: ProfileService().users,
    });
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", backgroundColor: "#EBEDEF" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large" onSubmit={handleSubmit}>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Username"
          />

          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button fluid size="large" type="submit" color="violet">
            Login
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
