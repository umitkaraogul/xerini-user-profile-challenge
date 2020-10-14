import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import ProfileService from "../services/ProfileService";
import {
  Form,
  Button,
  Grid,
  Segment,
  Header,
  Message,
} from "semantic-ui-react";

const Login = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [userName, setUserName] = useState("admin");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === "admin") {
      setAppState({
        ...appState,
        isLoggedIn: true,
        users: ProfileService().users,
      });
    } else {
      setError("Login account authentication error");
    }
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", backgroundColor: "#EBEDEF" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Login to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            />

            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button fluid size="large" type="submit" color="violet">
              Login
            </Button>
            {error && <Message color="red">{error}</Message>}
          </Segment>
        </Form>
        <Message>
          <a href="https://xerini.co.uk/">Visit</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
