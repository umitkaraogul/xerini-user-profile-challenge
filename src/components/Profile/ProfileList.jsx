import React from "react";
import { Table, Button } from "semantic-ui-react";
import ProfileItem from "./ProfileItem";

const ProfileList = ({ users }) => {
  const headers = [
    "Name",
    "Surname",
    "Address",
    "Mobile",
    "Email",
    "Company",
    "Preference",
    "Action",
  ];

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          {headers.map((header) => (
            <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map((user) => (
          <ProfileItem user={user} key={user.id} />
        ))}
      </Table.Body>
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan="8">
            <Button floated="right" size="small">
              Cancel
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
export default ProfileList;
