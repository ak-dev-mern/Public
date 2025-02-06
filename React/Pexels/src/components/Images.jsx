import React from "react";
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
        "X-Ratelimit-Limit": 100,
        "X-Ratelimit-Remaining": 99,
      },
    });

    if (!response.data?.photos?.length) {
      throw new Error("No images found. Please try again later.");
    }

    return response.data.photos[0];
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
    <div className="container-fluid px-5 my-5">
      <h2>Image from Pexels</h2>
      {data?.src?.medium ? (
        <div className="text-center">
          <img
            src={data.src.medium}
            alt={data.photographer || "Unknown"}
            className="img-fluid rounded shadow-sm"
          />
          <p className="mt-2">Photographer: {data.photographer || "Unknown"}</p>
        </div>
      ) : (
        <div className="alert alert-warning">No image data available</div>
      )}
    </div>
  );
};

export default Images;
