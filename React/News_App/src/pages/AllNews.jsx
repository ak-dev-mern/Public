import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useRef, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import placeholder from "../asset/images/placeholder.jpg";

const fetchAllNews = async ({ pageParam = 1 }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = `${
    import.meta.env.VITE_API_URL
  }everything?q=bitcoin&page=${pageParam}&apiKey=${apiKey}`;

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
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["articles"],
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

  if (isLoading) {
    return <p>Please wait, data is loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="container">
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
                        e.target.src = { placeholder }; // Fallback image
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
                      {handleTextLimit(article.description, 100)}
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="author">
                      <i class="bi bi-person-fill"></i>
                      <p>{article.author || "Unknown Author"}</p>
                    </div>
                    <Link
                      to={article.url}
                      target="_blank"
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
      </div>
    </>
  );
};

export default AllNews;
