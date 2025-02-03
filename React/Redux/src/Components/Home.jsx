import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../slices/UserSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormInput((currInput) => {
      return {
        ...currInput,
        [name]: value,
      };
    });
  };

  const addUsers = (event) => {
    event.preventDefault();
    dispatch(setUsers(formInput));
  };

  return (
    <>
      <div className="container">
        <div className="my-5 form-container w-50 p-4 shadow rounded">
          <h3 className="text-center">User Registration Form</h3>
          <form className="w-100">
            <div className="form-group">
              <label className="form-lable" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                value={formInput.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-lable" htmlFor="age">
                Age
              </label>
              <input
                className="form-control"
                type="text"
                name="age"
                id="age"
                value={formInput.age}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-lable" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                value={formInput.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-lable" htmlFor="contact">
                Contact
              </label>
              <input
                className="form-control"
                type="text"
                name="contact"
                id="contact"
                value={formInput.contact}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-lable" htmlFor="contact">
                Address
              </label>
              <textarea
                className="form-control"
                name="address"
                id="address"
                value={formInput.address}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group mt-4 d-flex justify-content-center align-items-center">
              <button
                type="submit"
                onClick={addUsers}
                className="btn btn-sm btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
