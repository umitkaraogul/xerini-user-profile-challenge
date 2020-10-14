import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Navigation } from "./components/Navigation";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileDetail from "./pages/ProfileDetail";
import Dashboard from "./pages/Dashboard";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const isLoggedIn = true;
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <div className="App">
          <Container textAlign="left">
            <Navigation />
            <Switch>
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/profile/:profileId" component={ProfileDetail} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Container>
        </div>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
};

export default App;
