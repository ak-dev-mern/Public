import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchCountry = async () => {
  const apiKey = import.meta.env.VITE_COUNTRY_API_KEY; // Ensure this is your token
  const apiUrl = "https://aaapis.com/api/v1/info/country/"; // API endpoint

  if (!apiKey || !apiUrl) {
    throw new Error("API credentials are missing...");
  }

  const response = await axios.post(
    apiUrl,
    { country: "fr" }, // Payload with country code
    {
      headers: {
        Authorization: `Token ${apiKey}`, // Authorization header
        "Content-Type": "application/json", // Content-Type header
      },
    }
  );

  return response.data; // Return the fetched data
};

const Language = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["country"],
    queryFn: fetchCountry,
  });

  if (isLoading) {
    return <h3>Please wait while loading data...</h3>;
  }

  if (isError) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <>
      <div
        className="modal fade"
        id="language"
        tabIndex="-1"
        aria-labelledby="languageLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="languageLabel">
                Change Language
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {data ? (
                <>
                  <p>Country: {data.name}</p>
                  <p>Flag: {data.flag}</p>
                  <p>Country Code: {data.country_code}</p>
                  <p>Language: {data.language.join(", ")}</p>
                  <p>
                    Currency: {data.currency.name} ({data.currency.symbol})
                  </p>
                </>
              ) : (
                <p>No data available</p>
              )}
            </div>
            <img
              src="https://countryflagsapi.netlify.app/flag/India.svg"
              alt=""
            />
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;
