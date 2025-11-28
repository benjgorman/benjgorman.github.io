---
layout: project
date: 2025-03-04
title: "Scottish Pal Chatbot"
image: "/assets/images/project_images/scottish-pal-thumb.png"
thumb_alt: ""
excerpt: "A React/Express Scottish chatbot, originally a teaching demo for a software engineering unit, expanded into a characterful conversational experience."
category: "Personal Projects"
description: "A full-stack example application where students can see how a React front-end talks to an Express back-end to power a themed Scottish chatbot — blending pedagogy, persona design, and API integration."
---

# Scottish Pal Chatbot – React/Express Teaching Demo

During BU C&I teaching, students needed a concrete example of how a **front-end React app** could talk to a **back-end Express server** to create an AI-powered experience. Rather than yet another anonymous chat window, this became the motivation for building the **Scottish Pal Chatbot** — a browser-based interface where students message a friendly Scottish character and see live responses returned from an API.

The core idea was to have an example that is **simple enough to understand in a lecture**, but rich enough that it can grow into a small project: new personalities, different prompt styles, and evolving UI features.

The core question driving the work was simple.  
**If we wrapped a basic full-stack demo in a strong character and visual theme, would it become a more memorable and engaging teaching artefact?**

---

## Why Build This?

The project explored several teaching- and research-aligned themes:

### Reimagining “hello world” chatbot examples  
Most introductory chatbots are sterile: one text box, one response area. By adding a Scottish persona, custom styling, and playful copy, the example moves from “generic API wiring” to **a small but vivid product**. Students see that even trivial plumbing can feel different when coupled with tone, world-building, and microcopy.

### Testing rapid prototyping of full-stack patterns  
The app was initially built very quickly using **React on the front end and Express on the back end**, with AI APIs wired in as the final step. This allowed demonstrations of:
- how requests move from UI → server → model → UI  
- where to add logging, validation, and simple routing  
- how to iterate on prompts and behaviour without rewriting architecture  

It also became a space to talk about **code generation tools** (e.g. GitHub Copilot) as accelerants for boilerplate while keeping design decisions human-led.

### Investigating how persona & prompt design shape understanding  
Instead of treating responses as “right” or “wrong,” students experience how **prompt wording and system instructions** change the chatbot’s behaviour. The Scottish voice, occasional nonsense, and differences between API modes all become teaching hooks for:
- prompt engineering  
- controllability and constraints  
- expectations around hallucination and tone  

---

## Features (Expanded)

- **Scottish persona chatbot**  
  The assistant speaks as a colloquial Scottish pal, mixing helpful explanations with characterful asides. This makes even basic questions (like simple maths) more engaging to test.

- **React-based chat interface**  
  A single-page app with a scrollable conversation pane, message input box, and send button. Messages are rendered as a dialogue between *You* and *Angus*, making the full request/response loop visible.

- **Express back-end API**  
  A minimal Node/Express server exposes an endpoint for chat messages. It receives the user message, injects persona prompts and mode settings, calls the AI API, and returns the formatted reply.

- **Legacy vs Advanced API modes**  
  A simple “Select API Mode” toggle lets students switch between different back-end configurations (for example, older vs newer models or different prompt styles) and observe how responses change.

- **Status and presence feedback**  
  A small footer indicator (e.g. *“Angus is: Around and ready!”*) gives a sense of presence and is an easy hook for teaching about loading states, health checks, and error handling.

- **Cohesive themed UI**  
  The interface uses a Scottish landscape backdrop, a friendly illustrated character, and clear typography to emphasise that even a teaching demo can have personality and polish.

---

## How It Was Developed

### Architecture & Front-End

The project uses **React**, chosen for its suitability in demonstrating component-based UIs and stateful interactions. Key elements include:

- A main chat component handling:
  - local state for the message list  
  - current input value  
  - “sending” state while waiting for the server  
- A message list area that renders user and bot messages with distinct styling  
- A mode selector component wired to the back-end via query parameters or headers

This structure makes it easy for students to:
- trace data flow  
- add new UI features (e.g. clear chat, multiple bots)  
- refactor components into a larger app.

### Styling & Visual Identity

Styling was implemented with **CSS (and/or utility-first classes)** to keep things explicit for learners. The “Scottish Pal” aesthetic is achieved through:

- A two-tone, landscape-inspired background  
- A cartoon highland character anchored to the left of the screen  
- A dark, card-like chat panel in the centre that focuses attention on the conversation  
- Friendly microcopy (“Yer wee chatbot pal ready tae chat ower a wee dram!”) to reinforce theme

This gives a clear example that **UI identity matters**, even in otherwise basic demos.

### API Integration

The Express server acts as a thin integration layer:

- Receives POST requests from the React client with:
  - the latest user message  
  - the chosen API mode (Legacy/Advanced)  
- Builds a prompt that:
  - injects instructions about the Scottish persona  
  - optionally constrains behaviour (e.g. respond with nonsense outside recognised commands)  
- Sends that prompt to the configured AI model and returns the resulting text.

Because all of this is visible and modifiable, students can experiment with:
- system vs user prompts  
- stricter instructions vs open-ended chat  
- mapping different routes or endpoints to different personalities.

### Development Process

Work on the project loosely followed these steps:

1. **Scaffold the Express server and a minimal chat endpoint**  
2. **Create a basic React front-end** with an input, message list, and fetch logic  
3. **Wire the two together** and confirm end-to-end request/response on localhost  
4. **Layer in the Scottish persona** and custom instructions for behaviour  
5. **Add API mode selection and status indicators** so behaviour and state changes are visible  
6. **Refine styling and microcopy** to make the demo feel like a small, finished product rather than throwaway test code

---

## Requirements

- Node.js (v16+)  
- npm or yarn  
- An AI API key (e.g. OpenAI API) configured on the server side  
- Local environment set up to run both the React dev server and the Express back-end  

---

This prototype demonstrates how even the simplest full-stack chatbot can become a **memorable teaching artefact** when wrapped in clear architecture, strong visual identity, and a playful persona. It doubles as both a lecture demo and a small sandbox for students to explore prompts, API integration, and front-end/back-end communication.
