import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const fetchImages = async ({ pageParam = 1, query }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${
    import.meta.env.VITE_API_IMAGE_URL
  }/search?query=${query}&page=${pageParam}&per_page=10`;

  if (!apiKey || !apiUrl) {
    throw new Error(
      "Missing API credentials. Please check your environment variables."
    );
  }

  try {
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!response.data.photos || response.data.photos.length === 0) {
      throw new Error("No images found. Please try again later.");
    }

    return {
      photos: response.data.photos,
      nextPage: pageParam + 1,
    };
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(
      error.response?.data?.message ||
        "Failed to load images. Please try again."
    );
  }
};

const Images = () => {
  const [query, setQuery] = useState("nature");

  const { data, isLoading, isError, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["photos", query],
      queryFn: ({ pageParam = 1 }) => fetchImages({ pageParam, query }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage?.nextPage || undefined,
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

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
        <p className="text-danger">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="container-fluid px-5 my-5">
      <div className="gallery-container">
        {data?.pages?.map((page, pageIndex) =>
          page.photos.map((image) => (
            <div key={`${image.id}-${pageIndex}`} className="gallery-item">
              <img
                src={image.src?.large}
                alt={image.photographer || "Unknown"}
                className="gallery-image rounded shadow-sm"
              />
              <div className="image-info">
                <p className="photographer-name">
                  Photographer: {image.photographer || "Unknown"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      <div
        ref={ref}
        className="d-flex justify-content-center align-items-center my-4"
      >
        {isFetchingNextPage && (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading more...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Images;
