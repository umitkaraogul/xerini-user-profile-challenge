import React from "react";
import { ProfileList } from "../components/Profile";
import ProfileService from "../services/ProfileService";

const Profile = () => {
  const users = ProfileService().users;
  return <ProfileList users={users} />;
};
export default Profile;
