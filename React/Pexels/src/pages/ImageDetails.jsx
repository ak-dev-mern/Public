import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const fetchImageDetails = async (id) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${import.meta.env.VITE_API_IMAGE_URL}/photos/${id}`;

  if (!apiKey || !apiUrl) {
    throw new Error("API credentials are missing...");
  }

  const response = await axios.get(apiUrl, {
    headers: { Authorization: apiKey },
  });

  return response.data;
};

const downloadImage = (url, filename) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ImageDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["DetailsPage", id],
    queryFn: () => fetchImageDetails(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="container-fluid img-details-container">
      <div className="image-container mt-5 p-5 shadow">
        <div className="row">
          <div className="single-img-box">
            <img
              src={data.src.large}
              alt={data.alt}
              className="single-img rounded shadow-lg"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="image-details">
            <h2>{data.photographer}</h2>
            <p>
              Photo by <a href={data.photographer_url}>{data.photographer}</a>
            </p>
            <p>{data.alt}</p>
            <div className="d-flex justify-content-between mt-3">
              <button
                className="btn btn-success"
                onClick={() => downloadImage(data.src.large, `image-${id}.jpg`)}
              >
                Download Image
              </button>
              <Link to="/" className="btn btn-primary">
                Back to Images
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
