import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  CODEX_CATEGORIES,
  filterCodex,
  getAllCodexTags,
} from "../../data/codex/index.js";
import { CATEGORY_LABELS } from "../../data/codex/entries.js";

export default function Codex() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || CODEX_CATEGORIES.ALL;
  const initialTag = searchParams.get("tag") || "";
  const initialQuery = searchParams.get("q") || "";

  const safeInitialCategory = Object.values(CODEX_CATEGORIES).includes(
    initialCategory,
  )
    ? initialCategory
    : CODEX_CATEGORIES.ALL;

  const [category, setCategory] = useState(safeInitialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [tag, setTag] = useState(initialTag);

  const allTags = useMemo(() => getAllCodexTags(), []);

  const entries = useMemo(() => {
    return filterCodex({ query, category, tag });
  }, [query, category, tag]);

  useEffect(() => {
    const next = {};
    if (query) next.q = query;
    if (tag) next.tag = tag;
    if (category && category !== CODEX_CATEGORIES.ALL) next.category = category;

    setSearchParams(next, { replace: true });
  }, [query, tag, category, setSearchParams]);

  return (
    <div className="page">
      <h1>Codex</h1>
      <p className="lead">
        People, creatures, locations, and items. This is the living world bible
        for Light Omens.
      </p>

      <div className="codexControls">
        <div className="codexTabs">
          {Object.values(CODEX_CATEGORIES).map((key) => (
            <button
              key={key}
              type="button"
              className={`chip ${category === key ? "chip--active" : ""}`}
              onClick={() => setCategory(key)}
            >
              {CATEGORY_LABELS[key] || key}
            </button>
          ))}
        </div>

        <div className="codexFilters">
          <input
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search codex..."
            aria-label="Search codex"
          />

          <select
            className="select"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            aria-label="Filter by tag"
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
              setCategory(CODEX_CATEGORIES.ALL);
              setTag("");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="muted" style={{ margin: "10px 0 14px" }}>
        Showing {entries.length} entr{entries.length === 1 ? "y" : "ies"}
      </div>

      <div className="grid">
        {entries.map((e) => (
          <div className="card" key={e.id}>
            <div className="codexCardTop">
              <div className="codexBadges">
                <span className="badge">{CATEGORY_LABELS[e.category]}</span>
                {e.subtype ? (
                  <span className="badge badge--ghost">{e.subtype}</span>
                ) : null}
              </div>
            </div>

            <h2 style={{ marginTop: "10px" }}>{e.title}</h2>
            <p className="muted">{e.summary}</p>

            {e.tags?.length ? (
              <div className="codexTags">
                {e.tags.slice(0, 4).map((t) => (
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
              <Link className="btn btn--ghost" to={`/codex/${e.id}`}>
                Open Entry
              </Link>
            </div>
          </div>
        ))}

        {entries.length === 0 ? (
          <div className="card">
            <h2>No results</h2>
            <p className="muted">Try a different search term or tag.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
