import { useState } from "react";

function Compare() {

  const [username1, setUsername1] =
    useState("");

  const [username2, setUsername2] =
    useState("");

  const [user1, setUser1] =
    useState(null);

  const [user2, setUser2] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleCompare =
    async (e) => {

      e.preventDefault();

      if (
        !username1.trim() ||
        !username2.trim()
      ) {
        return;
      }

      try {

        setLoading(true);
        setError("");

        const [
          response1,
          response2,
        ] = await Promise.all([

          fetch(
            `https://api.github.com/users/${username1.trim()}`
          ),

          fetch(
            `https://api.github.com/users/${username2.trim()}`
          ),

        ]);

        if (
          !response1.ok ||
          !response2.ok
        ) {
          throw new Error(
            "One or both users were not found."
          );
        }

        const [
          data1,
          data2,
        ] = await Promise.all([

          response1.json(),
          response2.json(),

        ]);

        setUser1(data1);
        setUser2(data2);

      } catch (err) {

        setError(err.message);

        setUser1(null);
        setUser2(null);

      } finally {

        setLoading(false);

      }
    };

  return (
    <main className="compare-page">

      <h1>
        Compare GitHub Users
      </h1>

      <form
        className="compare-form"
        onSubmit={handleCompare}
      >

        <input
          placeholder="First username"
          value={username1}
          onChange={(e) =>
            setUsername1(
              e.target.value
            )
          }
        />

        <input
          placeholder="Second username"
          value={username2}
          onChange={(e) =>
            setUsername2(
              e.target.value
            )
          }
        />

        <button type="submit">
          Compare
        </button>

      </form>

      {loading && (
        <p className="status">
          Comparing...
        </p>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {user1 && user2 && (

        <div className="comparison">

          <CompareCard
            user={user1}
          />

          <div className="vs">
            VS
          </div>

          <CompareCard
            user={user2}
          />

        </div>

      )}

    </main>
  );
}

function CompareCard({
  user,
}) {
  return (
    <div className="compare-card">

      <img
        src={user.avatar_url}
        alt={user.login}
      />

      <h2>
        {user.login}
      </h2>

      <p>
        {user.name ||
          "No name"}
      </p>

      <div className="compare-stats">

        <div>
          <strong>
            {user.followers}
          </strong>

          <span>
            Followers
          </span>
        </div>

        <div>
          <strong>
            {user.following}
          </strong>

          <span>
            Following
          </span>
        </div>

        <div>
          <strong>
            {user.public_repos}
          </strong>

          <span>
            Repositories
          </span>
        </div>

      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        GitHub Profile ↗️
      </a>

    </div>
  );
}

export default Compare;