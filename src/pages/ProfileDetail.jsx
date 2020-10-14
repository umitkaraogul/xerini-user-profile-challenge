import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Button, Segment } from "semantic-ui-react";
import ProfileService from "../services/ProfileService";

const ProfileDetail = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const users = ProfileService().users;
    const activeProfile = users.find((user) => (user.id = profileId));
    setProfile(activeProfile);
  }, [profileId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    //TODO:complete
  };

  return (
    <>
      {profile && (
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="First name"
            placeholder="First name"
            value={profile.first_name}
            onChange={({ target }) =>
              setProfile({ ...profile, first_name: target.value })
            }
            disabled={!isEditing}
          />
          <Form.Input
            label="Other name"
            placeholder="Other name"
            value={profile.other_names}
            onChange={({ target }) => {
              setProfile({ ...profile, other_names: target.value });
            }}
            disabled={!isEditing}
          />

          <Form.Input
            label="Street"
            placeholder="Street"
            value={profile.address.street}
            onChange={({ target }) => {
              setProfile({
                ...profile,
                address: { ...profile.address, street: target.value },
              });
            }}
            disabled={!isEditing}
          />
          <Form.Input
            label="Town"
            placeholder="Town"
            value={profile.address.town}
            onChange={({ target }) => {
              setProfile({
                ...profile,
                address: { ...profile.address, town: target.value },
              });
            }}
            disabled={!isEditing}
          />
          <Form.Input
            label="County"
            placeholder="County"
            value={profile.address.county}
            onChange={({ target }) => {
              setProfile({
                ...profile,
                address: { ...profile.address, county: target.value },
              });
            }}
            disabled={!isEditing}
          />
          <Form.Input
            label="Post Code"
            placeholder="Post Code"
            value={profile.address.postcode}
            onChange={({ target }) => {
              setProfile({
                ...profile,
                address: { ...profile.address, postcode: target.value },
              });
            }}
            disabled={!isEditing}
          />
          <Form.Input
            label="Mobile"
            placeholder="Mobile"
            value={profile.mobile}
            onChange={({ target }) =>
              setProfile({ ...profile, mobile: target.value })
            }
            disabled={!isEditing}
          />
          <Form.Input
            label="email"
            placeholder="email"
            value={profile.email}
            onChange={({ target }) =>
              setProfile({ ...profile, email: target.value })
            }
            disabled={!isEditing}
          />
          <Form.Input
            label="company"
            placeholder="company"
            value={profile.company}
            onChange={({ target }) =>
              setProfile({ ...profile, company: target.value })
            }
            disabled={!isEditing}
          />
          <Form.Input
            label="contact"
            placeholder="contact"
            value={profile.preferences.contact.join()}
            onChange={({ target }) =>
              setProfile({
                ...profile,
                preferences: {
                  ...profile.preferences,
                  contact: target.value.split(","),
                },
              })
            }
            disabled={!isEditing}
          />

          {isEditing && (
            <Segment>
              <Button primary type="submit">
                Save
              </Button>
              <Link to="/profile">
                <Button color="red">Cancel</Button>
              </Link>
            </Segment>
          )}
        </Form>
      )}
      {!isEditing && (
        <Segment>
          <Button color="green" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
          <Link to="/">
            <Button color="red">Back</Button>
          </Link>
        </Segment>
      )}
    </>
  );
};

export default ProfileDetail;
