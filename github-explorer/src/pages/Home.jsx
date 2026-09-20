import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>GitHub Explorer</h1>
        <p>Explore GitHub profiles and repositories</p>

        <SearchBar />

        <p className="example">
          Try: <span>octocat</span>
        </p>
      </section>
    </main>
  );
}

export default Home;