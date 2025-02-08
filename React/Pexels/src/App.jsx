import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from "./pages/Images";
import Videos from "./pages/Videos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
