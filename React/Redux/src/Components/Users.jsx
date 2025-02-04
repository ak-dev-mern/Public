import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUsers, updateUser } from "../slices/UserSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersInfo.users);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const deleteUsers = (index) => {
    dispatch(removeUsers(index));
  };

  const startEditing = (index, user) => {
    setEditingIndex(index);
    setEditedUser(user);
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditedUser({});
  };

  const saveEditing = (index) => {
    dispatch(updateUser({ index, user: editedUser }));
    setEditingIndex(null);
    setEditedUser({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users?.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleChange}
                    className="form-control form-control-sm"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="number"
                    name="age"
                    value={editedUser.age}
                    onChange={handleChange}
                    className="form-control form-control-sm"
                  />
                ) : (
                  user.age
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleChange}
                    className="form-control form-control-sm"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="contact"
                    value={editedUser.contact}
                    onChange={handleChange}
                    className="form-control form-control-sm"
                  />
                ) : (
                  user.contact
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="address"
                    value={editedUser.address}
                    onChange={handleChange}
                    className="form-control form-control-sm"
                  />
                ) : (
                  user.address
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <>
                    <div className="d-flex justify-content-center aligin-Item-center gap-3">
                      <button
                        type="button"
                        onClick={() => saveEditing(index)}
                        className="btn btn-sm btn-success"
                        title="Save"
                      >
                        <i class="bi bi-floppy-fill"></i>
                      </button>
                      <button
                        type="button"
                        onClick={cancelEditing}
                        className="btn btn-sm btn-secondary"
                        title="Cancel"
                      >
                        <i class="bi bi-x-circle-fill"></i>
                      </button>
                    </div>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => startEditing(index, user)}
                    className="btn btn-sm btn-primary "
                    title="Edit"
                  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                )}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => deleteUsers(index)}
                  className="btn btn-sm btn-danger"
                  title="Delete"
                >
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
