import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useRef, useCallback, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import placeholder from "../asset/images/placeholder.jpg";
import { debounce } from "lodash";

const fetchAllNews = async ({ pageParam = 1, queryKey }) => {
  const [, endpoint] = queryKey;
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = `${
    import.meta.env.VITE_API_URL
  }everything?q=${endpoint}&page=${pageParam}&apiKey=${apiKey}`;

  if (!apiKey) {
    throw new Error("API Credential is missing");
  }

  const response = await axios.get(baseUrl);
  return response.data;
};

const handleTextLimit = (text, limit) => {
  return text?.length > limit ? text.slice(0, limit) + "..." : text;
};

const AllNews = () => {
  const [endpoint, setEndpoint] = useState("bitcoin");
  const [inputValue, setInputValue] = useState("");

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((value) => {
      setEndpoint(value.trim() || "bitcoin");
    }, 500),
    []
  );

  // Effect to trigger debounced search on input change
  useEffect(() => {
    if (inputValue) {
      debouncedSearch(inputValue);
    }
  }, [inputValue, debouncedSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEndpoint(inputValue.trim() || "bitcoin");
  };

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["articles", endpoint],
      queryFn: fetchAllNews,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.articles.length ? allPages.length + 1 : undefined;
      },
    });

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage, fetchNextPage]
  );

  if (isLoading && !data) {
    return <p className="no-data-found">Please wait, data is loading...</p>;
  }

  if (isError) {
    return <p className="no-data-found">Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <div className="container-header">
        <div>
          <h3>Result for "{endpoint}"</h3>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search news"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>

      <div className="news-gallery-container">
        {data?.pages.map((page) =>
          page.articles?.map((article, index) => (
            <div
              key={article.source?.id || article.title || index}
              className="gallery-item"
              ref={index === page.articles.length - 1 ? lastElementRef : null}
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src={article.urlToImage || placeholder}
                    alt={article.title || "News image"}
                    onError={(e) => {
                      e.target.src = placeholder; // Fallback image
                    }}
                  />
                </div>
                <div className="card-header">
                  <h3 title={article.title}>
                    {handleTextLimit(article.title, 50)}
                  </h3>
                </div>
                <div className="card-body">
                  <p className="description">
                    {handleTextLimit(article.description, 100) ||
                      "Description not available"}
                  </p>
                </div>
                <div className="card-footer">
                  <div className="author">
                    <i className="bi bi-person-fill"></i>
                    <p>
                      {handleTextLimit(article.author, 25) || "Unknown Author"}
                    </p>
                  </div>
                  <Link
                    to={`/newsdetails/${article.source?.id || article.title}`}
                    rel="noopener noreferrer"
                  >
                    <button>Read more</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {isLoading && <p>Loading more...</p>}
      {!hasNextPage && !isLoading && data?.pages?.length && (
        <p>No more articles to load</p>
      )}
    </div>
  );
};

export default AllNews;
