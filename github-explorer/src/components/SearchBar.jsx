import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    navigate(`/user/${username}`);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;