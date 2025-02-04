import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import RegularFetch from "./Components/RegularFetch";
import ReactQueryFetch from "./Components/ReactQueryFetch";
import Home from "./Components/Home";
import ReactQueryFetchDetail from "./Components/ReactQueryFetchDetail";
import Pagination from "./Components/Pagination";
import InfiniteQuery from "./Components/InfiniteQuery";
import InfiniteScroll from "./Components/InfiniteScroll";
import UseQueriesDemo from "./Components/UseQueriesDemo";
import Mutation from "./Components/Mutation";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/regular">Regular Fetch</NavLink>
        <NavLink to="react-query">React Query Fetch</NavLink>
        <NavLink to="/react-query-pagination">Pagination</NavLink>
        <NavLink to="/react-query-infiniteQuery">Infinite Query</NavLink>
        <NavLink to="/react-query-infiniteScroll">Infinite Scroll</NavLink>
        <NavLink to="/react-usequeries">Use Queries</NavLink>
        <NavLink to="/react-mutation">Mutation</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regular" element={<RegularFetch />} />
        <Route path="/react-query" element={<ReactQueryFetch />} />
        <Route path="/react-query/:id" element={<ReactQueryFetchDetail />} />
        <Route path="/react-query-pagination" element={<Pagination />} />
        <Route path="/react-query-infiniteQuery" element={<InfiniteQuery />} />
        <Route
          path="/react-query-infiniteScroll"
          element={<InfiniteScroll />}
        />
        <Route path="/react-usequeries" element={<UseQueriesDemo />} />
        <Route path="/react-mutation" element={<Mutation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
