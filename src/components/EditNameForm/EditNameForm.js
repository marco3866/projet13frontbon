// src/components/EditNameForm/EditNameForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../../actions/authActions';
import './EditNameForm.css';

const EditNameForm = ({ onCancel }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleSave = () => {
    const updatedFirstName = firstName.trim();
    const updatedLastName = lastName.trim();
    dispatch(updateUserName(token, updatedFirstName, updatedLastName));
  };

  return (
    <div className="edit-name-form">
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditNameForm;
