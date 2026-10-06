# AI Prompt Appendix

## AI Tool Used

ChatGPT

## Purpose of AI Assistance

AI was used during the initial architectural analysis and development of the companion prototype. The AI was used to help identify major Discourse components, organize the architecture into a visual model, suggest a prototype structure, and assist with implementation ideas.

AI-generated information was not treated as automatically correct. Architectural claims were compared against Discourse's official documentation and source code before being included in the final project.

---

## Prompt 1 — Initial Architecture Analysis

> I am completing a software engineering assignment that requires me to analyze a real-world open-source application. I selected Discourse. Analyze Discourse's architecture and identify its primary architectural style, frontend, backend, databases, caching systems, background processing, communication boundaries, and major components. Explain how these components interact and identify anything that should be verified against the official Discourse repository or documentation.

### Purpose

This prompt was used to create an initial architectural model that could later be fact-checked against official Discourse sources.

---

## Prompt 2 — Architecture Visualization

> Based on Discourse's architecture, propose a lightweight companion application that could serve as an interactive architectural visualizer. The application should demonstrate the major components, request flow, architectural layers, and relationships between the frontend, backend, database, cache, and background-processing components. Keep the prototype small enough to complete and test as a student software engineering project.

### Purpose

This prompt helped determine the scope and structure of the companion prototype.

---

## Prompt 3 — Prototype Structure

> Create a React and Vite project structure for an interactive Discourse Architecture Dashboard. The dashboard should allow users to select architecture components and view information about their responsibilities. It should also include a request-flow visualization and a layered architectural view. Prioritize clean responsive design and keyboard accessibility.

### Purpose

This prompt was used to establish the initial frontend structure for the prototype.

---

## AI Verification Process

The AI-generated architecture was treated as an initial hypothesis rather than authoritative documentation.

The following process was used:

1. Identify an architectural claim made by AI.
2. Locate supporting information in the official Discourse repository or documentation.
3. Compare the AI description with the verified source.
4. Correct or qualify the claim when necessary.
5. Only include verified architectural information in the final project.

---

## Initial Findings and Corrections

### Ruby on Rails

**AI assessment:** Ruby on Rails is the primary backend/application framework.

**Verification:** Confirmed against the Discourse repository and project structure.

**Result:** Verified.

---

### Ember.js

**AI assessment:** Ember.js provides the frontend application.

**Verification:** Confirmed against the Discourse project and its frontend structure.

**Result:** Verified.

---

### PostgreSQL

**AI assessment:** PostgreSQL provides persistent application data storage.

**Verification:** Confirmed against Discourse's documented architecture and configuration.

**Result:** Verified.

---

### Redis

**AI assessment:** Redis is used for caching and transient data.

**Verification:** Discourse's configuration and documentation identify Redis-related functionality.

**Result:** Verified, with the description kept specific to caching and transient data rather than treating Redis as the primary database.

---

### Sidekiq

**AI assessment:** Sidekiq is used for background processing.

**Verification:** Discourse's configuration and application architecture identify Sidekiq workers for background jobs.

**Result:** Verified.

---

### Architectural Style

**Initial AI description:** The architecture could be described broadly as a service-oriented or microservices-based system.

**Verification:** The core Discourse application is centered around a Rails application with an Ember frontend and supporting PostgreSQL, Redis, and background-processing infrastructure.

**Correction:** The final project describes Discourse more carefully as a modular, layered web application rather than labeling the entire system as a pure microservices architecture.

**Reason for correction:** The distinction is important because describing the system as pure microservices would oversimplify the architecture and could misrepresent the relationship between the major components.

---

## AI Customization

The generated ideas were customized during implementation.

Changes included:

* Designing the architecture dashboard specifically around Discourse.
* Creating interactive architecture cards.
* Adding component-specific descriptions.
* Adding a request-flow visualization.
* Adding a layered architecture view.
* Adding an AI verification section.
* Adding responsive layouts for smaller screens.
* Adding keyboard-accessible interactive controls.
* Separating architectural documentation from application code.
* Fact-checking architectural claims before presenting them as verified information.

AI assistance was therefore used as a development and learning tool rather than as an unquestioned source of technical information.
