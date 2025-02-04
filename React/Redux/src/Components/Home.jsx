import React, { useState } from "react";
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
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((currInput) => ({
      ...currInput,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formInput.name) newErrors.name = "Name is required";
    if (!formInput.age || isNaN(formInput.age))
      newErrors.age = "Age must be a number";
    if (!formInput.email || !/\S+@\S+\.\S+/.test(formInput.email))
      newErrors.email = "Email is invalid";
    if (!formInput.contact) newErrors.contact = "Contact is required";
    if (!formInput.address) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addUsers = (event) => {
    event.preventDefault();
    if (validateForm()) {
      dispatch(setUsers(formInput));
      setFormInput({
        name: "",
        age: "",
        email: "",
        contact: "",
        address: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="container">
      <div className="my-5 form-container w-50 p-4 shadow rounded">
        <h3 className="text-center">User Registration Form</h3>
        <form className="w-100" onSubmit={addUsers}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
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
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="age">
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
            {errors.age && <span className="text-danger">{errors.age}</span>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
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
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="contact">
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
            {errors.contact && (
              <span className="text-danger">{errors.contact}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="address">
              Address
            </label>
            <textarea
              className="form-control"
              name="address"
              id="address"
              value={formInput.address}
              onChange={handleChange}
            ></textarea>
            {errors.address && (
              <span className="text-danger">{errors.address}</span>
            )}
          </div>
          <div className="form-group mt-4 d-flex justify-content-center align-items-center">
            <button type="submit" className="btn btn-sm btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
