import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { filterStories, getAllStoryTags } from "../../data/stories/index.js";

export default function Stories() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const initialTag = searchParams.get("tag") || "";

  const [query, setQuery] = useState(initialQuery);
  const [tag, setTag] = useState(initialTag);

  const allTags = useMemo(() => getAllStoryTags(), []);

  const results = useMemo(() => filterStories({ query, tag }), [query, tag]);

  useEffect(() => {
    const next = {};
    if (query) next.q = query;
    if (tag) next.tag = tag;
    setSearchParams(next, { replace: true });
  }, [query, tag, setSearchParams]);

  return (
    <div className="page">
      <h1>Stories</h1>
      <p className="lead">
        Short fiction from the world of Light Omens. These pieces support tone,
        themes, and playable truth.
      </p>

      <div className="codexControls">
        <div className="codexFilters">
          <input
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories..."
            aria-label="Search stories"
          />

          <select
            className="select"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            aria-label="Filter stories by tag"
          >
            <option value="">All tags</option>
            {allTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setQuery("");
              setTag("");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="muted" style={{ margin: "10px 0 14px" }}>
        Showing {results.length} stor{results.length === 1 ? "y" : "ies"}
      </div>

      <div className="grid">
        {results.map((s) => (
          <div className="card" key={s.id}>
            <h2>{s.title}</h2>
            <p className="muted">{s.blurb}</p>

            {s.tags?.length ? (
              <div className="codexTags">
                {s.tags.slice(0, 4).map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="tag"
                    onClick={() => setTag(t)}
                    title="Filter by tag"
                  >
                    {t}
                  </button>
                ))}
              </div>
            ) : null}

            <div style={{ marginTop: "12px" }}>
              <Link className="btn btn--ghost" to={`/stories/${s.id}`}>
                Read
              </Link>
            </div>
          </div>
        ))}

        {results.length === 0 ? (
          <div className="card">
            <h2>No results</h2>
            <p className="muted">Try a different search term or tag.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
