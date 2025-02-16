import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useRef, useCallback, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import placeholder from "../asset/images/placeholder.jpg";

const fetchAllNews = async ({ queryKey }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const country = queryKey[1];
  const category = queryKey[2];
  const baseUrl = `${
    import.meta.env.VITE_API_URL
  }top-headlines?category=${category}&country=${country}&apiKey=${apiKey}`;

  if (!apiKey) {
    throw new Error("API Credential is missing");
  }
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.message || "Failed to fetch news";
    throw new Error(message);
  }
};

const handleTextLimit = (text, limit) => {
  return text?.length > limit ? text.slice(0, limit) + "..." : text;
};

const TopHeadlines = () => {
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [selectedCategory, setSelectedCategory] = useState("general");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["articles", selectedCountry, selectedCategory],
      queryFn: fetchAllNews,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.articles.length ? allPages.length + 1 : false;
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
    <>
      <div className="container">
        <div className="container-header">
          <div>
            <h3>Result for "Top Headlines - {selectedCategory}"</h3>
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option value="general">General</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </div>
          <div>
            <form>
              <label htmlFor="country">Choose a country</label>
              <select
                name="country"
                id="country"
                onChange={handleCountryChange}
                value={selectedCountry}
              >
                <option value="us">US</option>
                <option value="ca">Canada</option>
                <option value="gb">UK</option>
                <option value="fr">France</option>
                <option value="de">Germany</option>
                <option value="in">India</option>
              </select>
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
                        e.target.src = placeholder;
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
                        {handleTextLimit(article.author, 25) ||
                          "Unknown Author"}
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
    </>
  );
};

export default TopHeadlines;
