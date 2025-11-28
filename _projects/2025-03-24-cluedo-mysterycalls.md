---
layout: project
image: "/assets/images/project_images/cluedo-calls-thumb.png"
thumb_alt: ""
excerpt: "An AI-driven Cluedo experience built around real phone interrogation, voice-acted suspects, and evidence-based deduction."
category: "Personal"
description: "A modern reinterpretation of Cluedo built during BU C&I Research Week. Players interrogate suspects via Bland.AI voice calls, review evidence, and solve a timed murder mystery — demonstrating rapid prototyping with AI code assistance."
---

# Cluedo Calls – AI-Powered Murder Mystery

During BU C&I Research Week, students were developing projects using Bland.AI voice technology. Several had previously expressed interest in seeing how staff would approach a similar challenge. This became the motivation for building **Cluedo Calls** — a browser-based murder mystery where the suspects are not just cards or static characters, but **voice-responsive AI personalities you can call on your phone**.

The goal was to test how far a small prototype could go in a short space of time using GitHub Copilot as an accelerant for development. The result was a functioning playable experience: the user plays detective, phones Cluedo characters, hears their alibis, connects clues, and ultimately identifies the murderer.

The core question driving the work was simple.  
**If board game deduction became interactive and vocal, how much more immersive could it be?**

---

## Why Build This?

The project explored several research-aligned themes:

### Reimagining traditional narrative formats  
Board games rely on inference and imagination. By adding AI-powered voice interaction, the intention was to shift the experience from reading a card to **interrogating a living suspect**, introducing uncertainty, tone, hesitation, lies, and personality.

### Testing rapid-prototyping with AI coding tools  
With only a few evenings available, Copilot became a development partner — generating boilerplate, scaffolding components, and handling repetitive logic. What remained human-led were the design decisions, narrative dynamics, and interaction pattern.

### Investigating how voice AI changes gameplay  
Instead of players simply selecting a suspect, they hold a conversation. They must listen, evaluate tone, challenge contradictions. The social complexity of deception becomes part of the game system.

---

## Features (Expanded)

- **AI phone calls to suspects**  
  The game connects to Bland.AI’s voice system so players receive live calls from characters. These conversations are unscripted within guidance prompts, meaning suspects may respond differently across playthroughs.

- **Distinct voices for classic Cluedo characters**  
  Each character personality was built with its own vocal profile and behaviour instructions. Miss Scarlet is evasive, Colonel Mustard is proud, Professor Plum over-explains. This builds replayability and storytelling richness.

- **Evidence-driven investigation UI**  
  Instead of guesswork, players review evidence logs, item discovery, movement timelines, and alibi statements. Calls generate notes automatically so players can track inconsistencies and motives.

- **Investigation log + accusation moment**  
  Once confident, the player submits an accusation to the Chief Inspector. If correct, the case closes. If wrong — well — justice may not be served.

- **Timed gameplay for tension**  
  A deadline hangs over the investigation. Each call, reconsideration, and note consumes time, maintaining urgency and forcing prioritisation.

- **Stylised noir interface**  
  The UI adopts grainy textures, dark palettes, and detective-office typography — mirroring noir cinema and creating atmosphere from first click to final reveal.

---

## How It Was Developed

### Architecture & Front-End

The project uses **React with TypeScript**, chosen for component-based development and type safety. **React Router** structures the application into:

- Case file home  
- Suspect directory  
- Evidence log  
- Accusation & outcome

This separation allowed incremental development without rebuilding the interface.

### Styling & Visual Identity

**TailwindCSS** was used to move quickly — utility classes enabled rapid iteration without full design systems. The noir aesthetic emerged through:

- Low-contrast palettes
- Film-grain textures
- Bold serif headings with typewriter-style body text

### Bland.AI Integration

Each suspect was defined through:

- Role profile
- Voice preference
- Murder-night history
- Prompts for behaviour under interrogation

Calls trigger via API, and responses are conversational rather than strictly scripted.

### Development Process

Work happened over several evenings:

1. **Scaffold React + routing**
2. **Integrate Bland.AI and test outbound calls**
3. **Design the UI and evidence structures**
4. **Add personalities & alibi logic**
5. **Refine flow into a full session experience**

Copilot handled repetitive tasks (state wiring, components, Tailwind classes) but the creative and investigative framing remained hand-authored.

---

## Requirements

- Node.js (v16+)  
- npm or yarn  
- Bland.AI account, API key, and call credits  
- Verified phone number for suspect call handling  

---

This prototype demonstrates how traditional game structures evolve when AI voice interaction becomes the primary mechanic. It is both a research artefact and a playable experience — proof that with modern tooling, even a solo developer with a limited window can build something atmospheric, interactive, and conceptually ambitious.
