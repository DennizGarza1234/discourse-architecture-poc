import { useState } from "react";
import "./App.css";

const components = {
  ember: {
    label: "Presentation",
    name: "Ember.js",
    description:
      "The frontend framework used by Discourse to build the browser-based user interface.",
    responsibilities: [
      "Renders the user interface",
      "Handles user interaction",
      "Manages client-side application behavior",
      "Communicates with the backend API",
    ],
    connectsTo: [
      "Ruby on Rails",
    ],
  },

  rails: {
    label: "Application",
    name: "Ruby on Rails",
    description:
      "The primary backend application layer responsible for business logic, APIs, authentication, and communication with data services.",
    responsibilities: [
      "Processes API requests",
      "Handles application logic",
      "Manages authentication and authorization",
      "Communicates with PostgreSQL and Redis",
    ],
    connectsTo: [
      "Ember.js",
      "PostgreSQL",
      "Redis",
      "Sidekiq",
    ],
  },

  postgres: {
    label: "Persistence",
    name: "PostgreSQL",
    description:
      "The primary persistent database used to store application data.",
    responsibilities: [
      "Stores persistent application records",
      "Maintains relational data",
      "Provides durable data storage",
      "Supports application queries",
    ],
    connectsTo: [
      "Ruby on Rails",
    ],
  },

  redis: {
    label: "Caching",
    name: "Redis",
    description:
      "A data store used by Discourse for caching and transient data.",
    responsibilities: [
      "Provides fast temporary data access",
      "Supports caching",
      "Stores transient application data",
      "Supports background job processing",
    ],
    connectsTo: [
      "Ruby on Rails",
      "Sidekiq",
    ],
  },

  sidekiq: {
    label: "Background",
    name: "Sidekiq",
    description:
      "The background job processing system used by Discourse to handle work outside the immediate request-response cycle.",
    responsibilities: [
      "Processes background jobs",
      "Handles asynchronous work",
      "Moves longer-running tasks away from user requests",
      "Works with Redis for job processing",
    ],
    connectsTo: [
      "Ruby on Rails",
      "Redis",
    ],
  },
};

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [requestRunning, setRequestRunning] = useState(false);

  const selectComponent = (component) => {
    setSelectedComponent(components[component]);
  };

  const simulateRequest = () => {
    setRequestRunning(true);

    setTimeout(() => {
      setRequestRunning(false);
    }, 2000);
  };

  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="eyebrow">ARCHITECTURE EXPLORER</p>
          <h1>Discourse Architecture</h1>
          <p className="subtitle">
            Explore the major components behind the Discourse platform.
          </p>
        </div>
      </header>

      <main className="main">
        <section className="overview">
          <h2>System Overview</h2>
          <p>
            Discourse is a modular, layered web application built around a
            Ruby on Rails backend, Ember.js frontend, PostgreSQL, Redis, and
            background processing.
          </p>
        </section>

        <section className="architecture">
          <div className="architecture-row">
            <button
              className="architecture-card frontend"
              onClick={() => selectComponent("ember")}
            >
              <span className="card-label">Presentation</span>
              <h3>Ember.js</h3>
              <p>Frontend user interface</p>
            </button>
          </div>

          <div className="connector">↓</div>

          <div className="architecture-row">
            <button
              className="architecture-card backend"
              onClick={() => selectComponent("rails")}
            >
              <span className="card-label">Application</span>
              <h3>Ruby on Rails</h3>
              <p>Backend and API layer</p>
            </button>
          </div>

          <div className="connector">↓</div>

          <div className="architecture-row services">
            <button
              className="architecture-card"
              onClick={() => selectComponent("postgres")}
            >
              <span className="card-label">Persistence</span>
              <h3>PostgreSQL</h3>
              <p>Persistent application data</p>
            </button>

            <button
              className="architecture-card"
              onClick={() => selectComponent("redis")}
            >
              <span className="card-label">Caching</span>
              <h3>Redis</h3>
              <p>Cache and transient data</p>
            </button>

            <button
              className="architecture-card"
              onClick={() => selectComponent("sidekiq")}
            >
              <span className="card-label">Background</span>
              <h3>Sidekiq</h3>
              <p>Background processing</p>
            </button>
          </div>
        </section>

        <section className="flow-section">
          <div className="section-heading">
            <span className="card-label">REQUEST FLOW</span>
            <h2>How a Request Moves Through Discourse</h2>
            <p>
              A typical request travels from the browser through the application
              layer before reaching the appropriate data or background-processing
              service.
            </p>
          </div>

          <button
            className="simulate-button"
            onClick={simulateRequest}
            disabled={requestRunning}
          >
            {requestRunning ? "Simulating Request..." : "Simulate Request"}
          </button>

          <div className="flow">
            <div className={`flow-step ${requestRunning ? "active" : ""}`}>              <span>01</span>
              <strong>Browser</strong>
              <p>User interacts with the Discourse interface.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className={`flow-step ${requestRunning ? "active" : ""}`}>
              <span>02</span>
              <strong>Ember.js</strong>
              <p>The frontend sends a request to the backend.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className={`flow-step ${requestRunning ? "active" : ""}`}>              <span>03</span>
              <strong>Rails</strong>
              <p>The application processes the request.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className={`flow-step ${requestRunning ? "active" : ""}`}>
              <span>04</span>
              <strong>Data Services</strong>
              <p>PostgreSQL, Redis, or Sidekiq handles the required operation.</p>
            </div>
          </div>
        </section>

        <section className="layers-section">
          <div className="section-heading">
            <span className="card-label">ARCHITECTURAL MODEL</span>
            <h2>Layered System View</h2>
            <p>
              Discourse separates presentation, application, persistence, and
              background-processing responsibilities across different components.
            </p>
          </div>

          <div className="layers">
            <div className="layer">
              <div className="layer-number">01</div>
              <div>
                <h3>Presentation Layer</h3>
                <p>
                  Ember.js provides the browser-based interface users interact with.
                </p>
              </div>
            </div>

            <div className="layer">
              <div className="layer-number">02</div>
              <div>
                <h3>Application Layer</h3>
                <p>
                  Ruby on Rails processes requests, applies application logic, and
                  exposes backend functionality.
                </p>
              </div>
            </div>

            <div className="layer">
              <div className="layer-number">03</div>
              <div>
                <h3>Data Layer</h3>
                <p>
                  PostgreSQL provides persistent storage while Redis supports caching
                  and transient data.
                </p>
              </div>
            </div>

            <div className="layer">
              <div className="layer-number">04</div>
              <div>
                <h3>Background Processing</h3>
                <p>
                  Sidekiq handles work that can be processed outside the immediate
                  request-response cycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="audit-section">
          <div className="section-heading">
            <span className="card-label">AI VERIFICATION</span>
            <h2>Architecture Audit</h2>
            <p>
              The initial architecture analysis was generated with AI and then
              compared against Discourse's official documentation and source code.
            </p>
          </div>

          <div className="audit-grid">
            <article className="audit-card">
              <span className="audit-status">VERIFIED</span>
              <h3>Ruby on Rails</h3>
              <p>
                AI identified Ruby on Rails as the primary backend framework.
                Discourse's repository confirms Rails as a core part of the
                application.
              </p>
            </article>

            <article className="audit-card">
              <span className="audit-status">VERIFIED</span>
              <h3>Ember.js</h3>
              <p>
                AI identified Ember.js as the frontend technology. This matches the
                structure and documentation of the Discourse project.
              </p>
            </article>

            <article className="audit-card">
              <span className="audit-status">CORRECTED</span>
              <h3>Architectural Style</h3>
              <p>
                An initial AI description could incorrectly simplify Discourse as a
                microservices system. The verified architecture is better described
                as a modular, layered web application.
              </p>
            </article>

            <article className="audit-card">
              <span className="audit-status">VERIFIED</span>
              <h3>Redis and Sidekiq</h3>
              <p>
                AI identified Redis for caching and transient data and Sidekiq for
                background processing. These roles were verified against the project
                configuration and documentation.
              </p>
            </article>
          </div>
        </section>

                <section className="scope-section">
          <div className="section-heading">
            <span className="card-label">PROTOTYPE SCOPE</span>
            <h2>What This Dashboard Demonstrates</h2>
            <p>
              This project is an architectural companion prototype. It
              represents major Discourse components and relationships without
              attempting to recreate the full Discourse platform.
            </p>
          </div>

          <div className="scope-grid">
            <article className="scope-card">
              <span className="card-label">INCLUDED</span>
              <h3>Architecture Visualization</h3>
              <p>
                Major components, responsibilities, relationships, and
                architectural layers.
              </p>
            </article>

            <article className="scope-card">
              <span className="card-label">INCLUDED</span>
              <h3>Interactive Exploration</h3>
              <p>
                Select components to inspect their responsibilities and
                connections.
              </p>
            </article>

            <article className="scope-card">
              <span className="card-label">INCLUDED</span>
              <h3>Request Simulation</h3>
              <p>
                A simplified visual demonstration of how a request can move
                through the system.
              </p>
            </article>

            <article className="scope-card">
              <span className="card-label">NOT INCLUDED</span>
              <h3>Full Discourse Platform</h3>
              <p>
                This prototype does not implement accounts, discussions,
                moderation, persistence, or the complete Discourse backend.
              </p>
            </article>
          </div>
        </section>

        {selectedComponent && (
          <section className="details">
            <div className="details-header">
              <div>
                <span className="card-label">
                  {selectedComponent.label}
                </span>

                <h2>{selectedComponent.name}</h2>
              </div>

              <button
                className="close-button"
                onClick={() => setSelectedComponent(null)}
              >
                Close
              </button>
            </div>

            <p className="details-description">
              {selectedComponent.description}
            </p>

            <h3>Key Responsibilities</h3>

            <ul>
              {selectedComponent.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>Connections</h3>

            <ul>
              {selectedComponent.connectsTo.map((component) => (
                <li key={component}>{component}</li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;