import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css";
import AllNews from "./pages/AllNews";
import TopHeadlines from "./pages/TopHeadlines";
import Navbar from "./components/Navbar";
import NewsDetails from "./pages/NewsDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/topHeadlines" element={<TopHeadlines />} />
          <Route path="/newsdetails/:id" element={<NewsDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
