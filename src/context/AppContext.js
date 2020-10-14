import React, { createContext, useState } from "react";

//
const AppContext = createContext();
//
export const AppConsumer = AppContext.Consumer;

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    isLoggedIn: false,
    users: [],
  });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
