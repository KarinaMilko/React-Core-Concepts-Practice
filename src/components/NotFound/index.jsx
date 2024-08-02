import { useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./../../pages/Home";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => navigate("/"), 2000);
    return () => clearTimeout(id);
  });
  return (
    <div>
      404 Page Not Found
      <div>
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default NotFound;
