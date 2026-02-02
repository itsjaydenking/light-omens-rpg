import React, { useEffect, useMemo, useState } from "react";
import {
  addCharacter,
  clearDraft,
  createBlankCharacter,
  loadDraft,
  saveDraft,
} from "../../app/utils/storage.js";

const STEPS = [
  { id: "basics", label: "Basics" },
  { id: "origin", label: "Origin" },
  { id: "archetype", label: "Archetype" },
  { id: "stats", label: "Stats" },
  { id: "skills", label: "Skills" },
  { id: "gear", label: "Gear" },
  { id: "review", label: "Review" },
];

function softWarnings(draft) {
  const warnings = [];
  if (!draft.name.trim()) warnings.push("Name is empty.");
  if (!draft.origin) warnings.push("No origin selected.");
  if (!draft.archetype) warnings.push("No archetype selected.");
  return warnings;
}

function MiniPreview({ draft }) {
  return (
    <div className="builderPreview">
      <div className="sideCard">
        <div className="sideCardTitle">Preview</div>

        <div className="previewLine">
          <div className="muted">Name</div>
          <div>{draft.name || "Unnamed"}</div>
        </div>

        <div className="previewLine">
          <div className="muted">Origin</div>
          <div>{draft.origin || "—"}</div>
        </div>

        <div className="previewLine">
          <div className="muted">Archetype</div>
          <div>{draft.archetype || "—"}</div>
        </div>

        <div className="previewStats">
          <div className="muted" style={{ marginBottom: 6 }}>
            Stats
          </div>
          <div className="previewStatGrid">
            <div className="previewStat">
              <span className="muted">Might</span>
              <span>{draft.stats.might}</span>
            </div>
            <div className="previewStat">
              <span className="muted">Finesse</span>
              <span>{draft.stats.finesse}</span>
            </div>
            <div className="previewStat">
              <span className="muted">Mind</span>
              <span>{draft.stats.mind}</span>
            </div>
            <div className="previewStat">
              <span className="muted">Spirit</span>
              <span>{draft.stats.spirit}</span>
            </div>
          </div>
        </div>

        <div className="previewLine">
          <div className="muted">Gear</div>
          <div>{draft.gear.length} item(s)</div>
        </div>
      </div>
    </div>
  );
}

export default function CharacterNew() {
  const [stepIndex, setStepIndex] = useState(0);

  const [draft, setDraft] = useState(() => {
    const saved = loadDraft();
    return saved || createBlankCharacter();
  });

  // Autosave draft
  useEffect(() => {
    saveDraft(draft);
  }, [draft]);

  const step = STEPS[stepIndex];
  const warnings = useMemo(() => softWarnings(draft), [draft]);

  function next() {
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  }

  function back() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  function jumpTo(idx) {
    setStepIndex(idx);
  }

  function saveCharacter() {
    const saved = addCharacter({
      ...draft,
      updatedAt: new Date().toISOString(),
    });
    clearDraft();
    // For now: just go back to /app/characters list later.
    // If your Characters page is basic, you can navigate there when ready.
    alert(`Saved: ${saved.name || "Unnamed"} (${saved.id})`);
  }

  return (
    <div className="builderPage">
      <div className="builderHeader">
        <div>
          <h1 style={{ margin: 0 }}>Character Builder</h1>
          <p className="muted" style={{ marginTop: 6 }}>
            Build a character in 3–5 minutes. Soft warnings only.
          </p>
        </div>

        <div className="builderHeaderActions">
          <button
            className="btn btn--ghost"
            onClick={() => {
              clearDraft();
              setDraft(createBlankCharacter());
              setStepIndex(0);
            }}
          >
            Reset Draft
          </button>
        </div>
      </div>

      <div className="builderLayout">
        <main className="builderMain">
          <div className="builderStepper">
            {STEPS.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                className={`chip ${idx === stepIndex ? "chip--active" : ""}`}
                onClick={() => jumpTo(idx)}
                title={`Go to ${s.label}`}
              >
                {idx + 1}. {s.label}
              </button>
            ))}
          </div>

          {warnings.length ? (
            <div className="builderWarnings">
              <div className="badge">Warnings</div>
              <ul className="readerList" style={{ marginTop: 10 }}>
                {warnings.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="builderStepCard">
            <div className="builderStepTitle">
              <h2 style={{ margin: 0 }}>{step.label}</h2>
              <div className="muted">
                Step {stepIndex + 1} of {STEPS.length}
              </div>
            </div>

            {/* STEP CONTENT */}
            {step.id === "basics" ? (
              <div className="builderFields">
                <label className="field">
                  <div className="fieldLabel">Name</div>
                  <input
                    className="input"
                    value={draft.name}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, name: e.target.value }))
                    }
                    placeholder="Character name"
                  />
                </label>

                <label className="field">
                  <div className="fieldLabel">Concept (optional)</div>
                  <input
                    className="input"
                    value={draft.concept}
                    onChange={(e) =>
                      setDraft((d) => ({ ...d, concept: e.target.value }))
                    }
                    placeholder="Ex: Haunted lantern-bearer, exiled scholar..."
                  />
                </label>
              </div>
            ) : (
              <div className="muted">
                This step is a placeholder. We’ll fill it in next.
              </div>
            )}

            <div className="builderNav">
              <button
                className="btn btn--ghost"
                onClick={back}
                disabled={stepIndex === 0}
              >
                Back
              </button>

              {step.id !== "review" ? (
                <button className="btn" onClick={next}>
                  Next
                </button>
              ) : (
                <button className="btn" onClick={saveCharacter}>
                  Save Character
                </button>
              )}
            </div>
          </div>
        </main>

        <MiniPreview draft={draft} />
      </div>
    </div>
  );
}
