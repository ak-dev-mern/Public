import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const fetchImages = async ({ pageParam = 1, query }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_API_IMAGE_URL;

  if (!apiKey || !baseUrl) {
    throw new Error(
      "Missing API credentials. Please check your environment variables."
    );
  }

  const apiUrl = `${baseUrl}/search?query=${encodeURIComponent(
    query
  )}&page=${pageParam}&per_page=10`;

  try {
    const response = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!response.data.photos || response.data.photos.length === 0) {
      return { photos: [], nextPage: undefined };
    }

    return {
      photos: response.data.photos,
      nextPage: response.data.photos.length ? pageParam + 1 : undefined,
    };
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(
      error.response?.data?.message ||
        "Failed to load images. Please try again."
    );
  }
};

const Spinner = () => (
  <div className="d-flex justify-content-center my-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const Images = () => {
  const [query, setQuery] = useState("people");
  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["photos", query],
    queryFn: ({ pageParam = 1 }) => fetchImages({ pageParam, query }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage?.nextPage,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading) return <Spinner />;

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
        {isFetchingNextPage && <Spinner />}
      </div>
      {!hasNextPage && (
        <p className="text-center text-muted">No more images to load.</p>
      )}
    </div>
  );
};

export default Images;
