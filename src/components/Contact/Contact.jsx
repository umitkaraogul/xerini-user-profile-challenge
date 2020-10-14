import React, { useState, useEffect } from "react";
import { Checkbox } from "semantic-ui-react";

const Contact = ({ selectedContactTypes, onChange, disabled }) => {
  let contactTypes = {
    mail: false,
    sms: false,
    post: false,
  };
  for (const contactType in contactTypes) {
    contactTypes[contactType] = selectedContactTypes.includes(contactType);
  }

  const [preferenceContactType, setPreferenceContactType] = useState(
    contactTypes
  );

  const handleOnChange = (contactType) => {
    const updated = { ...preferenceContactType };
    updated[contactType] = !preferenceContactType[contactType];

    setPreferenceContactType(updated);
  };

  useEffect(() => {
    const checkedContactTypes = Object.keys(preferenceContactType).filter(
      (contactType) => preferenceContactType[contactType]
    );
    onChange(checkedContactTypes);
  }, [preferenceContactType]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div>Contact</div>
      {Object.keys(preferenceContactType).map((contactType) => (
        <Checkbox
          disabled={disabled}
          label={contactType}
          key={contactType}
          checked={preferenceContactType[contactType]}
          onChange={() => handleOnChange(contactType)}
        />
      ))}
    </div>
  );
};

export default Contact;
