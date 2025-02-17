import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import placeholder from "../asset/images/placeholder.jpg";

const NewsDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const baseUrl = `${
          import.meta.env.VITE_API_URL
        }everything?q=${id}&apiKey=${apiKey}`;

        if (!apiKey) throw new Error("API Credential is missing");

        const response = await axios.get(baseUrl);
        const fetchedArticle = response.data.articles[0];
        setArticle(fetchedArticle);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticleDetails();
  }, [id]); 

  if (loading)
    return <p className="no-data-found">Loading article details...</p>;
  if (error) return <p className="no-data-found">Error: {error}</p>;
  if (!article)
    return (
      <p className="no-data-found">
        No article found{" "}
        <Link to="/">
          <button>Back to News</button>
        </Link>
      </p>
    );

  return (
    <div className="news-detail-container container">
      <div className="container-header">
        <div>
          <h3>Result for "{article.title}"</h3>
        </div>
      </div>
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
          <h3>{article.title}</h3>
        </div>
        <div className="card-body">
          <p>{article.description || "No description available."}</p>
          <p>{article.content || "No content available."}</p>
        </div>
        <div className="card-footer">
          <p>
            <strong>Author:</strong> {article.author || "Unknown Author"}
          </p>
          <Link to="/">
            <button>Back to News</button>
          </Link>
          <p>
            <strong>Published on:</strong> {article.publishedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
