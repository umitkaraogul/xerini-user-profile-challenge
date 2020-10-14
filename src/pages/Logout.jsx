import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import { Message } from "semantic-ui-react";

const Logout = () => {
  const { setAppState } = useContext(AppContext);
  useEffect(() => {
    setAppState({
      isLoggedIn: false,
      users: [],
    });
  }, [setAppState]);

  return <Message>Logout</Message>;
};

export default Logout;
