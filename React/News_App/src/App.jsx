import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css";
import AllNews from "./pages/AllNews";
import BreakingNews from "./pages/BreakingNews";
import TopHeadlines from "./pages/TopHeadlines";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/breakingNews" element={<BreakingNews />} />
          <Route path="/topHeadlines" element={<TopHeadlines />} />
          <Route path="/categories/general" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
