import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const fetchImages = async ({ pageParam = 1 }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_IMAGE_URL;

  if (!apiKey || !apiUrl) {
    throw new Error("API credentials are missing...");
  }

  const response = await axios.get(apiUrl, {
    headers: { Authorization: apiKey },
    params: { query: "nature", per_page: 6, page: pageParam },
  });

  return response.data;
};

const Images = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
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
      <Header />
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {isError && (
        <div className="container mt-4">
          <div className="alert alert-danger">Error: {error.message}</div>
        </div>
      )}
      <div className="container mt-4">
        <div className="gallery-container g-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data?.pages.map((page, i) =>
            page.photos?.map((photo, index) => {
              const isLastImage =
                i === data.pages.length - 1 && index === page.photos.length - 1;
              return (
                <div
                  key={photo.id}
                  className="gallery-item col"
                  ref={isLastImage ? ref : null}
                >
                  <div className="card shadow-sm position-relative">
                    {/* Card Top Icons */}
                    <div className="card-top-icon position-absolute top-0 end-0 p-2 d-flex gap-2 opacity-0 transition-opacity">
                      <button className="btn btn-sm">
                        <i className="bi bi-bookmark fs-5 text-light"></i>
                      </button>
                      <button className="btn btn-sm">
                        <i className="bi bi-heart fs-5 text-light"></i>
                      </button>
                    </div>

                    {/* Image */}
                    <img
                      src={photo.src.large}
                      alt={photo.alt}
                      className="gallery-image"
                      style={{
                        height: "450px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />

                    {/* Photographer Details and Download Button */}
                    <div className="card-body image-info position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75 opacity-0 transition-opacity">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <img
                            className="random-avatar rounded-circle"
                            src="https://avatar.iran.liara.run/public"
                            alt="Avatar"
                            style={{ width: "40px", height: "40px" }}
                          />
                          <p className="card-text photographer-name mb-0">
                            <a
                              href={photo.photographer_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-light"
                            >
                              {photo.photographer}
                            </a>
                          </p>
                        </div>
                        <button className="btn btn-success">Download</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {isFetchingNextPage && (
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading more images...</span>
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
