import React, { useEffect, useMemo, useRef, useState } from "react";
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

  const [activeSectionId, setActiveSectionId] = useState("");
  const sectionElsRef = useRef([]);

  // If /books/:bookId has no chapterId, redirect to first chapter
  useEffect(() => {
    if (!book) return;
    if (chapterId) return;

    const first = chapters[0];
    if (first) {
      navigate(`/books/${book.id}/${first.id}`, { replace: true });
    }
  }, [book, chapterId, chapters, navigate]);

  // Scroll to anchor if URL has a hash (supports deep links)
  useEffect(() => {
    if (!activeChapter) return;

    const id = location.hash ? location.hash.slice(1) : "";
    if (!id) return;

    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);

    return () => clearTimeout(t);
  }, [activeChapter, location.hash]);

  useEffect(() => {
    if (!activeChapter) return;

    // Reset refs each time chapter changes
    sectionElsRef.current = [];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry most "in view"
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0),
          )[0];

        if (visible?.target?.id) {
          setActiveSectionId(visible.target.id);
        }
      },
      {
        // tweak these to taste
        root: null,
        threshold: [0.15, 0.25, 0.4, 0.6],
        // Important: sticky header / top spacing
        rootMargin: "-110px 0px -70% 0px",
      },
    );

    // Observe each section title element
    activeChapter.sections?.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    // If we have a hash pointing to a section/subsection, set active section from it
    const hashId = location.hash ? location.hash.slice(1) : "";
    if (hashId) {
      const matchingSection =
        activeChapter.sections?.find((s) => s.id === hashId) ||
        activeChapter.sections?.find((s) =>
          s.subsections?.some((sub) => sub.id === hashId),
        );

      if (matchingSection?.id) setActiveSectionId(matchingSection.id);
    } else {
      // Default to first section
      const first = activeChapter.sections?.[0];
      if (first?.id) setActiveSectionId(first.id);
    }

    return () => observer.disconnect();
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

          <div className="readerTocDivider" />

          <div className="readerTocTitle">Contents</div>

          <nav className="readerTocSections" aria-label="Chapter contents">
            {/* Chapter anchor */}
            <NavLink
              className="readerTocSectionLink readerTocSectionLink--chapter"
              to={`/books/${book.id}/${activeChapter.id}#${activeChapter.id}`}
              title="Jump to chapter"
            >
              {activeChapter.title}
            </NavLink>

            {/* Sections + Subsections */}
            {activeChapter.sections?.map((section) => {
              const showSubs = section.id === activeSectionId;

              return (
                <div key={section.id} className="readerTocSectionGroup">
                  <NavLink
                    className="readerTocSectionLink"
                    to={`/books/${book.id}/${activeChapter.id}#${section.id}`}
                    title="Jump to section"
                  >
                    {section.title}
                  </NavLink>

                  {showSubs && section.subsections?.length ? (
                    <div className="readerTocSubList">
                      {section.subsections.map((sub) => (
                        <NavLink
                          key={sub.id}
                          className="readerTocSubLink"
                          to={`/books/${book.id}/${activeChapter.id}#${sub.id}`}
                          title="Jump to subsection"
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="readerTocFooter muted">
            Tip: Share links to chapters, sections, and subsections.
          </div>
        </aside>

        <main className="readerContent">
          {/* Chapter header */}
          <div className="readerChapterHeader" id={activeChapter.id}>
            <div className="readerChapterTop">
              <h2 className="readerChapterTitle">{activeChapter.title}</h2>
              <NavLink
                className="readerAnchor muted"
                to={`/books/${book.id}/${activeChapter.id}#${activeChapter.id}`}
                title="Copy link"
              >
                #
              </NavLink>
            </div>
          </div>

          {/* Sections */}
          {activeChapter.sections?.map((section) => (
            <section key={section.id} className="readerSection">
              {/* Section header */}
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

              {/* Section blocks */}
              {section.blocks?.length ? (
                <div className="readerBlocks">
                  {section.blocks.map((block, idx) =>
                    renderBlock(block, `${section.id}-b-${idx}`),
                  )}
                </div>
              ) : null}

              {/* Subsections */}
              {section.subsections?.length ? (
                <div className="readerSubsections">
                  {section.subsections.map((sub) => (
                    <div key={sub.id} className="readerSubsection">
                      <div className="readerSubsectionHeader">
                        <h4 className="readerSubsectionTitle" id={sub.id}>
                          {sub.title}
                        </h4>
                        <NavLink
                          className="readerAnchor muted"
                          to={`/books/${book.id}/${activeChapter.id}#${sub.id}`}
                          title="Copy link"
                        >
                          #
                        </NavLink>
                      </div>

                      <div className="readerBlocks">
                        {sub.blocks?.map((block, idx) =>
                          renderBlock(block, `${sub.id}-b-${idx}`),
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
