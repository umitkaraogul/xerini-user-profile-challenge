import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppContext from "./context/AppContext";
import { Container } from "semantic-ui-react";
import { Navigation } from "./components/Navigation";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileDetail from "./pages/ProfileDetail";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const { appState } = useContext(AppContext);
  return (
    <BrowserRouter>
      {appState.isLoggedIn ? (
        <div className="App">
          <Container textAlign="left">
            <Navigation />
            <Switch>
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/profile/:profileId" component={ProfileDetail} />
              <Route path="/profile" component={Profile} />
              <Route path="/logout">
                <Logout />
                <Redirect from="/logout" to="/" />
              </Route>
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
