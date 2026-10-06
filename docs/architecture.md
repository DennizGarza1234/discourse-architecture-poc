# Discourse Architecture Analysis

## 1. Project Overview

Discourse is an open-source discussion platform designed for online communities.

For this project, I analyzed the Discourse codebase and documentation and created a companion application called the **Discourse Architecture Dashboard**.

The dashboard does not attempt to recreate the full Discourse platform. Instead, it provides an interactive way to explore major architectural components, their responsibilities, relationships, and a simplified request flow.

---

## 2. Architectural Style

Discourse is best understood as a **modular web application with a client-server architecture** centered around a Ruby on Rails backend and an Ember.js frontend.

For the purposes of this project, the system is also represented using a **layered architectural model**:

1. Presentation
2. Application
3. Data
4. Background Processing

The layered model is an analytical representation created for this project. It should not be interpreted as Discourse's official architectural terminology.

Discourse also provides extension mechanisms through plugins and themes, allowing functionality and presentation to be customized without changing the entire core application.

---

## 3. Major Components

### Ember.js

**Role:** Presentation / Frontend

Ember.js is used for the browser-based Discourse interface.

Responsibilities include:

* Rendering the user interface
* Handling user interaction
* Managing client-side application behavior
* Communicating with the backend

The Discourse developer documentation describes the frontend as communicating with the Rails backend through requests and responses.

---

### Ruby on Rails

**Role:** Application / Backend

Ruby on Rails is the primary backend framework for Discourse.

Responsibilities include:

* Processing application requests
* Providing backend APIs
* Applying application logic
* Handling authentication and authorization
* Communicating with data services

Rails acts as the central application layer connecting the frontend with persistent and supporting services.

---

### PostgreSQL

**Role:** Persistence / Database

PostgreSQL provides persistent storage for Discourse application data.

Responsibilities include:

* Storing persistent application records
* Maintaining relational data
* Providing durable storage
* Supporting application queries

---

### Redis

**Role:** Caching and Supporting Data Store

Redis is used by Discourse for caching and transient data.

It also supports background job processing through the Sidekiq system.

For this project, Redis is represented as a supporting data service rather than as the primary persistent database.

---

### Sidekiq

**Role:** Background Processing

Sidekiq is used to process background jobs outside the immediate request-response cycle.

Responsibilities include:

* Processing asynchronous jobs
* Handling work that does not need to block the immediate user request
* Working with Redis for job processing

This allows certain operations to be handled separately from the main web request.

---

## 4. Simplified Architecture

The major relationships represented by this project are:

```text
                Browser / User
                      |
                      v
                 Ember.js
                      |
                      v
                Ruby on Rails
                 /    |     \
                /     |      \
               v      v       v
        PostgreSQL   Redis   Sidekiq
```

This diagram is intentionally simplified.

The actual Discourse codebase contains additional components, infrastructure, plugins, themes, configuration, and implementation details that are outside the scope of this student prototype.

---

## 5. Request Flow

The dashboard represents a simplified request flow:

```text
Browser
   |
   v
Ember.js
   |
   v
Ruby on Rails
   |
   +------> PostgreSQL
   |
   +------> Redis
   |
   +------> Sidekiq
```

A typical interaction begins in the browser. The Ember.js frontend communicates with the Rails backend, which processes the request and interacts with the appropriate supporting systems.

The dashboard's **Request Simulation** is a visual demonstration of this conceptual flow. It is not executing an actual request against a Discourse server.

---

## 6. Extension Architecture

Discourse supports extension through mechanisms including:

* Plugins
* Themes

Plugins can add or modify application functionality, while themes can customize presentation and user interface behavior.

These extension mechanisms are important to Discourse's modular architecture.

---

## 7. AI-Assisted Architecture Analysis

AI was used as an initial architecture analysis tool.

The initial AI analysis identified:

* Ruby on Rails as the backend
* Ember.js as the frontend
* PostgreSQL as the primary database
* Redis as a caching/supporting data store
* Sidekiq for background processing

The AI analysis was then compared against Discourse's official repository and developer documentation.

### Verification Results

| Claim                                                 | Result    | Verification                                                   |
| ----------------------------------------------------- | --------- | -------------------------------------------------------------- |
| Ruby on Rails is the backend                          | Verified  | Discourse repository and developer documentation               |
| Ember.js is the frontend                              | Verified  | Discourse repository and developer documentation               |
| PostgreSQL is the primary persistent database         | Verified  | Discourse documentation/configuration                          |
| Redis is used for caching/supporting data             | Verified  | Discourse documentation/configuration                          |
| Sidekiq is used for background processing             | Verified  | Discourse installation/configuration documentation             |
| Discourse should be described simply as microservices | Corrected | The project uses a more accurate modular web-application model |

### Architectural Correction

A potential weakness in an initial AI-generated description was treating Discourse too broadly as a microservices-style system.

After verification, this project describes Discourse as a **modular web application with a Rails backend, Ember frontend, supporting data services, background processing, and extension mechanisms**.

The project's layered diagram is an analytical simplification created to make the architecture easier to understand.

---

## 8. Prototype Relationship to the Real System

The companion dashboard intentionally focuses on architectural understanding rather than duplicating Discourse functionality.

### Included

* Architecture component visualization
* Component responsibilities
* Component relationships
* Request-flow visualization
* Layered architecture model
* AI verification results
* Simplified request simulation
* Responsive interface
* Keyboard-accessible interactions

### Not Included

* User accounts
* Discussion creation
* Moderation
* Real database persistence
* Real Discourse API communication
* Actual background jobs
* Full plugin implementation
* Full Discourse frontend/backend functionality

The prototype therefore functions as an **interactive architectural visualizer**, rather than a replacement for Discourse.

---

## 9. Sources Used for Verification

The architecture analysis was verified using Discourse's official open-source repository and official developer documentation.

Primary sources:

* Discourse GitHub repository
* Discourse developer documentation
* Discourse installation/configuration documentation

These sources were preferred over third-party architecture summaries so that the prototype could be based on the actual project structure and documentation.
