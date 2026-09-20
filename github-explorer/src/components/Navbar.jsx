import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🧑‍💻 GitHub Explorer
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/compare">Compare</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
}

export default Navbar;