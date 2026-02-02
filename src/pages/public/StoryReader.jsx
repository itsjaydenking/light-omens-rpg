import React, { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getStoryById, stories } from "../../data/stories/index.js";

function renderBlock(block, key) {
  if (!block) return null;

  switch (block.type) {
    case "p":
      return (
        <p className="readerP" key={key}>
          {block.text}
        </p>
      );

    case "quote":
      return (
        <blockquote className="readerQuote" key={key}>
          {block.text}
        </blockquote>
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

    default:
      return (
        <p className="readerP" key={key}>
          {block.text || ""}
        </p>
      );
  }
}

export default function StoryReader() {
  const { storyId } = useParams();
  const navigate = useNavigate();

  const story = useMemo(() => getStoryById(storyId), [storyId]);

  const nav = useMemo(() => {
    const idx = stories.findIndex((s) => s.id === storyId);
    return {
      prev: idx > 0 ? stories[idx - 1] : null,
      next: idx >= 0 && idx < stories.length - 1 ? stories[idx + 1] : null,
    };
  }, [storyId]);

  if (!story) {
    return (
      <div className="page">
        <h1>Story not found</h1>
        <p className="muted">That story does not exist yet.</p>
        <Link className="btn btn--ghost" to="/stories">
          Back to Stories
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="codexEntryHeader">
        <div>
          <h1 style={{ marginTop: 0 }}>{story.title}</h1>
          {story.blurb ? <p className="lead">{story.blurb}</p> : null}
        </div>

        <div className="codexEntryActions">
          <button className="btn btn--ghost" onClick={() => navigate(-1)}>
            Back
          </button>
          <Link className="btn btn--ghost" to="/stories">
            Stories Index
          </Link>
        </div>
      </div>

      {story.tags?.length ? (
        <div className="codexEntryTags">
          {story.tags.map((t) => (
            <Link
              key={t}
              to={`/stories?tag=${encodeURIComponent(t)}`}
              className="tag"
            >
              {t}
            </Link>
          ))}
        </div>
      ) : null}

      <div className="storyReader">
        <div className="readerBlocks">
          {(story.content || []).map((block, idx) =>
            renderBlock(block, `${story.id}-${idx}`),
          )}
        </div>

        <div className="storyNav">
          {nav.prev ? (
            <Link className="btn btn--ghost" to={`/stories/${nav.prev.id}`}>
              ← {nav.prev.title}
            </Link>
          ) : (
            <span />
          )}

          {nav.next ? (
            <Link className="btn btn--ghost" to={`/stories/${nav.next.id}`}>
              {nav.next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}
