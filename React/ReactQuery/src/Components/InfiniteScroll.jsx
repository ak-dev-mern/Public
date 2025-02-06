import { React, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { ClipLoader } from "react-spinners"; // Import the spinner

const fetchItems = ({ pageParam }) => {
  return axios.get(`http://localhost:3001/items/?_limit=10&_page=${pageParam}`);
};

const InfiniteScroll = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
    initialPageParam: 1,
    getNextPageParam: (lastPage, loadedPages) => {
      if (loadedPages.length < 10) {
        return loadedPages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="loading-spinner d-flex justify-content-center align-items-center mt-5">
        <ClipLoader color="#36d7b7" size={50} />{" "}
        {/* Spinner while initial data is loading */}
      </div>
    );
  }

  if (isError) {
    return <p>Error in fetching data: {error.message}</p>;
  }

  return (
    <>
      <div className="container">
        <h3>React Query Infinite Scroll</h3>
        <ul>
          {data?.pages?.map((page) =>
            page?.data.map((item) => (
              <li key={item.id}>
                {item.id}. {item.name}
              </li>
            ))
          )}
        </ul>
        <div
          ref={ref}
          className="d-flex justify-content-center align-items-center"
        >
          {isFetchingNextPage ? (
            <ClipLoader color="#000" size={30} /> // Spinner while fetching next page
          ) : (
            "No more data"
          )}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
