import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(query.trim()) navigate(`/search/${query}`);
  };

  return (
    <div className="navbar">
      <h1 onClick={() => navigate("/")}>MOVIE MANIA</h1>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Navbar;
