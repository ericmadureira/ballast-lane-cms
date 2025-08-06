import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PostsList from "./pages/PostsList";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </Router>
  );
}