# Light Omens RPG — Digital‑First Ashcan

WELCOME TO LIGHT OMENS  
The world trembles under the shadows of the Light Eaters. They consume all forms of light, from the rays of sunshine to the happiness we experience. Knowledge is a currency traded through the language of diplomacy or the art of combat.  
Few withstand the chaotic backdrop of ancient magic and intricate machinery. Even fewer have the power to command these formidable forces. The call now beckons you to dispel the encroaching night and reclaim the stolen light. Will you venture into the forgotten echoes of a time long past?

---

## Welcome to Light Omens

Light Omens is a tabletop roleplaying game about hope under pressure, power with a cost, and the choices people make when the light they rely on can also destroy them. This ashcan edition presents the core ideas, rules, and a starter scenario so you can play, test, and shape the game at your table—and in your browser.

This repository contains the digital-first experience of Light Omens:

- A modern web app for reading rules, building characters, tracking truths, and running sessions.
- A lightweight auth gate for early access playtesting.
- A deployable static site for GitHub Pages.

---

## What is Light Omens?

Light Omens is a narrative-forward fantasy roleplaying game where players take on the roles of Omen Seekers—individuals who venture into danger to uncover lost truths, confront spreading darkness, and decide how the world’s fragile light will be used. You play in a world where hope is real but never free, where power can heal or corrupt, and where even small choices can leave lasting marks.

---

## You Play Seekers…

Seekers are not rulers, chosen saviors, or conquerors by default. They are people who step forward when others cannot:

- Explorers of forgotten places
- Protectors of vulnerable communities
- Mediators between rival factions
- Bearers of the Grim Light, a force that offers miracles at a terrible price

Seekers matter in the world because they act. The world does not change on its own.

---

## What You Need to Play

Tabletop (at the table or online):

- 2 or more players (including one GM)
- Several six-sided dice (d6)
- A few twelve-sided dice (d12)
- Character sheets (paper or digital)
- Paper or digital notes
- About 2–4 hours for a session
- A willingness to make difficult choices together

Digital:

- A modern browser
- Access to the Light Omens web app (this repo)
- Optional: shared voice/video, shared docs, VTT of choice

---

## Light, Shadow, and Choice

At the heart of Light Omens is a simple tension: light and shadow are not opposites; they are entangled.

- Light: hope, clarity, protection, possibility
- Shadow: fear, loss, corruption, the cost of survival

Neither can be erased. Every meaningful choice exists between them.

---

## The Grim Light

The Grim Light is the world’s defining force. It can:

- Heal the dying
- Power ancient machines
- Hold back monstrous threats
- Illuminate hidden truths

But every use of the Grim Light leaves a mark. It demands sacrifice, invites escalation, and reshapes the world in ways that cannot always be undone. Using the light is never neutral; refusing it has consequences too.

---

## Tone: Hopepunk ↔ Grimdark

Light Omens supports a range of emotional tones, from defiant hope to tragic endurance. Think of the tone as a dial:

- Hopepunk: communities can be saved; sacrifice matters; small victories inspire real change.
- Grimdark: survival is costly; power corrupts easily; hope must be fought for every day.

Before play, pick a spot on this spectrum together. Revisit that choice as the story evolves.

---

## The World at a Glance

You don’t need a map or a timeline to begin. Keep these truths in mind:

- The past is not buried. Ruins, relics, and old mistakes still shape the present.
- Power has consequences. Every solution creates new problems.
- Factions need you. No group can survive alone, and none are fully right.
- Hope is an action. It exists only when someone chooses to act on it.

Everything else is discovered in play.

---

## Playing as a Seeker

Seekers move when the world hesitates. They are not born into power, crowned by prophecy, or elevated above consequence. They act because someone must, and because inaction is its own kind of choice.

### What Seekers Do

Step into danger, uncertainty, and moral complexity to confront problems others cannot—or will not—face. Explore forgotten places, negotiate between hostile factions, protect fragile communities, and wield forces that are as dangerous as they are necessary.

### Who Seekers Are

Seekers might be:

- Scouts, scholars, or scavengers
- Wardens, diplomats, or troubleshooters
- Outcasts, veterans, or survivors
- Ordinary people forced into extraordinary circumstances

What unites them is agency: Seekers choose to act.

### Why Seekers Matter

The world is shaped by lingering failures and fragile systems. Institutions are slow; factions are divided. Seekers matter because they:

- Go where others cannot
- Make decisions no council can agree on
- Accept the cost of using—or refusing—the Grim Light
- Leave visible marks on the world through their choices

If Seekers stop acting, the world does not stabilize; it decays.

### Why Seekers Are Not Rulers or Heroes by Default

Seekers are not automatically in charge. Authority must be earned, negotiated, or taken—and always at risk. Likewise, they are not guaranteed heroes. Their actions can:

- Escalate conflicts
- Empower the wrong people
- Create new threats while ending old ones

Intent does not erase outcome.

### Your Path as a Seeker

Most stories revolve around core pursuits—pressures that shape play, not quests to tick off:

- Discover Lost Knowledge: forgotten histories, buried truths, dangerous technologies, secrets worth killing for.
- Protect a Home: defend places, people, and ways of life that cannot endure unaided.
- Forge Alliances: build bridges across rival factions and distrustful communities.
- Master the Grim Light: learn when to use, limit, or refuse it—and what you are willing to pay.

---

## Core Narrative Tools

You don’t need the full rules to understand how these shape play.

### Truths

Concise, actionable facts—Collapsed Bridge, Trusted by the Locals, Fractured Resolve. Truths:

- Define what is possible
- Create opportunities and obstacles
- Change as the world changes

When a Truth changes, the situation changes with it.

### Momentum & Chaos

Action creates pressure.

- Momentum: advantage gained through preparation, teamwork, or decisive action.
- Chaos: risk, complication, and escalation from failure, misuse of power, or ignored danger.

Neither is static. As Momentum rises, so does the temptation to push harder. As Chaos grows, the world pushes back.

### Hope

A Seeker’s inner resolve—the reason to keep going when the cost becomes clear. Hope:

- Is personal and fragile
- Can be spent to change outcomes
- Is restored through meaning, connection, and hard-won victories

Hope does not deny darkness; it insists action still matters.

---

## The Seeker’s Cycle (Session Rhythm)

Most sessions follow a familiar pattern:

1. Investigate: learn what is wrong; gather information; surface hidden pressures.
2. Journey: travel brings danger, discoveries, and choices that shape what comes next.
3. Confront: face the core threat—an enemy, disaster, or unavoidable truth.
4. Claim or Save: decide who benefits, what is preserved, and what is sacrificed.
5. Return Changed: the world reflects what you’ve done; relationships shift; new Truths emerge.

Not a script—use, bend, break, and return to it as needed.

---

## Digital‑First Platform

### Tech Stack

- React + Vite
- React Router (nested routes, guarded app area)
- Vanilla CSS (global, layout, nav, app shell, pages)
- Static deploy via GitHub Pages

### Project Structure (high‑level)

- `src/main.jsx`: app bootstrap and router provider
- `src/router.jsx`: route tree (marketing + protected app)
- `src/app/layouts/*`: shared layouts for public and app views
- `src/app/components/*`: UI components (nav, sidebar, footer, protected route)
- `src/pages/*`: public pages, auth, and app views
- `src/styles/*`: CSS files for global and shells
- `public/icon.png`: site favicon
- `vite.config.js`: base path and plugins
- `package.json`: scripts and dependencies

### Local Development

Install and run:

```bash
npm install
npm run dev
```
