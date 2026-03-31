import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
const BASE_URL = "http://localhost:8080";

function App() {

  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // fetch users
  const fetchUsers = () => {
    axios.get(`${BASE_URL}/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>User Management System</h1>

      <UserForm 
        fetchUsers={fetchUsers}
        editUser={editUser}
        setEditUser={setEditUser}
      />

      <UserList 
        users={users}
        fetchUsers={fetchUsers}
        setEditUser={setEditUser}
      />
    </div>
  );
    
}

export default App;