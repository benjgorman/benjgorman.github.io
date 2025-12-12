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

This semantic based chatbot was created as a clear, approachable example for Level 5 Software Engineering students learning how a React front-end communicates with an Express back-end to power an AI-driven experience. Instead of a generic textbox-and-response interface, the demo centres on a friendly Scottish character who chats with students in real time.

The goal was to produce an example that is simple enough to teach in a lecture yet distinctive enough to feel like a small product. By giving the chatbot a defined persona and visual identity, the demonstration becomes more memorable and highlights how behaviour emerges from prompt design and system architecture.

---

![Scottish Chatbot](/assets/images/project_images/scottish-pal-thumb.png "Scottish Chatbot")

## Why Build This?

The project explores several pedagogical and technical themes.

### Making introductory chatbot demos more meaningful

Most “hello world” chatbot examples are minimal: a single input box and a plain text response. By adding a Scottish persona, themed UI elements, and playful copy, the example illustrates how even simple API wiring can become a small, coherent product. It encourages students to think about tone, world-building, and user experience in addition to basic functionality.

### Demonstrating rapid full-stack prototyping

The application was assembled quickly using React on the client side and Express on the server side, with the AI integration layered in as a final step. This provides a transparent example of:

- how requests travel from the interface to the server and back
- where validation, routing, and logging occur
- how to iterate on prompts and behaviour without changing architecture

![Scottish Chatbot](/assets/images/project_images/scottish-chatbot-gif.gif "Scottish Chatbot Gif")

### Exploring persona and prompt design

Students see firsthand how system instructions shape a chatbot’s responses. The Scottish persona, informal tone, occasional digressions, and variations between API modes all become teaching touchpoints for:

- simple topic-based semantic engineering
- behavioural constraints
- tone and voice
- the limits and quirks of generative models

---

## Features

- **Scottish persona chatbot**  
  The assistant speaks in a colloquial Scottish voice, creating a distinct character that makes simple interactions more engaging.

- **React-based chat UI**  
  A single-page application with a scrollable conversation panel, input field, and send controls. The message history clearly displays exchanges between the user and the chatbot.

- **Express API back end**  
  A lightweight Node/Express server processes incoming messages, applies persona prompts, calls the AI model, and returns formatted replies.

- **API mode switching**  
  A toggle allows students to move between different model configurations (e.g. legacy vs advanced modes), showing how behaviour changes across settings.

- **Status and presence indicators**  
  A small footer element communicates connection and loading state, demonstrating patterns for health checks and user feedback.

- **Themed interface**  
  Scottish-inspired visuals, a character illustration, and friendly microcopy reinforce the persona and demonstrate how UI identity affects user engagement.

---

## Development Approach

### Architecture and Front End

The front end uses **React**, structured to make data flow and component logic visible:

- A main chat component handling local state, input, and loading indicators
- A conversation renderer that differentiates user and bot messages
- A mode selector component that updates server requests

This modular structure allows students to extend the demo easily by adding new personalities, new UI features, or additional endpoints.

### Visual Identity

Styling was kept intentionally transparent for teaching purposes, using standard CSS and utility classes. The aesthetic includes:

- A landscape-inspired colour palette
- A friendly illustrated character
- A clean, card-style chat panel
- Lightly themed microcopy to maintain tone

This reinforces that even basic examples benefit from clear design choices and consistent theming.

### Back-End and API Integration

The Express server functions as a straightforward integration layer:

- Accepts POST requests containing the user message and selected API mode
- Constructs persona prompts and behaviour instructions
- Sends the request to the chosen AI model
- Returns a formatted response for display in the UI

Because the logic is concise and readable, it becomes a useful starting point for teaching routing, middleware, environmental variables, and prompt iteration.

### Development Process

The build progressed through:

1. Scaffolding the Express server and a basic chat endpoint
2. Creating a minimal React chat interface
3. Connecting the two for end-to-end communication
4. Adding the Scottish JSON \persona and shaping its behaviour
5. Introducing API mode selection and presence indicators
6. Refining UI styling and microcopy to give the demo character and coherence

---

## Requirements

- Node.js (v16+)
- npm or yarn
- Access to a suitable AI API (e.g., OpenAI) configured on the server
- A local development environment running both the React dev server and Express back end

---

This project demonstrates how a simple full-stack chatbot can become a **memorable, instructive, and engaging teaching tool** when combined with a coherent persona, clear architecture, and thoughtful prompt design. It functions both as a lecture exemplar and as a sandbox where students can explore front-end/back-end communication, system prompting, and iterative design.
