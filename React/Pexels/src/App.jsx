import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Images from "./pages/Images";
import Videos from "./pages/Videos";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <SignUp />
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
