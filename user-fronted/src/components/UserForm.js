import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

function UserForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email
    };

    axios.post(`${BASE_URL}/users`, user)
      .then(response => {
        console.log("User added:", response.data);
        setName("");
        setEmail("");
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2>Add User</h2>

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

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UserForm;