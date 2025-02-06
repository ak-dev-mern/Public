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
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    const videos = response.data?.videos || [];
    if (videos.length === 0) {
      throw new Error("No videos found. Please try again later.");
    }

    return videos;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(
      error.response?.data?.message ||
        "Failed to load videos. Please try again."
    );
  }
};

const Videos = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchVideos,
    retry: false,
  });

  if (isLoading || isFetching)
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
        <p className="text-danger">
          {error.response?.data?.message || error.message}
        </p>
        <button onClick={refetch} className="btn btn-primary">
          Retry
        </button>
      </div>
    );

  return (
    <div className="container-fluid px-5 my-5">
      {data && data.length > 0 ? (
        <div className="row">
          {data.map((video) => {
            const thumbnail = video.image || "default-thumbnail.jpg";
            const videoUrl =
              video.video_files.find((file) => file.quality === "hd")?.link ||
              video.video_files[0]?.link;

            return (
              <div key={video.id} className="col-md-4 text-center mb-4">
                <div className="card shadow-sm">
                  <img
                    src={thumbnail}
                    alt={video.user?.name || "Unknown"}
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {video.user?.name || "Unknown"}
                    </h5>
                    <p className="card-text">
                      Duration: {video.duration} seconds
                    </p>
                    {videoUrl && (
                      <video controls className="w-100 rounded">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <div className="mt-3">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        View on Pexels
                      </a>
                      {videoUrl && (
                        <a
                          href={videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-secondary ms-2"
                        >
                          Download Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="alert alert-warning">No videos available</div>
      )}
    </div>
  );
};

export default Videos;
