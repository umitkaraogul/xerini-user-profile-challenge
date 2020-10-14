import React from "react";
import { Form, Button, Grid } from "semantic-ui-react";
const Login = () => {
  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", backgroundColor: "#EBEDEF" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large">
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
