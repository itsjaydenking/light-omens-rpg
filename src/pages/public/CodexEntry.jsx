import React, { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getCodexEntryById, codexEntries } from "../../data/codex/index.js";
import { CATEGORY_LABELS } from "../../data/codex/entries.js";

function renderBlock(block, key) {
  if (!block) return null;

  switch (block.type) {
    case "p":
      return (
        <p className="readerP" key={key}>
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className="readerList" key={key}>
          {block.items?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );

    case "ordered":
      return (
        <ol className="readerList" key={key}>
          {block.items?.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <blockquote className="readerQuote" key={key}>
          {block.text}
        </blockquote>
      );

    default:
      return (
        <p className="readerP" key={key}>
          {block.text || ""}
        </p>
      );
  }
}

function scoreRelated(base, candidate) {
  if (!base || !candidate) return 0;
  if (base.id === candidate.id) return -999;

  let score = 0;

  // Prefer same category
  if (
    base.category &&
    candidate.category &&
    base.category === candidate.category
  ) {
    score += 3;
  }

  // Tag overlap
  const a = new Set(base.tags || []);
  const b = new Set(candidate.tags || []);
  let overlap = 0;
  a.forEach((t) => {
    if (b.has(t)) overlap += 1;
  });
  score += overlap * 2;

  // Same subtype gets a small bump
  if (base.subtype && candidate.subtype && base.subtype === candidate.subtype) {
    score += 1;
  }

  return score;
}

export default function CodexEntry() {
  const { entryId } = useParams();
  const navigate = useNavigate();

  const entry = useMemo(() => getCodexEntryById(entryId), [entryId]);

  const related = useMemo(() => {
    if (!entry) return [];

    // Manual related gets priority if present
    const manualIds = entry.related || [];
    const manual = manualIds.map((id) => getCodexEntryById(id)).filter(Boolean);

    // Auto related by score, excluding already-manual
    const manualSet = new Set(manualIds);

    const auto = codexEntries
      .filter((e) => e && e.id !== entry.id && !manualSet.has(e.id))
      .map((e) => ({ e, score: scoreRelated(entry, e) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((x) => x.e);

    // Combine (manual first), max 8
    return [...manual, ...auto].slice(0, 8);
  }, [entry]);

  if (!entry) {
    return (
      <div className="page">
        <h1>Entry not found</h1>
        <p className="muted">That codex entry does not exist yet.</p>
        <Link className="btn btn--ghost" to="/codex">
          Back to Codex
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="codexEntryHeader">
        <div>
          <div className="codexBadges">
            <span className="badge">
              {CATEGORY_LABELS[entry.category] || "Codex"}
            </span>
            {entry.subtype ? (
              <span className="badge badge--ghost">{entry.subtype}</span>
            ) : null}
          </div>

          <h1 style={{ marginTop: "10px" }}>{entry.title}</h1>
          {entry.summary ? <p className="lead">{entry.summary}</p> : null}
        </div>

        <div className="codexEntryActions">
          <button className="btn btn--ghost" onClick={() => navigate(-1)}>
            Back
          </button>
          <Link className="btn btn--ghost" to="/codex">
            Codex Index
          </Link>
        </div>
      </div>

      {entry.tags?.length ? (
        <div className="codexEntryTags">
          {entry.tags.map((t) => (
            <Link
              key={t}
              to={`/codex?tag=${encodeURIComponent(t)}&category=${encodeURIComponent(entry.category)}`}
              className="tag"
            >
              {t}
            </Link>
          ))}
        </div>
      ) : null}

      <div className="codexEntryLayout">
        <main className="codexEntryContent">
          <div className="readerBlocks">
            {(entry.content || []).map((block, idx) =>
              renderBlock(block, `${entry.id}-${idx}`),
            )}
          </div>
        </main>

        <aside className="codexEntrySide">
          <div className="sideCard">
            <div className="sideCardTitle">Related</div>

            {related.length ? (
              <div className="sideList">
                {related.map((r) => (
                  <Link key={r.id} className="sideLink" to={`/codex/${r.id}`}>
                    <div className="sideLinkTitle">{r.title}</div>
                    <div className="muted sideLinkMeta">
                      {CATEGORY_LABELS[r.category] || "Codex"}
                      {r.subtype ? ` · ${r.subtype}` : ""}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="muted">No related entries yet.</p>
            )}
          </div>

          <div className="sideCard">
            <div className="sideCardTitle">Quick Notes</div>
            <p className="muted" style={{ margin: 0 }}>
              This panel is reserved for links, GM notes, and expansion hooks
              later.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
