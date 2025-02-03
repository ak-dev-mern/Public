import React from "react";
import { useState } from "react";

const Home = () => {
  const { name, age, email, contact, address } = useState();

  const handleSubmit = () => {};
  return (
    <>
      <div className="container">
        <div className="my-5 form-container w-50 p-4 shadow rounded">
          <h3 className="text-center">User Registration Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-lable" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                value={name}
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
                value={age}
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
                value={email}
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
                value={contact}
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
                value={address}
              ></textarea>
            </div>
            <div className="form-group mt-4 d-flex justify-content-center align-items-center gap-3">
              <button type="submit" className="btn btn-sm btn-success">
                Submit
              </button>
              <button type="submit" className="btn btn-sm btn-danger">
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
