import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchHistory() {
  const [history, setHistory] =
    useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "searchHistory"
      );

    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem(
      "searchHistory"
    );

    setHistory([]);
  };

  if (history.length === 0) {
    return null;
  }

  return (
    <div className="search-history">

      <div className="history-header">
        <h3>Recent Searches</h3>

        <button onClick={clearHistory}>
          Clear
        </button>
      </div>

      <div className="history-list">

        {history.map((username) => (
          <button
            key={username}
            onClick={() =>
              navigate(
                `/user/${username}`
              )
            }
          >
            {username}
          </button>
        ))}

      </div>

    </div>
  );
}

export default SearchHistory;