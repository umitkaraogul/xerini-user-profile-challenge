import React, { useContext } from "react";
import { ProfileList } from "../components/Profile";
import AppContext from "../context/AppContext";

const Profile = () => {
  const { appState } = useContext(AppContext);
  return <ProfileList users={appState.users} />;
};
export default Profile;
