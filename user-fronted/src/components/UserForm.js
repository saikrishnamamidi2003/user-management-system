import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

function UserForm({ fetchUsers, editUser, setEditUser }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // fill form when editing
  useEffect(() => {
    if (editUser) {
      setName(editUser.name);
      setEmail(editUser.email);
    }
  }, [editUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, email };

    if (editUser) {
      // UPDATE
      axios.put(`${BASE_URL}/users/${editUser.id}`, user)
        .then(() => {
          fetchUsers();
          setEditUser(null);
          setName("");
          setEmail("");
        })
        .catch(err => console.error(err));
    } else {
      // CREATE
      axios.post(`${BASE_URL}/users`, user)
        .then(() => {
          fetchUsers();
          setName("");
          setEmail("");
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <h2>{editUser ? "Edit User" : "Add User"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          {editUser ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;