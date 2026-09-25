import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUsername =
      username.trim();

    if (!trimmedUsername) {
      return;
    }

    navigate(
      /user/${trimmedUsername}
    );
  };

  return (
    <form
      className="search-box"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;