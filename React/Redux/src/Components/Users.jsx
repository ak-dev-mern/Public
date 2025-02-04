import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUsers } from "../slices/UserSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersInfo.users);

  const deleteUsers = (index) => {
    dispatch(removeUsers(index));
  };
  return (
    <div className="container">
      <table className="table table-bordered table-responsive my-5 border-dark table-hover">
        <thead className="text-center table-primary table-bordered">
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Address</th>
            <th colspan="2">Actions</th>
          </tr>
        </thead>
        {users?.map((user, index) => {
          return (
            <tbody className="text-center">
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.address}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary w-100"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => deleteUsers(index)}
                    className="btn btn-sm btn-danger w-100"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Users;
