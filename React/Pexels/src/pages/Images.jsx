import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const fetchImages = async ({ pageParam = 1 }, endpoint) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${import.meta.env.VITE_API_IMAGE_URL}${endpoint}`;

  if (!apiKey || !apiUrl) {
    throw new Error("API credentials are missing...");
  }

  const response = await axios.get(apiUrl, {
    headers: { Authorization: apiKey },
    params: { per_page: 6, page: pageParam },
  });

  return response.data;
};

const Images = () => {
  const [endpoint, setEndpoint] = useState("curated");

  const toggleEndpoint = (inputValue) => {
    if (inputValue === "") {
      setEndpoint("curated");
    } else {
      setEndpoint(`search?query=${inputValue} `);
    }
  };

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["images", endpoint],
    queryFn: ({ pageParam }) => fetchImages({ pageParam }, endpoint),
    getNextPageParam: (lastPage) => {
      if (!lastPage?.next_page) return undefined;
      const url = new URL(lastPage.next_page);
      return url.searchParams.get("page");
    },
  });

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <Navbar onButtonClick={toggleEndpoint} />;
      <Header />
      {isLoading && (
        <div className="d-flex justify-content-center align-items-start mt-3 gap-4 spinners vh-100">
          <div className="d-flex justify-content-center gap-4 my-5 spinners">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      {isError && (
        <div className="container-fluid mt-4">
          <div className="alert alert-danger">Error: {error.message}</div>
        </div>
      )}
      <div className="container-fluid mt-4">
        <div className="gallery-container row row-cols-1 row-cols-md-2 row-cols-lg-3 w-100 m-0">
          {data?.pages.map((page, i) =>
            page.photos?.map((photo, index) => {
              const isLastImage =
                i === data.pages.length - 1 && index === page.photos.length - 1;
              return (
                <div
                  key={photo.id}
                  className="gallery-item p-3 g-1"
                  ref={isLastImage ? ref : null}
                >
                  <Link to={photo.src.original}>
                    <div className="card position-relative">
                      {/* Card Top Icons */}
                      <div className="card-top-icon position-absolute top-0 end-0 p-2 d-flex gap-2 opacity-0 transition-opacity">
                        <button className="btn btn-sm" aria-label="Bookmark">
                          <i className="bi bi-bookmark fs-5 text-light"></i>
                        </button>
                        <button className="btn btn-sm" aria-label="Like">
                          <i className="bi bi-heart fs-5 text-light"></i>
                        </button>
                      </div>

                      {/* Image */}
                      <img
                        src={photo.src.large}
                        alt={photo.alt}
                        className="gallery-image"
                        style={{
                          height: "650px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />

                      {/* Photographer Details and Download Button */}
                      <div className="image-info position-absolute bottom-0 start-0 w-100 p-3 opacity-0 transition-opacity">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center justify-content-start gap-2 w-100">
                            <img
                              className="random-avatar rounded-circle"
                              src="https://avatar.iran.liara.run/public"
                              alt="Avatar"
                            />
                            <p className="card-text photographer-name mb-0">
                              <a
                                href={photo.photographer_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-light fw-semi-bold"
                              >
                                {photo.photographer}
                              </a>
                            </p>
                          </div>
                          <button className="btn btn-success">Download</button>
                        </div>
                      </div>
                      <div className="card-overlay"></div>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
        {isFetchingNextPage && (
          <div className="d-flex justify-content-center gap-4 my-5 spinners">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {hasNextPage && !isFetchingNextPage && (
          <div className="d-flex justify-content-center my-4">
            <button className="btn btn-primary" onClick={() => fetchNextPage()}>
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Images;
