import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchVideos = async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_VIDEO_URL;

  if (!apiKey || !apiUrl) {
    throw new Error(
      "Missing API credentials. Please check your environment variables."
    );
  }

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.data.videos) {
      throw new Error("No videos found. Please try again later.");
    }

    return response.data.videos;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(
      error.response?.data?.message ||
        "Failed to load videos. Please try again."
    );
  }
};

const Videos = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
    retry: false,
  });

  console.log(data);

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
        <p className="text-danger"> {error.message}</p>
        <button onClick={() => refetch()} className="btn btn-primary">
          Retry
        </button>
      </div>
    );

  return (
    <div className=" container-fluid px-5 my-5">
      {data && data.length > 0 ? (
        <div className="gallery-container">
          {data.map((video) => (
            <div key={video.id} className="text-center mb-4 gallery-item ">
              <img
                src={video.video_pictures.picture}
                alt={video.user.name || "Unknown"}
                className="gallery-image rounded shadow-sm"
              />
              <div className="image-info">
                <p className="photographer-name">
                  Videographer: {video.user.name || "Unknown"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning">No images available</div>
      )}
    </div>
  );
};

export default Videos;
