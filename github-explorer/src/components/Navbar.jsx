import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        🧑‍💻 GitHub Explorer
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/compare">
          Compare
        </Link>

        <Link to="/favourites">
          Favourites
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;