import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchImages = async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const response = await axios.get("https://api.pexels.com/v1/photos/2014422", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  return response.data;
};

const Images = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  });
  console.log(data);

  return <div>Images</div>;
};

export default Images;
