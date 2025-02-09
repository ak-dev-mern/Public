import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import Header from "../components/Header";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import canva from "../assets/images/canva.PNG";

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
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar onButtonClick={toggleEndpoint} />;
      <Header />
      {isLoading && (
        <div className="container-fluid w-100">
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
        </div>
      )}
      {isError && (
        <div className="container-fluid mt-4">
          <div className="alert alert-danger">Error: {error.message}</div>
        </div>
      )}
      <div className="container-fluid mt-4 w-100">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 w-100 m-0">
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
                  <div
                    className="card position-relative shadow"
                    onClick={() => handleOpenModal(photo)}
                  >
                    <div className="card-top-icon position-absolute top-0 end-0 p-2 d-flex gap-2 opacity-0 transition-opacity">
                      <button className="btn btn-sm" aria-label="Bookmark">
                        <i className="bi bi-bookmark fs-5 text-light"></i>
                      </button>
                      <button className="btn btn-sm" aria-label="Like">
                        <i className="bi bi-heart fs-5 text-light"></i>
                      </button>
                    </div>

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
                </div>
              );
            })
          )}
        </div>

        {selectedImage && (
          <div
            className={`modal fade ${
              showModal ? "show" : ""
            } img-details-modal `}
            tabIndex="-1"
            style={{ display: showModal ? "block" : "none" }}
            aria-labelledby="imageModalLabel"
            aria-hidden={!showModal}
            data-bs-keyboard="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content p-3">
                <div className="modal-header d-flex justify-content-between align-items-center border-0">
                  <div className="d-flex gap-2">
                    <Link to={selectedImage.photographer_url}>
                      <img
                        className="random-avatar rounded-circle"
                        src="https://avatar.iran.liara.run/public"
                        alt="Avatar"
                      />
                    </Link>

                    <div>
                      <Link className="text-dark ">
                        <h6>{selectedImage.photographer}</h6>
                      </Link>
                      <Link className="text-dark">Follow</Link>
                    </div>
                  </div>
                  <div className="modal-btn-group d-flex gap-3 align-items-center">
                    <Link>
                      <button className="btn btn-btn-transparent border">
                        <i className="bi bi-bookmark"></i> Collect
                      </button>
                    </Link>
                    <Link>
                      <button className="btn btn-btn-transparent border">
                        <i className="bi bi-suit-heart"></i> Like
                      </button>
                    </Link>
                    <Link>
                      <button className="btn btn-btn-transparent border btn-canva">
                        <img
                          className="img-fluid canva me-1"
                          src={canva}
                          alt={canva}
                        />
                        Edit in Canva
                      </button>
                    </Link>
                    <Link>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle btn-download"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown button
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end  dropdown-menu-light">
                          <li>
                            <a className="dropdown-item text-secondary" href="#">
                              Choose a size:
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider"></hr>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Original{" "}
                              <span className="text-secondary ms-1">
                                4016x5588
                              </span>
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider"></hr>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Large{" "}
                              <span className="text-secondary ms-1">
                                1920x2672
                              </span>
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider"></hr>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Medium{" "}
                              <span className="text-secondary ms-1">
                                1280x1781
                              </span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Small{" "}
                              <span className="text-secondary ms-1">
                                640x891
                              </span>
                            </a>
                          </li>
                          <li>
                            <div className="d-flex gap-2">
                              <input
                                className="form-control border form-control-lg"
                                type="text"
                                name="size"
                                id="iniialSize"
                              />
                              <input
                                className="form-control border form-control-lg"
                                type="text"
                                name="size"
                                id="finalSize"
                              />
                            </div>
                            <button className="btn btn-download">
                              Download Selected Size
                            </button>
                          </li>
                        </ul>
                      </div>
                    </Link>

                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={handleCloseModal}
                    ></button>
                  </div>
                </div>
                <div className="modal-body">
                  <div className="modal-img-box">
                    <img
                      src={selectedImage.src.original}
                      alt={selectedImage.alt}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
