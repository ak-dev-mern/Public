import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchImages = async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_IMAGE_URL;

  if (!apiKey || !apiUrl) {
    throw new Error(
      "Missing API credentials. Please check your environment variables."
    );
  }

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.data.photos) {
      throw new Error("No images found. Please try again later.");
    }

    return response.data.photos;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(
      error.response?.data?.message ||
        "Failed to load images. Please try again."
    );
  }
};

const Images = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["photos"],
    queryFn: fetchImages,
    retry: false,
  });

  console.log(data);

  if (isLoading)
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="text-center my-5">
        <p className="text-danger"> {error.message}</p>
        <button onClick={() => refetch()} className="btn btn-primary">
          Retry
        </button>
      </div>
    );

  return (
    <div className=" container-fluid px-5 my-5">
      {data && data.length > 0 ? (
        <div className="gallery-container">
          {data.map((image) => (
            <div key={image.id} className="text-center mb-4 gallery-item ">
              <img
                src={image.src?.portrait}
                alt={image.photographer || "Unknown"}
                className="gallery-image rounded shadow-sm"
              />
              <div className="image-info">
                <p className="photographer-name">
                  Photographer: {image.photographer || "Unknown"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning">No images available</div>
      )}
    </div>
  );
};

export default Images;
