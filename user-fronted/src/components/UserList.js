import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../api";

function UserList() {

  const [users, setUsers] = useState([]);

  // fetch users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(`${BASE_URL}/users`)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // delete user
  const deleteUser = (id) => {
    axios.delete(`${BASE_URL}/users/${id}`)
      .then(() => {
        fetchUsers(); // refresh list
      })
      .catch(err => {
        console.error(err);
      });
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