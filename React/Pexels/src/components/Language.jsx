import React from "react";
import { popularCountries } from "../utils/countryList";

const Language = () => {
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
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body px-5">
              <h1 className="modal-title fs-5" id="languageLabel">
                Choose your language:
              </h1>

              <div className="country-list mt-3 d-flex justify-content-center flex-wrap gap-2">
                {popularCountries.map((country) => (
                  <button key={country.id} className="btn btn-transparent">
                    <div className="country-item d-flex align-items-center mb-3 px-3">
                      <div>
                        <img
                          src={`https://countryflagsapi.netlify.app/flag/${country.Code}.svg`}
                          alt={`Flag of ${country.Country_Name}`}
                          className="img-fluid me-2 rounded rounded-5"
                          style={{ width: 30, height: 30 }}
                        />
                      </div>
                      <div>
                        <small>{country.Language}</small>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;
