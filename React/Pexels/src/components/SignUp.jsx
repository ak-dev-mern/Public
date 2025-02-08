import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/images/google-png.PNG";

const SignUp = () => {
  const [toggleForm, setToggleForm] = useState("signUp");

  return (
    <>
      <div
        className="modal fade custom-modal"
        data-bs-keyboard="false"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-5">
              {/* Toggle between Sign Up and Login */}
              {toggleForm === "signUp" ? (
                // **Sign Up Section**
                <div className="sign-up-container ">
                  <h3 className="text-center">Sign Up to Pexels</h3>
                  <p className="mt-4 text-center">
                    More than 3 million free photos and videos to bring your
                    ideas to life.
                  </p>
                  <div className="mt-4 d-flex justify-content-center align-items-center gap-3 btn-group">
                    <button className="btn btn-transparent border btn-google">
                      <img src={google} alt="Google Logo" />
                      <span className="ps-2">Sign up with Google</span>
                    </button>
                    <button className="btn btn-transparent border btn-apple">
                      <i className="bi bi-apple fs-4"></i>
                    </button>
                    <button className="btn btn-transparent border btn-fb">
                      <i className="bi bi-facebook fs-4 text-primary"></i>
                    </button>
                  </div>
                  <p className="text-center mt-4">
                    Or, sign up with your email
                  </p>
                  <form>
                    <input
                      className="form-control mt-4"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="First name"
                    />
                    <input
                      className="form-control mt-3"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                    <input
                      className="form-control mt-3"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                    <button className="btn mt-4 w-100 btn-signUp">
                      Create an account
                    </button>
                  </form>
                  <div className="footer">
                    <p className="mt-4 text-center text-secondary">
                      By joining, you agree to our{" "}
                      <Link className="text-secondary">Terms of Service</Link>{" "}
                      and <Link className="text-secondary">Privacy Policy</Link>
                      .
                    </p>
                    <p className="text-center fs-6">
                      Already have an account?{" "}
                      <button
                        className="btn btn-link p-0 text-dark"
                        onClick={() => setToggleForm("login")}
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </div>
              ) : (
                // **Login Section**
                <div className="login-container">
                  <h3 className="text-center">Log in to Pexels</h3>
                  <p className="mt-4 text-center">
                    More than 3 million free photos and videos to bring your
                    ideas to life.
                  </p>
                  <div className="mt-4 d-flex justify-content-center align-items-center gap-3 btn-group">
                    <button className="btn btn-transparent border btn-google">
                      <img src={google} alt="Google Logo" />
                      <span className="ps-2">Log in with Google</span>
                    </button>
                    <button className="btn btn-transparent border btn-apple">
                      <i className="bi bi-apple fs-4"></i>
                    </button>
                    <button className="btn btn-transparent border btn-fb">
                      <i className="bi bi-facebook fs-4 text-primary"></i>
                    </button>
                  </div>
                  <form>
                    <div className="form-group mt-4">
                      <label className="form-label" htmlFor="login-email">
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="login-email"
                        placeholder="name@email.com"
                      />
                    </div>
                    <div className="form-group mt-2">
                      <label className="form-label" htmlFor="login-password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="login-password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="footer">
                      <p className="mt-3">
                        <Link className=" text-secondary">
                          Forgot your password?
                        </Link>
                      </p>
                      <button className="btn mt-4 w-100 btn-signUp">
                        Log in
                      </button>
                      <p className="mt-3 text-center fs-6">
                        Don't have an account?{" "}
                        <button
                          className="btn btn-link p-0 text-dark"
                          onClick={() => setToggleForm("signUp")}
                        >
                          Sign up
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
