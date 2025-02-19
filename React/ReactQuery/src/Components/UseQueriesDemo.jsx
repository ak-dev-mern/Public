import React, { useState } from "react";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";

// Fetch item data by id
const fetchItemsById = async (id) => {
  const response = await axios.get(`http://localhost:3001/items/${id}`);
  return response.data;
};

// Component to fetch multiple items and display them
const MultipleItems = ({ itemIds }) => {
  // Fetch data for multiple items using useQueries
  const itemQueries = useQueries({
    queries: itemIds.map((id) => ({
      queryKey: ["items", id],
      queryFn: () => fetchItemsById(id),
      staleTime: 50000,
    })),
  });

  // Check if any query is still loading
  const isLoading = itemQueries.some((query) => query.isLoading);
  const isError = itemQueries.some((query) => query.isError);

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong while fetching the items!</div>;
  }

  return (
    <div className="container">
      {itemIds.length === 0 ? (
        <div>No items to display. Add some items!</div>
      ) : (
        <>
          <h4>Item Details</h4>
          <div className="row row-cols-lg-4 row-cols-4 row-cols-md-2 row-cols-sm-1 g-3">
            {itemQueries.map((query, index) => (
              <div className="col" key={itemIds[index]}>
                <div className="border p-2 bg-secondary-subtle rounded text-center item-box">
                  <h5>Id Number : {itemIds[index]}</h5>
                  <span>Name : {query.data?.name || "N/A"}</span> <br />
                  <span>Color : {query.data?.color || "N/A"}</span> <br />
                  <span>Vitamin : {query.data?.vitamin || "N/A"}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Parent component that holds state for item IDs
const UseQueriesDemo = () => {
  const [inputIds, setInputIds] = useState("");
  const [itemIds, setItemIds] = useState([]);

  const handleUpdateIds = () => {
    const newIds = inputIds.split(",").map((id) => parseInt(id.trim(), 10));
    setItemIds(newIds);
    setInputIds("");
  };

  return (
    <div className="container">
      <h3>Use Queries Demo</h3>
      <div className="mb-3">
        <label htmlFor="itemIdsInput" className="form-label">
          Enter Item IDs (comma-separated):
        </label>
        <input
          type="text"
          className="form-control"
          id="itemIdsInput"
          value={inputIds}
          onChange={(e) => setInputIds(e.target.value)}
        />
        <button
          className="btn btn-primary mt-2 w-auto"
          onClick={handleUpdateIds}
        >
          Fetch Items
        </button>
      </div>
      <MultipleItems itemIds={itemIds} />
    </div>
  );
};

export default UseQueriesDemo;
