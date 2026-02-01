import React, { useEffect, useMemo } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getBookById } from "../../data/books/index.js";

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

export default function BookReader() {
  const { bookId, chapterId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const book = useMemo(() => getBookById(bookId), [bookId]);
  const chapters = book?.chapters || [];

  const activeChapter = useMemo(() => {
    if (!book) return null;
    if (!chapterId) return null;
    return chapters.find((c) => c.id === chapterId) || null;
  }, [book, chapterId, chapters]);

  // If /books/:bookId has no chapterId, redirect to first chapter
  useEffect(() => {
    if (!book) return;
    if (chapterId) return;

    const first = chapters[0];
    if (first) {
      navigate(`/books/${book.id}/${first.id}`, { replace: true });
    }
  }, [book, chapterId, chapters, navigate]);

  // Scroll to section if URL has a hash (supports deep links)
  useEffect(() => {
    if (!activeChapter) return;

    const id = location.hash ? location.hash.slice(1) : ""; // "truths"
    if (!id) return;

    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);

    return () => clearTimeout(t);
  }, [activeChapter, location.hash]);

  function goToChapter(id) {
    navigate(`/books/${book.id}/${id}`);
  }

  if (!book) {
    return (
      <div className="page">
        <h1>Book not found</h1>
        <p className="muted">
          That rulebook does not exist yet, or the link is incorrect.
        </p>
        <Link className="btn btn--ghost" to="/books">
          Back to Books
        </Link>
      </div>
    );
  }

  // While redirecting to first chapter
  if (!chapterId || !activeChapter) {
    return (
      <div className="page">
        <h1>{book.title}</h1>
        <p className="muted">Loading chapter…</p>
        <Link className="btn btn--ghost" to="/books">
          Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className="readerPage">
      <div className="readerHeader">
        <div>
          <div className="readerKicker">Rulebook</div>
          <h1 className="readerTitle">{book.title}</h1>
          <div className="readerMeta muted">
            {book.subtitle ? `${book.subtitle} · ` : ""}v{book.version} ·
            Updated {book.updatedAt}
          </div>
        </div>

        <div className="readerHeaderActions">
          <Link className="btn btn--ghost" to="/books">
            Back to Books
          </Link>
        </div>
      </div>

      <div className="readerLayout">
        <aside className="readerToc">
          <div className="readerTocTitle">Chapters</div>

          <div className="readerTocList">
            {chapters.map((ch) => {
              const isActive = activeChapter.id === ch.id;
              return (
                <button
                  key={ch.id}
                  className={`readerTocItem ${isActive ? "active" : ""}`}
                  onClick={() => goToChapter(ch.id)}
                >
                  {ch.title}
                </button>
              );
            })}
          </div>

          <div className="readerTocFooter muted">
            Tip: Share links to specific chapters and sections.
          </div>
        </aside>

        <main className="readerContent">
          <h2 className="readerChapterTitle" id={activeChapter.id}>
            {activeChapter.title}
          </h2>

          {activeChapter.sections?.map((section) => (
            <section key={section.id} className="readerSection">
              <div className="readerSectionHeader">
                <h3 className="readerSectionTitle" id={section.id}>
                  {section.title}
                </h3>
                <NavLink
                  className="readerAnchor muted"
                  to={`/books/${book.id}/${activeChapter.id}#${section.id}`}
                  title="Copy link"
                >
                  #
                </NavLink>
              </div>

              <div className="readerBlocks">
                {section.blocks?.map((block, idx) =>
                  renderBlock(block, `${section.id}-${idx}`),
                )}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
