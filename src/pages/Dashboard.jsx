import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

import rjLogo from "../assets/RJlogo.jpg";
import TravelerHubMap from "../components/TravelerHubMap";
import { galleryCategories } from "../data/galleryImages";
import TopBar from "../components/TopBar";

const cityRecommendations = [
  {
    category: "Phone Eats First",
    badgeKey: "phoneEats",
    title: "Tomukun Noodle Bar",
    city: "Ann Arbor, MI",
    note: "Traveler-approved ramen stop.",
  },
  {
    category: "Sweet Tooth",
    badgeKey: "sweetTooth",
    title: "Scoops Homemade Ice Cream",
    city: "Little Rock, AR",
    note: "Best cotton candy ice cream.",
  },
  {
    category: "Americana",
    badgeKey: "americana",
    title: "The Sixth Floor Museum",
    city: "Dallas, TX",
    note: "Great local history stop.",
  },
];

const memoryImages = Object.entries(galleryCategories)
  .flatMap(([key, category]) =>
    category.images.slice(0, 2).map((image) => ({
      image,
      title: category.title,
      badge: category.badge,
      key,
    }))
  )
  .slice(0, 8);

function Dashboard() {
  const [mapMode, setMapMode] = useState("active");
  const [memoryIndex, setMemoryIndex] = useState(0);

  const currentMemory = memoryImages[memoryIndex];

  const nextMemory = () => {
    setMemoryIndex((prev) =>
      prev === memoryImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousMemory = () => {
    setMemoryIndex((prev) =>
      prev === 0 ? memoryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="hub">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo-wrap">
            <img src={rjLogo} alt="Raymond James Logo" className="rj-logo-img" />
          </div>

          <div>
            <h2>Raymond James</h2>
            <p>Traveler Hub</p>
          </div>
        </div>

        <nav className="nav">
          <Link to="/" className="active">🏠 <span>Dashboard</span></Link>
          <Link to="/map">🗺️ <span>Traveler Map</span></Link>
          <Link to="/yearbook">📸 <span>Yearbook</span></Link>
          <Link to="/assistant">✨ <span>AI Assistant</span></Link>
          <Link to="/resources">📁 <span>Resources</span></Link>
          <Link to="/community">💬 <span>Community</span></Link>
        </nav>

        <div className="mission-card">
          <div className="plane">✈</div>
          <p>On the road so our clients can stay on track.</p>
          <small>We are RJ. We travel together.</small>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <p>Expense Guidelines ›</p>
          <p>Per Diem Rates ›</p>
          <p>IT Support Portal ›</p>
          <p>Travel Policy ›</p>
        </div>
      </aside>

      <main className="main">
       <TopBar />

        <section className="content-grid">
          <div className="left-column">
            <section className="panel map-panel">
              <div className="section-header">
                <div>
                  <p className="label">Traveler Map</p>
                  <h2>Explore the Traveler Network</h2>
                </div>

                <Link to="/map">Open Full Map →</Link>
              </div>

              <div className="map-mode-buttons">
                <button
                  className={mapMode === "active" ? "active" : ""}
                  onClick={() => setMapMode("active")}
                >
                  Active Travelers
                </button>

                <button
                  className={mapMode === "recommendations" ? "active" : ""}
                  onClick={() => setMapMode("recommendations")}
                >
                  City Recommendations
                </button>

                <button
                  className={mapMode === "memories" ? "active" : ""}
                  onClick={() => setMapMode("memories")}
                >
                  Yearbook Memories
                </button>
              </div>

              {mapMode === "active" && (
                <div className="dashboard-d3-map">
                  <TravelerHubMap />
                </div>
              )}

              {mapMode === "recommendations" && (
                <div className="dashboard-recommendations-preview">
                  {cityRecommendations.map((item) => (
                    <div className="dashboard-rec-card" key={item.title}>
                      <img
                        src={galleryCategories[item.badgeKey].badge}
                        alt={item.category}
                      />
                      <div>
                        <span>{item.category}</span>
                        <h3>{item.title}</h3>
                        <p>{item.city}</p>
                        <small>{item.note}</small>
                      </div>
                    </div>
                  ))}

                  <Link to="/map" className="preview-link">
                    View all city recommendations →
                  </Link>
                </div>
              )}

              {mapMode === "memories" && currentMemory && (
                <div className="dashboard-memory-carousel">
                  <button onClick={previousMemory}>‹</button>

                  <div className="memory-slide">
                    <img src={currentMemory.image} alt={currentMemory.title} />
                    <div className="memory-caption">
                      <img src={currentMemory.badge} alt={currentMemory.title} />
                      <div>
                        <span>Yearbook Memory</span>
                        <h3>{currentMemory.title}</h3>
                      </div>
                    </div>
                  </div>

                  <button onClick={nextMemory}>›</button>
                </div>
              )}
            </section>

            <section className="panel">
              <div className="section-header">
                <div>
                  <p className="label">Traveler Yearbook</p>
                  <h2>Team Directory</h2>
                </div>

                <Link to="/yearbook">View All Travelers →</Link>
              </div>

              <div className="profiles">
                <Link to="/sam-profile" className="profile-link">
                  <div className="profile">
                    <div className="photo">S</div>
                    <h3>Sam T.</h3>
                    <p>Transition Consultant</p>
                    <div className="tags">
                      <span>Tech Expert</span>
                      <span>3+ Years</span>
                    </div>
                    <div className="icons">💬 ✉️ 🔗</div>
                  </div>
                </Link>

                {["Diejonia A.", "Brooke D.", "Jamie F."].map((name) => (
                  <div className="profile" key={name}>
                    <div className="photo">{name[0]}</div>
                    <h3>{name}</h3>
                    <p>Transition Consultant</p>
                    <div className="tags">
                      <span>Tech Expert</span>
                      <span>3+ Years</span>
                    </div>
                    <div className="icons">💬 ✉️ 🔗</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="section-header">
                <div>
                  <p className="label">Resource Center</p>
                  <h2>Helpful Links</h2>
                </div>

                <Link to="/resources">Open Resources →</Link>
              </div>

              <div className="resources">
                <div>📋 Transition Process</div>
                <div>✈️ Travel & Expenses</div>
                <div>💻 Technology & Tools</div>
                <div>📄 Forms & Templates</div>
                <div>🎓 Training & Learning</div>
                <div>👥 People & Contacts</div>
              </div>
            </section>
          </div>

          <aside className="right-column">
            <section className="panel assistant">
              <div className="section-header">
                <div>
                  <p className="label">RJ Assistant</p>
                  <h2>AI Support</h2>
                </div>

                <span className="online">● Online</span>
              </div>

              <div className="chat-bubble user-msg">
                Where can I find the transition checklist?
              </div>

              <div className="chat-bubble bot-msg">
                You can find it in the Resource Center under “Transition Process.”
                <button>Open Transition Checklist</button>
              </div>

              <div className="prompt">Ask me anything... ➤</div>
            </section>

            <section className="panel community">
              <div className="section-header">
                <div>
                  <p className="label">Community Highlights</p>
                  <h2>Recent Posts</h2>
                </div>

                <Link to="/community">View All →</Link>
              </div>

              <div className="post">
                <strong>Great experience in Phoenix this week!</strong>
                <p>Shoutout to the team there.</p>
              </div>

              <div className="post">
                <strong>Restaurant recommendation in Nashville?</strong>
                <p>Drop your favorites.</p>
              </div>

              <div className="post">
                <strong>Reminder: new per diem rates</strong>
                <p>Effective June 1st.</p>
              </div>
            </section>
          </aside>
        </section>

        <footer className="bottom-bar">
          <span>📅 Upcoming Trips</span>
          <span>Chicago, IL — May 20–24</span>
          <span>Nashville, TN — May 27–31</span>
          <strong>Different cities. Same mission. One team.</strong>
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;