import SearchBar from "../components/SearchBar";
import SearchHistory from "../components/SearchHistory";

function Home() {
  return (
    <main className="home">

      <div className="hero">

        <h1>
          GitHub Explorer
        </h1>

        <p>
          Explore GitHub profiles
          and repositories
        </p>

        <SearchBar />

        <p className="example">
          Try:
          <span> octocat</span>
        </p>

        <SearchHistory />

      </div>

    </main>
  );
}

export default Home;