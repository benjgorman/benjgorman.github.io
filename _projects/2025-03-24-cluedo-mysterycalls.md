---
layout: project
date: 2025-03-04
title: "Cluedo Mystery Calls"
image: "/assets/images/project_images/cluedo-calls-thumb.png"
thumb_alt: ""
excerpt: "An AI-driven Cluedo experience built around real phone interrogation, voice-acted suspects, and evidence-based deduction."
category: "Personal Projects"
description: "A modern reinterpretation of Cluedo built during BU C&I Research Week. Players interrogate suspects via Bland.AI voice calls, review evidence, and solve a timed murder mystery — demonstrating rapid prototyping with AI code assistance."
---

**Cluedo Mystery Calls** is a modern reinterpretation of the classic Cluedo (Clue) board game, transforming static suspect cards into real-time voice interactions. Instead of reading character descriptions, players receive live phone calls from suspects, interrogate them, analyse their alibis, and attempt to solve the murder of Mr. Black.

The project was created during BU C&I Research Week, where students were experimenting with Bland.AI. After previous hackathons included requests for staff to build something alongside them, this prototype became an opportunity to explore how much could be achieved in a few evenings using GitHub Copilot. The result was a fully functional, voice-driven mystery experience.

---

![Cluedeo Calls](/assets/images/project_images/cluedo-calls-weapon-view.png "Cluedo")

## What the Game Does

Cluedo Mystery Calls adapts the traditional deductive format into a conversational investigation:

- Real outbound phone calls to suspects using Bland.AI voice technology
- Unique voice profiles and personalities for classic Cluedo characters
- Interactive case files containing evidence, suspect notes, and alibis
- Automatic call transcripts to support investigation tracking
- Accusation and debrief with the Chief Inspector
- A real-time countdown to increase tension and urgency
- Noir-inspired visual design and interface styling

---

![Cluedeo Calls](/assets/images/project_images/CluedoGif.gif "Cluedo")

## Technology Overview

The project is built using:

- **React + React Router (TypeScript)** for structure and routing
- **TailwindCSS** for rapid interface development
- **Bland.AI** for all voice call interactions
- **Vite** for efficient development and bundling

---

## Getting Started

### Requirements

- Node.js (v16+)
- npm or yarn
- Bland.AI account and API key
- Verified phone number to receive calls

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cluedo-mystery-calls.git

# Navigate to project directory
cd cluedo-mystery-calls

# Install dependencies
npm install

# Copy the environment file
cp .env.example .env
```

Add your Bland.AI API key to:

```bash
VITE_BLAND_API_KEY=your_api_key_here
```

If using personal Bland pathways:

```bash
VITE_USE_PERSONAL_PATHWAYS=true
```

Running the Game

```bash
npm run dev
```

The game launches at:

```bash
http://localhost:5173
```
