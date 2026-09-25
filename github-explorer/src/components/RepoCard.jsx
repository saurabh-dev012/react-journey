import { Link } from "react-router-dom";

function RepoCard({
  repo,
  username,
}) {
  return (
    <article className="repo-card">

      <h3>{repo.name}</h3>

      <p>
        {repo.description ||
          "No description available."}
      </p>

      <div className="repo-stats">

        <span>
          💻{" "}
          {repo.language ||
            "Unknown"}
        </span>

        <span>
          ⭐ {repo.stargazers_count}
        </span>

        <span>
          🍴 {repo.forks_count}
        </span>

      </div>

      <div className="repo-actions">

        <Link
          to={`/user/${username}/repo/${repo.name}`}
        >
          Details
        </Link>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗️
        </a>

      </div>

    </article>
  );
}

export default RepoCard;