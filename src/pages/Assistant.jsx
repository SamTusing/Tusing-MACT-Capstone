import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/assistant.css";
import TopBar from "../components/TopBar.jsx";

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


      <main className="assistant-page chatbot-theme">
        <TopBar />

  <div className="tiny-plane plane-a">✈</div>
<div className="tiny-plane plane-b">✈</div>
<div className="tiny-plane plane-c">✈</div>
<div className="tiny-plane plane-d">✈</div>
<div className="tiny-plane plane-e">✈</div>
<div className="tiny-plane plane-f">✈</div>

        <section className="chatbot-shell">
          <div className="chatbot-header">
            <div>
              <p className="label">Traveler Hub Assistant</p>

              <h1>How can I help today?</h1>

              <p className="chat-subtitle">
                Travel support, team connections, local recommendations,
                resources, and assignment guidance.
              </p>
            </div>

            <div className="assistant-status">
              <span className="online-dot"></span>
              Available
            </div>
          </div>

          <div className="chat-window-large">

            <div className="chat-message bot">
              <div className="bot-avatar">✨</div>

              <div className="message-content">
                Hi Sam! I'm your Traveler Hub Assistant.
                I can help with travel resources, city recommendations,
                team connections, and assignment support.
              </div>
            </div>

            <div className="chat-message user-preview">
              <div className="message-content">
                Where can I find the transition checklist?
              </div>
            </div>

            <div className="chat-message bot">
              <div className="bot-avatar">✨</div>

              <div className="message-content">
                The Transition Checklist can be found in the Resource Center
                under Transition Process. I can also surface related
                templates and onboarding documents.
              </div>
            </div>
          </div>

          <div className="suggested-prompts">
            <button>📋 Transition Checklist</button>
            <button>🍴 Nashville Recommendations</button>
            <button>✈ Per Diem Guidance</button>
            <button>👥 Find Travelers in Phoenix</button>
            <button>🏨 Hotel Recommendations</button>
            <button>📁 Technology Resources</button>
          </div>

          <div className="chat-input-bar">
            <span>Ask the Traveler Hub Assistant...</span>

            <button>
              ➤
            </button>
          </div>
        </section>

        <aside className="chat-helper-panel">

          <h3>I Can Help With</h3>

          <div className="helper-card">
            📋 Resource Lookup
          </div>

          <div className="helper-card">
            🍴 City Recommendations
          </div>

          <div className="helper-card">
            👥 Traveler Directory
          </div>

          <div className="helper-card">
            ✈ Travel Guidance
          </div>

          <div className="helper-card">
            🗺 Assignment Locations
          </div>

          <div className="helper-card">
            💰 Expense Support
          </div>

        </aside>

      </main>
    </div>
  );
}

export default Assistant;