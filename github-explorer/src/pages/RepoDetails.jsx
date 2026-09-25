import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

function RepoDetails() {
  const {
    username,
    repoName,
  } = useParams();

  const [repo, setRepo] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    const fetchRepo = async () => {

      try {
        setLoading(true);
        setError("");

        const response =
          await fetch(
            https://api.github.com/repos/${username}/${repoName}
          );

        if (!response.ok) {
          throw new Error(
            "Repository not found"
          );
        }

        const data =
          await response.json();

        setRepo(data);

      } catch (err) {
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };

    fetchRepo();

  }, [username, repoName]);

  if (loading) {
    return (
      <div className="status">
        Loading repository...
      </div>
    );
  }

  if (error) {
    return (
      <div className="status error">
        {error}
      </div>
    );
  }

  return (
    <main className="repo-details">

      <h1>{repo.name}</h1>

      <p>
        {repo.description ||
          "No description available."}
      </p>

      <div className="details-grid">

        <div>
          <strong>
            Language
          </strong>

          <span>
            {repo.language ||
              "Unknown"}
          </span>
        </div>

        <div>
          <strong>
            Stars
          </strong>

          <span>
            ⭐{" "}
            {repo.stargazers_count}
          </span>
        </div>

        <div>
          <strong>
            Forks
          </strong>

          <span>
            🍴{" "}
            {repo.forks_count}
          </span>
        </div>

        <div>
          <strong>
            Issues
          </strong>

          <span>
            {repo.open_issues_count}
          </span>
        </div>

        <div>
          <strong>
            Watchers
          </strong>

          <span>
            {repo.watchers_count}
          </span>
        </div>

        <div>
          <strong>
            Default Branch
          </strong>

          <span>
            {repo.default_branch}
          </span>
        </div>

      </div>

      <a
        className="github-button"
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Open on GitHub ↗️
      </a>

    </main>
  );
}

export default RepoDetails;