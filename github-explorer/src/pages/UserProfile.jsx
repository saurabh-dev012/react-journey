import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import ProfileCard from "../components/ProfileCard";
import RepoCard from "../components/RepoCard";

function User() {
  const { username } =
    useParams();

  const [user, setUser] =
    useState(null);

  const [repos, setRepos] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [language, setLanguage] =
    useState("all");

  const [sort, setSort] =
    useState("stars");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        /*
          Save search history
        */

        const savedHistory =
          JSON.parse(
            localStorage.getItem(
              "searchHistory"
            )
          ) || [];

        const updatedHistory = [
          username,
          ...savedHistory.filter(
            (item) =>
              item !== username
          ),
        ].slice(0, 10);

        localStorage.setItem(
          "searchHistory",
          JSON.stringify(
            updatedHistory
          )
        );

        /*
          Fetch user
        */

        const userResponse =
          await fetch(
            `https://api.github.com/users/${username}`
          );

        if (!userResponse.ok) {
          throw new Error(
            "GitHub user not found"
          );
        }

        const userData =
          await userResponse.json();

        /*
          Fetch repositories
        */

        const repoResponse =
          await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100`
          );

        if (!repoResponse.ok) {
          throw new Error(
            "Could not fetch repositories"
          );
        }

        const repoData =
          await repoResponse.json();

        setUser(userData);
        setRepos(repoData);

      } catch (err) {
        setError(err.message);

        setUser(null);
        setRepos([]);

      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [username]);

  if (loading) {
    return (
      <div className="status">
        <h2>Loading...</h2>
        <p>
          Fetching GitHub profile.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status error">
        <h2>
          Something went wrong
        </h2>

        <p>{error}</p>
      </div>
    );
  }

  /*
    Search + Filter + Sort
  */

  const filteredRepos =
    repos
      .filter((repo) => {

        const matchesSearch =
          repo.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesLanguage =
          language === "all" ||
          repo.language ===
            language;

        return (
          matchesSearch &&
          matchesLanguage
        );
      })

      .sort((a, b) => {

        if (sort === "stars") {
          return (
            b.stargazers_count -
            a.stargazers_count
          );
        }

        if (sort === "forks") {
          return (
            b.forks_count -
            a.forks_count
          );
        }

        if (sort === "name") {
          return a.name.localeCompare(
            b.name
          );
        }

        return 0;
      });

  return (
    <main className="user-page">

      <ProfileCard user={user} />

      <section className="repositories">

        <div className="repo-header">

          <h2>
            Repositories (
            {repos.length}
            )
          </h2>

          <div className="repo-controls">

            <input
              type="text"
              placeholder="Search repositories..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
            />

            <select
              value={language}
              onChange={(e) =>
                setLanguage(
                  e.target.value
                )
              }
            >
              <option value="all">
                All Languages
              </option>

              <option value="JavaScript">
                JavaScript
              </option>

              <option value="TypeScript">
                TypeScript
              </option>

              <option value="Python">
                Python
              </option>

              <option value="Java">
                Java
              </option>

              <option value="C++">
                C++
              </option>
            </select>

            <select
              value={sort}
              onChange={(e) =>
                setSort(
                  e.target.value
                )
              }
            >
              <option value="stars">
                Most Stars
              </option>

              <option value="forks">
                Most Forks
              </option>

              <option value="name">
                Name
              </option>
            </select>

          </div>
        </div>

        {filteredRepos.length ===
        0 ? (
          <p className="empty">
            No repositories found.
          </p>
        ) : (
          <div className="repo-grid">

            {filteredRepos.map(
              (repo) => (
                <RepoCard
                  key={repo.id}
                  repo={repo}
                  username={username}
                />
              )
            )}

          </div>
        )}

      </section>

    </main>
  );
}

export default User;