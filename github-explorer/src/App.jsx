import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;