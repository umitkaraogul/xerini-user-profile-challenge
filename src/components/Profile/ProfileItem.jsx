import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "semantic-ui-react";

const ProfileItem = ({ user }) => (
  <Table.Row>
    <Table.Cell>{user.first_name}</Table.Cell>
    <Table.Cell>{user.other_names}</Table.Cell>
    <Table.Cell>
      {`${user.address.street} ${user.address.town} 
        ${user.address.county}  ${user.address.postcode} `}
    </Table.Cell>
    <Table.Cell>{user.mobile}</Table.Cell>
    <Table.Cell>{user.email}</Table.Cell>
    <Table.Cell>{user.company}</Table.Cell>
    <Table.Cell>{user.preferences.contact.join()}</Table.Cell>
    <Table.Cell>
      <Link to={`/profile/${user.id}`}>
        <Button floated="right" primary size="small">
          Edit
        </Button>
      </Link>
    </Table.Cell>
  </Table.Row>
);
export default ProfileItem;
