import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/assistant.css";

function Assistant() {
  return (
    <div className="hub">
      <aside className="sidebar">
        <div className="brand">
          <div className="rj-logo">RJ</div>

          <div>
            <h2>Raymond James</h2>
            <p>Traveler Hub</p>
          </div>
        </div>

        <nav className="nav">
          <Link to="/">🏠 Dashboard</Link>
          <Link to="/map">🗺️ Traveler Map</Link>
          <Link to="/yearbook">📸 Yearbook</Link>
          <Link to="/assistant" className="active">
            ✨ AI Assistant
          </Link>
          <Link to="/resources">📁 Resources</Link>
          <Link to="/community">💬 Community</Link>
        </nav>
      </aside>

      <main className="assistant-page">
        <section className="assistant-hero">
          <div>
            <p className="label">RJ Assistant</p>

            <h1>Traveler Hub Assistant</h1>

            <p className="hero-subtitle">
              Your digital travel companion for resources,
              recommendations, assignments, and support.
            </p>
          </div>

          <div className="assistant-status">
            <span className="online-dot"></span>
            Available
          </div>
        </section>

        <section className="assistant-top-grid">
          <div className="assistant-welcome-card">
            <div className="assistant-icon">✨</div>

            <div>
              <h2>Hello Sam</h2>

              <p>
                Welcome back. What can I help you find today?
              </p>
            </div>
          </div>

          <div className="assistant-quick-actions">
            <h3>Quick Actions</h3>

            <button>📋 Transition Checklist</button>
            <button>✈ Travel Policy</button>
            <button>💰 Expense Guidelines</button>
            <button>👥 Traveler Directory</button>
          </div>
        </section>

        <section className="assistant-chat-window">
          <div className="assistant-message">
            Welcome to the Traveler Hub Assistant.
          </div>

          <div className="assistant-message">
            I can help with travel recommendations,
            assignment support, resources, and team connections.
          </div>

          <div className="assistant-prompts">
            <button>
              Where can I find transition resources?
            </button>

            <button>
              Show travelers currently in Nashville
            </button>

            <button>
              Recommend restaurants in Phoenix
            </button>

            <button>
              Find airport lounge information
            </button>

            <button>
              Show travel policy
            </button>

            <button>
              Per diem guidance
            </button>
          </div>

          <div className="assistant-input">
            Ask me anything...
          </div>
        </section>

        <div className="assistant-content-grid">
          <section className="assistant-tools">
            <h2>Traveler Tools</h2>

            <div className="assistant-tools-grid">
              <div className="tool-card">
                ✈
                <h3>Travel Help</h3>
                <p>Flights, hotels, transportation.</p>
              </div>

              <div className="tool-card">
                🍴
                <h3>City Recommendations</h3>
                <p>Traveler-approved local favorites.</p>
              </div>

              <div className="tool-card">
                👥
                <h3>Traveler Directory</h3>
                <p>Connect with teammates.</p>
              </div>

              <div className="tool-card">
                📋
                <h3>Resources</h3>
                <p>Forms, templates, checklists.</p>
              </div>

              <div className="tool-card">
                💰
                <h3>Expenses</h3>
                <p>Per diem and reimbursement help.</p>
              </div>

              <div className="tool-card">
                🏨
                <h3>Hotel Finder</h3>
                <p>Recommended stays and lodging tips.</p>
              </div>
            </div>
          </section>

          <aside className="assistant-sidebar">
            <div className="panel">
              <h3>Recent Searches</h3>

              <ul>
                <li>Phoenix Restaurants</li>
                <li>Per Diem Policy</li>
                <li>Charlotte Travelers</li>
                <li>Airport Lounges</li>
              </ul>
            </div>

            <div className="panel">
              <h3>Popular Resources</h3>

              <ul>
                <li>Travel Policy</li>
                <li>Expense Portal</li>
                <li>Transition Checklist</li>
                <li>Technology Resources</li>
              </ul>
            </div>

            <div className="panel">
              <h3>Community Trending</h3>

              <ul>
                <li>Best Nashville Restaurants</li>
                <li>Favorite Airport Lounge</li>
                <li>Most Photographed Cities</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default Assistant;