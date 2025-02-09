import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const fetchVideoDetails = async (id) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${import.meta.env.VITE_API_VIDEO_URL}/videos/${id}`;

  if (!apiKey || !apiUrl) {
    throw new Error("API credentials are missing...");
  }

  const response = await axios.get(apiUrl, {
    headers: { Authorization: apiKey },
  });

  return response.data;
};

const VideoDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["video", id],
    queryFn: () => fetchVideoDetails(id),
  });
  console.log(data);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div className="alert alert-danger">Error: {error.message}</div>;
  }

  return (
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <video
                controls
                src={data.video_files[0]?.link}
                className="w-100 rounded"
              />

              <div className="card-body">
                <h5 className="card-title">{data.user.name}</h5>
                <p className="card-text">
                  <a
                    href={data.user.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    View Photographer
                  </a>
                </p>
                <a
                  href={data.video_files[0]?.link}
                  className="btn btn-success"
                  download
                >
                  Download Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
