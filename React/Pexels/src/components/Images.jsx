import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchImages = async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  try {
    const response = await axios.get(
      "https://api.pexels.com/v1/curated?per_page=1",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (
      !response.data ||
      !response.data.photos ||
      response.data.photos.length === 0
    ) {
      throw new Error("No images found");
    }

    return response.data.photos[0];
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Failed to load images. Try again later.");
  }
};

const Images = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
    stealTime: 3000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container-fluid px-5 my-5">
      <h2>Image from Pexels</h2>
      {data && data.src && data.src.medium && (
        <div>
          <img src={data.src.medium} alt={data.photographer || "Unknown"} />
          <p>Photographer: {data.photographer || "Unknown"}</p>
        </div>
      )}
    </div>
  );
};

export default Images;
