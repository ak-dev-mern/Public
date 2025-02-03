import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.usersInfo.users);

  return (
    <div className="container">
      <table className="table table border table-responsive my-5">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
          </tr>
        </thead>
        {users?.map((user, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.address}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Users;
