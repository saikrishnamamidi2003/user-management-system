import React from "react";
import axios from "axios";
const BASE_URL = "http://localhost:8080";

function UserList({ users, fetchUsers, setEditUser }) {

  const deleteUser = (id) => {
    axios.delete(`${BASE_URL}/users/${id}`)
      .then(() => fetchUsers())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>User List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => setEditUser(user)}>
                  Edit
                </button>

                <button onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default UserList;