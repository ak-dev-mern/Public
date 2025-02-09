import React from "react";

const Page404 = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 text-center">
            <div className="display-1 text-danger">404</div>
            <h2 className="fw-bold">Oops! Page Not Found</h2>
            <p className="lead">
              The page you are looking for might have been removed or is
              temporarily unavailable.
            </p>
            <a href="/" className="btn btn-primary">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
