# Discourse Architecture Dashboard

An interactive companion prototype that visualizes the architecture of the open-source Discourse discussion platform.

## Project Overview

This project analyzes the architecture of Discourse and presents the findings through an interactive React dashboard. The goal is not to recreate Discourse itself, but to provide a visual way to explore its major architectural components, responsibilities, relationships, and request flow.

The dashboard represents Discourse as a **modular web application with a client-server architecture**. For this project, the system is organized into an analytical layered model consisting of:

1. Presentation
2. Application
3. Data
4. Background Processing

This layered representation is an analytical model created for this project and is not presented as an official Discourse architectural label.

## Real-World Application

**Discourse**

Discourse is an open-source discussion platform. Its architecture includes a Ruby on Rails backend, Ember.js frontend, PostgreSQL database, Redis, Sidekiq background processing, and an extension system based on plugins and themes.

### Simplified Architecture

```text
                    Browser / User
                          |
                          v
                     Ember.js
                   Presentation
                          |
                          v
                  Ruby on Rails
                Application / API
                    /    |     \
                   /     |      \
                  v      v       v
          PostgreSQL   Redis   Sidekiq
           Persistence  Cache   Background
                              Processing
```

## Major Components

### Ember.js

**Role:** Presentation layer

Ember.js provides the browser-based interface used by Discourse users.

Responsibilities include:

* Rendering the user interface
* Handling user interaction
* Managing client-side application behavior
* Communicating with the backend

### Ruby on Rails

**Role:** Application layer

Ruby on Rails provides the primary backend application layer.

Responsibilities include:

* Processing API requests
* Handling application logic
* Managing authentication and authorization
* Communicating with data services

### PostgreSQL

**Role:** Persistence layer

PostgreSQL provides persistent relational data storage.

Responsibilities include:

* Storing persistent application records
* Maintaining relational data
* Providing durable storage
* Supporting application queries

### Redis

**Role:** Caching and transient data

Redis provides fast access to cached and transient data and also supports background job processing.

### Sidekiq

**Role:** Background processing

Sidekiq processes work outside the immediate request-response cycle and uses Redis as part of its job-processing system.

## Request Flow

The dashboard demonstrates a simplified request flow:

```text
Browser
   |
   v
Ember.js
   |
   v
Ruby on Rails
   |
   +----> PostgreSQL
   |
   +----> Redis
   |
   +----> Sidekiq
```

This visualization is intentionally simplified. The prototype demonstrates the architectural relationship rather than reproducing the complete internal request-processing behavior of Discourse.

## Interactive Features

### Component Explorer

Users can select the major architecture components to view:

* Component description
* Key responsibilities
* Connected components

### Request Simulation

The **Simulate Request** control provides a visual demonstration of a request moving through:

1. Browser
2. Ember.js
3. Rails
4. Data/background services

The simulation is a UI representation and does not send a real request to a Discourse server.

### Layered System View

The dashboard presents the architecture using four analytical layers:

* Presentation
* Application
* Data
* Background Processing

### AI Verification Audit

The dashboard includes an AI verification section showing which architectural findings were verified and which required correction.

## Prototype Scope

This project is an **architectural companion prototype**, not a replacement for Discourse.

### Included

* Architecture visualization
* Component exploration
* Component responsibilities
* Component relationships
* Request-flow visualization
* Layered architecture model
* AI verification findings
* Responsive interface
* Keyboard-accessible controls

### Not Included

The prototype does not implement:

* User accounts
* Discussion creation
* Forums
* Moderation
* Real Discourse API requests
* Discourse database functionality
* Real background jobs
* Plugin execution

## Technology Stack

* React
* Vite
* JavaScript
* CSS
* Git / GitHub
* Vercel

## Getting Started

### Prerequisites

Install:

* Node.js
* npm
* Git

### Installation

Clone the repository and enter the project directory:

```bash
git clone <https://github.com/DennizGarza1234/discourse-architecture-poc.git>
cd discourse-architecture-poc
```

Install dependencies:

```bash
npm install
```

### Development Server

Run:

```bash
npm run dev
```

Vite will provide a local development URL.

### Production Build

Run:

```bash
npm run build
```

The production files are generated in the `dist/` directory.

## Environment Variables

No environment variables are required for this prototype.

## Deployment

The application is deployed using Vercel and connected to the project's public GitHub repository.

**Live Application:**
https://discourse-architecture-poc.vercel.app/

**GitHub Repository:**
https://github.com/DennizGarza1234/discourse-architecture-poc

## AI-Assisted Development

AI was used as a development and learning aid during the architecture analysis and prototype development process.

### AI Tool Used

**ChatGPT**

AI was primarily used to:

* Analyze the initial Discourse architecture
* Identify potential architectural components
* Suggest a prototype structure
* Generate initial React/Vite implementation ideas
* Review architecture descriptions
* Help identify areas that required verification
* Assist with documentation and QA planning

AI output was treated as an initial starting point rather than an authoritative source.

## AI Prompts

The following prompts were used during the project.

### Prompt 1 — Architecture Analysis

> I am completing a software engineering assignment that requires me to analyze a real-world open-source application. I selected Discourse. Analyze Discourse's architecture and identify its primary architectural style, frontend, backend, databases, caching systems, background processing, communication boundaries, and major components. Explain how these components interact and identify anything that should be verified against the official Discourse repository or documentation.

### Prompt 2 — Prototype Planning

> Based on Discourse's architecture, propose a lightweight companion application that could serve as an interactive architectural visualizer. The application should demonstrate the major components, request flow, architectural layers, and relationships between the frontend, backend, database, cache, and background-processing components. Keep the prototype small enough to complete and test as a student software engineering project.

### Prompt 3 — React/Vite Scaffold

> Create a React and Vite project structure for an interactive Discourse Architecture Dashboard. The dashboard should allow users to select architecture components and view information about their responsibilities. It should also include a request-flow visualization and a layered architectural view. Prioritize clean responsive design and keyboard accessibility.

## Initial AI Analysis and Verification

The initial AI analysis identified:

* Ember.js as the frontend
* Ruby on Rails as the backend/application framework
* PostgreSQL as the primary persistent database
* Redis as a caching/transient data system
* Sidekiq as the background job processor
* Plugins and themes as extension mechanisms

These findings were not accepted without verification.

| AI Finding                                     | Verification                                               | Final Result |
| ---------------------------------------------- | ---------------------------------------------------------- | ------------ |
| Ruby on Rails is the backend                   | Compared against Discourse repository/documentation        | Verified     |
| Ember.js is the frontend                       | Compared against Discourse project structure/documentation | Verified     |
| PostgreSQL is the primary database             | Compared against project documentation/configuration       | Verified     |
| Redis supports caching/transient data          | Compared against project documentation/configuration       | Verified     |
| Sidekiq handles background jobs                | Compared against project configuration/documentation       | Verified     |
| Discourse should be described as microservices | Compared against the actual project structure              | Corrected    |

### Important Correction

An overly simplified initial architectural description could make Discourse sound like a microservices-based system.

After verification, the project describes Discourse more accurately as a **modular web application with a client-server architecture and supporting services/background processing**.

The layered model in this project is therefore an analytical representation used to make the architecture easier to understand.

## AI Customization

The initial AI-generated concept was customized for the assignment by adding:

* Interactive architecture cards
* Component detail panels
* Responsibilities and connection lists
* Request-flow simulation
* Layered architecture visualization
* AI verification audit
* Prototype scope documentation
* Responsive behavior
* Keyboard-accessible controls
* Dedicated architecture and QA documentation

The prototype was intentionally kept smaller than the real Discourse platform so that the architectural concepts could be demonstrated clearly and tested thoroughly.

## Quality Assurance

Testing was performed on both the development and deployed versions of the application.

### Functional Testing

Tested:

* Architecture component selection
* Component detail display
* Close control
* Request simulation
* Disabled simulation state
* Simulation completion/reset
* Unexpected clicks
* Empty/default states

### Responsive Testing

Tested using browser developer tools at:

* Desktop: 1920 × 1080
* Tablet-sized viewport
* Mobile-sized viewport

The layout was checked for:

* Clipping
* Overlapping content
* Broken grids
* Horizontal overflow
* Readability
* Usable controls

### Browser Testing

Tested in:

* Chromium-based browser
* Firefox

Safari was not tested because the development environment is Windows-based.

### Console Testing

The deployed application was checked using browser developer tools.

Final testing showed:

* No uncaught JavaScript errors
* No visible console errors
* No broken asset requests

### Accessibility

The application was reviewed for:

* Keyboard navigation
* Visible focus states
* Button accessibility
* Logical tab order
* Readable content structure
* Responsive usability

### Production Build

The production build was tested with:

```bash
npm run build
```

The build completed successfully with no errors.

For the detailed QA record, see:

`docs/qa-testing.md`

## Project Documentation

Additional project documentation is available in:

* `docs/architecture.md` — Architecture analysis and verification
* `docs/qa-testing.md` — QA and testing record
* `prompts/ai-prompts.md` — AI prompts and development notes

## Sources Used for Verification

Architecture information was verified using official Discourse project resources and documentation, including the Discourse GitHub repository and official developer documentation.

The source material was used to verify component roles, technology choices, request flow concepts, and extension mechanisms rather than relying solely on AI-generated descriptions.

## Author

Denniz Garza

## License

This project is an educational prototype created for a software engineering course. It is not affiliated with or endorsed by Discourse.
