import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/resources.css";
import TopBar from "../components/TopBar.jsx";


<a
  href="/documents/SIEStudyGuide.docx"
  target="_blank"
  rel="noreferrer"
  className="study-link"
>
  📄 SIE Study Guide
</a>

function Resources() {
  return (
    <div className="hub">
      <aside className="sidebar">
        <div className="brand">
          <div className="rj-logo">RJ</div>

          <div>
            <h2>Raymond James</h2>
            <p>Traveler Hub</p>
          </div>
              <main className="main">
              <TopBar />
            </main>
        </div>

        <nav className="nav">
          <Link to="/">🏠 Dashboard</Link>
          <Link to="/map">🗺️ Traveler Map</Link>
          <Link to="/yearbook">📸 Yearbook</Link>
          <Link to="/assistant">✨ AI Assistant</Link>
          <Link to="/resources" className="active">
            📁 Resources
          </Link>
          <Link to="/community">💬 Community</Link>
        </nav>
      </aside>

      <main className="resources-page">
        <header className="resources-hero">
          <div>
            <p className="label">Resource Center</p>

            <h1>Everything Travelers Need</h1>

            <p className="hero-subtitle">
              Centralized tools, documents, study materials,
              policies, and travel resources.
            </p>
          </div>
        </header>

        <div className="resource-search">
          Search resources, documents, policies...
        </div>

        {/* Featured Resources */}

        <section className="resource-section">
          <div className="section-header">
            <div>
              <p className="label">Featured</p>
              <h2>Most Used Resources</h2>
            </div>
          </div>

          <div className="resource-grid">
            <div className="resource-card">
              📋
              <h3>Transition Checklist</h3>
              <p>Standard conversion process checklist.</p>
            </div>

            <div className="resource-card">
              ✈️
              <h3>Travel Policy</h3>
              <p>Current travel guidelines.</p>
            </div>

            <div className="resource-card">
              💰
              <h3>Expense Portal</h3>
              <p>Expense submission resources.</p>
            </div>

            <div className="resource-card">
              👥
              <h3>Traveler Directory</h3>
              <p>Find consultants and managers.</p>
            </div>
          </div>
        </section>

        {/* Study Corner */}

        <section className="resource-section">
          <div className="section-header">
            <div>
              <p className="label">Professional Development</p>
              <h2>Study Corner</h2>
            </div>
          </div>

          <div className="study-grid">
            <div className="study-card">
              <h3>SIE Exam Resources</h3>

              <p>
                Study guides, quick notes, formulas,
                and licensing preparation materials.
              </p>

            <a
  href="/documents/SIEStudyGuide.docx"
  target="_blank"
  rel="noreferrer"
  className="study-link"
>
  📄 SIE Study Guide
</a>

              <a href="/" className="study-link">
                📄 SIE Formula Sheet
              </a>

              <a href="/" className="study-link">
                📄 Suitability Cheat Sheet
              </a>
            </div>

            <div className="study-card">
              <h3>Series 7 Resources</h3>

              <p>
                Licensing preparation materials,
                options guides, and study references.
              </p>

              <a href="/" className="study-link">
                📄 Series 7 Study Guide
              </a>

              <a href="/" className="study-link">
                📄 Options Cheat Sheet
              </a>

              <a href="/" className="study-link">
                📄 Taxation Notes
              </a>
            </div>

            <div className="study-card progress-card">
              <h3>My Progress</h3>

              <p>SIE Completed ✓</p>

              <div className="progress-label">
                Series 7 Progress
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "56%" }}
                />
              </div>

              <span>Chapter 14 of 16</span>
            </div>
          </div>
        </section>

        {/* Travel Resources */}

        <section className="resource-section">
          <div className="section-header">
            <div>
              <p className="label">Travel</p>
              <h2>Travel Resources</h2>
            </div>
          </div>

          <div className="resource-grid">
            <div className="resource-card">
              ✈️
              <h3>Per Diem Rates</h3>
            </div>

            <div className="resource-card">
              🚗
              <h3>Rental Car Guide</h3>
            </div>

            <div className="resource-card">
              🏨
              <h3>Hotel Recommendations</h3>
            </div>

            <div className="resource-card">
              🛫
              <h3>Airport Lounge Guide</h3>
            </div>
          </div>
        </section>

        {/* Technology */}

        <section className="resource-section">
          <div className="section-header">
            <div>
              <p className="label">Technology</p>
              <h2>Technology & Tools</h2>
            </div>
          </div>

          <div className="resource-grid">
            <div className="resource-card">
              💻
              <h3>RJ Connect</h3>
            </div>

            <div className="resource-card">
              📊
              <h3>Salesforce</h3>
            </div>

            <div className="resource-card">
              💬
              <h3>Microsoft Teams</h3>
            </div>

            <div className="resource-card">
              🛠️
              <h3>IT Help Desk</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Resources;