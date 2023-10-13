import React, { useState, useEffect } from "react";
import './App.css';
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Dummy Data</h1>
      <table align="center" className="table table-dark table-bordered table-hover table-responsive" cellSpacing={"10px"}>
        <thead>
          <tr>
            <th className="p-2" style={{width:"5%"}}>S.No.</th>
            <th className="p-2" style={{width:"6%"}}>Profile Pic</th>
            <th className="p-2" style={{width:"5%"}}>First Name</th>
            <th className="p-2" style={{width:"5%"}}>Last Name</th>
            <th className="p-2" style={{width:"5%"}}>Gender</th>
            <th className="p-2" style={{width:"5%"}}>Email</th>
            <th className="p-2" style={{width:"5%"}}>Username</th>
            <th className="p-2" style={{width:"5%"}}>Domain</th>
            <th className="p-2" style={{width:"5%"}}>IP</th>
            <th className="p-2" style={{width:"20%"}}>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={user.image} alt={user.firstName} width={30} />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;