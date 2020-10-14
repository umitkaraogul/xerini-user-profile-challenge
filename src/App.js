import React from "react";
import { Container } from "semantic-ui-react";
import { Navigation } from "./components/Navigation";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <Container textAlign="left">
        <Navigation />
        <Dashboard />
        <Login />
        <Profile />
      </Container>
    </div>
  );
}

export default App;
