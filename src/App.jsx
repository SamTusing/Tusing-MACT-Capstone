import "./styles/dashboard.css";

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="logo-block">
          <div className="logo-icon">RJ</div>
          <div>
            <h2>Traveler Hub</h2>
            <p>Transition Team</p>
          </div>
        </div>

        <nav>
          <a className="active">Dashboard</a>
          <a>Traveler Map</a>
          <a>Yearbook</a>
          <a>AI Assistant</a>
          <a>Resources</a>
          <a>Community</a>
        </nav>

        <div className="sidebar-card">
          <p className="small-label">This Week</p>
          <h3>50+ Travelers</h3>
          <p>Connected across active transition assignments.</p>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Raymond James Transition Consultants</p>
            <h1>RJ Traveler Hub</h1>
            <p className="subtitle">
              A centralized space for traveler connection, resources, and support.
            </p>
          </div>

          <button className="primary-button">View Resources</button>
        </header>

        <section className="dashboard-grid">
          <div className="map-card panel">
            <div className="panel-header">
              <div>
                <p className="small-label">Live Assignments</p>
                <h2>Traveler Map</h2>
              </div>
              <span className="status-pill">Interactive</span>
            </div>

            <div className="map-placeholder">
              <div className="map-dot dot-1"></div>
              <div className="map-dot dot-2"></div>
              <div className="map-dot dot-3"></div>
              <div className="map-dot dot-4"></div>
              <div className="map-line line-1"></div>
              <div className="map-line line-2"></div>
              <p>U.S. Traveler Assignment Map</p>
            </div>
          </div>

          <div className="chat-card panel">
            <div className="panel-header">
              <div>
                <p className="small-label">AI Support</p>
                <h2>Ask the Hub</h2>
              </div>
            </div>

            <div className="chat-window">
              <div className="message bot">
                Hi Sam — need a checklist, policy, or transition resource?
              </div>
              <div className="message user">
                Where can I find the branch setup guide?
              </div>
              <div className="message bot">
                I can point you to the resource center and related SOPs.
              </div>
            </div>

            <div className="chat-input">
              <span>Ask a question...</span>
              <button>Send</button>
            </div>
          </div>

          <div className="yearbook-card panel">
            <div className="panel-header">
              <div>
                <p className="small-label">Community</p>
                <h2>Traveler Yearbook</h2>
              </div>
              <span className="status-pill">Team Profiles</span>
            </div>

            <div className="profile-row">
              <div className="profile-card">
                <div className="avatar">ST</div>
                <h3>Sam</h3>
                <p>Dallas, TX</p>
              </div>

              <div className="profile-card">
                <div className="avatar">TC</div>
                <h3>Traveler</h3>
                <p>Charlotte, NC</p>
              </div>

              <div className="profile-card">
                <div className="avatar">RM</div>
                <h3>RM Lead</h3>
                <p>St. Petersburg, FL</p>
              </div>
            </div>
          </div>

          <div className="resources-card panel">
            <div className="panel-header">
              <div>
                <p className="small-label">Knowledge Base</p>
                <h2>Resource Links</h2>
              </div>
            </div>

            <div className="resource-list">
              <div className="resource-item">
                <span>Transition Checklist</span>
                <button>Open</button>
              </div>
              <div className="resource-item">
                <span>Travel & Per Diem Guide</span>
                <button>Open</button>
              </div>
              <div className="resource-item">
                <span>Branch Technology Setup</span>
                <button>Open</button>
              </div>
              <div className="resource-item">
                <span>Escalation Contacts</span>
                <button>Open</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;