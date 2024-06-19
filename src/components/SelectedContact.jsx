/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = React.useState({});
  function handler() {
    setSelectedContactId(null);
  }

  React.useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        setContact(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedContactId) {
      getUserData();
    }
  }, [selectedContactId]);
  console.log("this is the user data", contact);
  return (
    <>
      <UserContact contact={contact} />
      <button onClick={handler}>Back to List</button>
    </>
  );
}
const UserContact = ({ contact }) => {
  return (
    <div className="user-contact">
      <h1>Contact Info</h1>
      <h3>{contact.name}</h3>
      <p>
        <strong>Username:</strong>
        {contact.username}
      </p>
      <p>
        <strong>Email:</strong>
        {contact.email}
      </p>
      <p>
        <strong>Phone:</strong>
        {contact.phone}
      </p>
      <p>
        <strong>Website:</strong>
        {contact.website}
      </p>
      <p>
        <strong>Address:</strong>
        {contact?.address?.street}, {contact?.address?.suite}
      </p>
      <p>
        {contact?.address?.city}, {contact?.address?.zipcode}
      </p>
      <h4>Company</h4>
      <p>
        <strong>Name:</strong>
        {contact?.company?.name}
      </p>
      <p>
        <strong>Catch Phrase:</strong>
        {contact?.company?.catchPhrase}
      </p>
      <p>
        <strong>BS:</strong>
        {contact?.company?.bs}
      </p>
    </div>
  );
};
