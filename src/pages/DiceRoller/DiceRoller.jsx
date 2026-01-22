import React, { useMemo, useState } from "react";
import "./DiceRoller.css";
import { rollDicePool, evaluateRolls, rerollByIds } from "../../utils/dice.js";

function DiceRoller() {
  const MAX_DICE = 10;

  const [d6Count, setD6Count] = useState(0);
  const [d12Count, setD12Count] = useState(0);

  const [rolled, setRolled] = useState([]); // [{sides, id, value, tag}]
  const [totals, setTotals] = useState({
    successes: 0,
    doubleSuccesses: 0,
    complications: 0,
  });

  const [selectedForReroll, setSelectedForReroll] = useState([]); // array of die ids, max 2

  const totalSelected = d6Count + d12Count;
  const canAdd = totalSelected < MAX_DICE;

  const pool = useMemo(() => {
    const dice = [];
    for (let i = 0; i < d6Count; i++)
      dice.push({ sides: 6, id: `d6-${i + 1}` });
    for (let i = 0; i < d12Count; i++)
      dice.push({ sides: 12, id: `d12-${i + 1}` });
    return dice;
  }, [d6Count, d12Count]);

  function addDie(sides) {
    if (!canAdd) return;
    if (sides === 6) setD6Count((n) => n + 1);
    if (sides === 12) setD12Count((n) => n + 1);
  }

  function removeDie(sides) {
    if (sides === 6) setD6Count((n) => Math.max(0, n - 1));
    if (sides === 12) setD12Count((n) => Math.max(0, n - 1));
  }

  function clearPool() {
    setD6Count(0);
    setD12Count(0);
    setRolled([]);
    setTotals({ successes: 0, doubleSuccesses: 0, complications: 0 });
    setSelectedForReroll([]);
  }

  function rollAll() {
    if (pool.length === 0) return;

    const rolledPool = rollDicePool(pool);
    const result = evaluateRolls(rolledPool);

    setRolled(result.annotated);
    setTotals(result.totals);
    setSelectedForReroll([]);
  }

  function toggleSelectForReroll(id) {
    setSelectedForReroll((prev) => {
      // already selected -> unselect
      if (prev.includes(id)) return prev.filter((x) => x !== id);

      // not selected -> allow up to 2
      if (prev.length >= 2) return prev;

      return [...prev, id];
    });
  }

  function rerollSelected() {
    if (selectedForReroll.length === 0) return;

    const rerolled = rerollByIds(rolled, selectedForReroll);
    const result = evaluateRolls(rerolled);

    setRolled(result.annotated);
    setTotals(result.totals);
    setSelectedForReroll([]); // clear after reroll so they can pick again
  }

  return (
    <div className="dicePage">
      <header className="diceHeader">
        <h1>Dice Roller</h1>
        <p className="sub">
          Pick up to <b>{MAX_DICE}</b> dice (any mix of d6 and d12). Roll for
          successes & complications.
        </p>
      </header>

      <div className="layout">
        {/* Controls */}
        <section className="panel">
          <h2>Dice Pool</h2>

          <div className="counterRow">
            <div className="counterCard">
              <div className="counterTitle">d6</div>
              <div className="counterControls">
                <button
                  onClick={() => removeDie(6)}
                  disabled={d6Count === 0}
                  aria-label="Remove d6"
                >
                  −
                </button>
                <div className="counterValue">{d6Count}</div>
                <button
                  onClick={() => addDie(6)}
                  disabled={!canAdd}
                  aria-label="Add d6"
                >
                  +
                </button>
              </div>
            </div>

            <div className="counterCard">
              <div className="counterTitle">d12</div>
              <div className="counterControls">
                <button
                  onClick={() => removeDie(12)}
                  disabled={d12Count === 0}
                  aria-label="Remove d12"
                >
                  −
                </button>
                <div className="counterValue">{d12Count}</div>
                <button
                  onClick={() => addDie(12)}
                  disabled={!canAdd}
                  aria-label="Add d12"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="summaryLine">
            <span>
              Selected: <b>{totalSelected}</b> / {MAX_DICE}
            </span>
            {!canAdd && <span className="hint">Max dice reached</span>}
          </div>

          <div className="ruleBox">
            <div className="ruleTitle">Rules</div>
            <ul>
              <li>
                <b>6+</b> = Success
              </li>
              <li>
                <b>10+</b> = Double Success (counts as 2)
              </li>
              <li>
                <b>1</b> = Complication
              </li>
            </ul>
          </div>

          <div className="actions">
            <button
              className="primary"
              onClick={rollAll}
              disabled={pool.length === 0}
            >
              Roll
            </button>

            <button
              className="secondary"
              onClick={rerollSelected}
              disabled={rolled.length === 0 || selectedForReroll.length === 0}
              title="Select up to 2 dice from the Last Roll, then reroll"
            >
              Reroll ({selectedForReroll.length}/2)
            </button>

            <button
              className="ghost"
              onClick={clearPool}
              disabled={pool.length === 0 && rolled.length === 0}
            >
              Clear
            </button>
          </div>

          <div className="totals">
            <div className="pill">
              Successes: <b>{totals.successes}</b>
            </div>
            <div className="pill">
              Double: <b>{totals.doubleSuccesses}</b>
            </div>
            <div className="pill">
              Complications: <b>{totals.complications}</b>
            </div>
          </div>
        </section>

        {/* Visual Tray */}
        <section className="tray">
          <div className="trayHeader">
            <h2>Tray</h2>
            <div className="trayChips">
              <span className="chip">{d6Count}× d6</span>
              <span className="chip">{d12Count}× d12</span>
            </div>
          </div>

          <div className="traySurface" role="region" aria-label="Dice tray">
            {pool.length === 0 ? (
              <div className="emptyState">
                Add some dice, then press <b>Roll</b>.
              </div>
            ) : (
              <div className="diceGrid">
                {pool.map((d) => (
                  <div key={d.id} className={`dieFace die-${d.sides}`}>
                    <div className="dieTop">{d.sides === 6 ? "d6" : "d12"}</div>
                    <div className="dieValue">?</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rolled Results */}
          <div className="results">
            <h3>Last Roll</h3>

            {rolled.length === 0 ? (
              <div className="resultsEmpty">No roll yet.</div>
            ) : (
              <div className="diceGrid">
                {rolled.map((d) => (
                  <div
                    key={`${d.id}-${d.value}`}
                    className={`dieFace die-${d.sides} tag-${d.tag} ${
                      selectedForReroll.includes(d.id)
                        ? "selectedForReroll"
                        : ""
                    }`}
                    onClick={() => toggleSelectForReroll(d.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        toggleSelectForReroll(d.id);
                    }}
                    title={
                      selectedForReroll.includes(d.id)
                        ? "Selected for reroll (click to unselect)"
                        : selectedForReroll.length >= 2
                          ? "You can only reroll up to 2 dice at a time"
                          : "Click to select for reroll"
                    }
                  >
                    <div className="dieTop">{d.sides === 6 ? "d6" : "d12"}</div>
                    <div className="dieValue">{d.value}</div>
                    <div className="dieTag">
                      {d.tag === "double"
                        ? "DOUBLE"
                        : d.tag === "success"
                          ? "SUCCESS"
                          : d.tag === "complication"
                            ? "COMP"
                            : ""}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DiceRoller;
