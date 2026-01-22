export function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function rollDie(sides) {
  return randInt(1, sides);
}

export function rollDicePool(pool) {
  return pool.map((die) => ({
    ...die,
    value: rollDie(die.sides),
  }));
}

export function rerollByIds(rolled, idsToReroll) {
  const idSet = new Set(idsToReroll);
  return rolled.map((die) =>
    idSet.has(die.id) ? { ...die, value: rollDie(die.sides) } : die,
  );
}

export function evaluateRolls(rolled) {
  let successes = 0;
  let doubleSuccesses = 0;
  let complications = 0;

  const annotated = rolled.map((d) => {
    let tag = "none";

    if (d.value === 1) {
      complications += 1;
      tag = "complication";
    }

    if (d.value >= 10) {
      doubleSuccesses += 1;
      successes += 2;
      tag = "double";
    } else if (d.value >= 6) {
      successes += 1;
      tag = tag === "complication" ? "complication" : "success";
    }

    return { ...d, tag };
  });

  return {
    annotated,
    totals: { successes, doubleSuccesses, complications },
  };
}
