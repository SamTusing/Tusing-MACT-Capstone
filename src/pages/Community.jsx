import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/community.css";
import { galleryCategories } from "../data/galleryImages";
import TopBar from "../components/TopBar";

function Community() {
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
        <TopBar />

        <nav className="nav">
          <Link to="/">🏠 Dashboard</Link>
          <Link to="/map">🗺️ Traveler Map</Link>
          <Link to="/yearbook">📸 Yearbook</Link>
          <Link to="/assistant">✨ AI Assistant</Link>
          <Link to="/resources">📁 Resources</Link>
          <Link to="/community" className="active">
            💬 Community
          </Link>
        </nav>
      </aside>

      <main className="community-page">
        <header className="community-hero">
          <div>
            <p className="label">Community Hub</p>
            <h1>Stay Connected</h1>

            <p className="hero-subtitle">
              Share experiences, recommendations, events,
              and moments from the road.
            </p>
          </div>
        </header>

        <section className="community-layout">

          <div className="community-main">

            <div className="create-post-card">
              <div className="create-avatar">ST</div>

              <div className="post-placeholder">
                Share an update with fellow travelers...
              </div>

              <button>Post</button>
            </div>

            <div className="community-post">
              <div className="post-header">
                <div className="post-avatar">ST</div>

                <div>
                  <h3>Sam T.</h3>
                  <span>Dallas, TX</span>
                </div>
              </div>

              <p>
                Found an amazing sushi spot while traveling
                through Madison this week. Definitely adding
                it to my recommendations list.
              </p>

              <div className="post-actions">
                👍 12 Likes · 💬 4 Comments
              </div>
            </div>

            <div className="community-post">
              <div className="post-header">
                <div className="post-avatar">AR</div>

                <div>
                  <h3>Alex R.</h3>
                  <span>Denver, CO</span>
                </div>
              </div>

              <p>
                Anyone have favorite airport lounges in
                Charlotte? Heading there next week.
              </p>

              <div className="post-actions">
                👍 8 Likes · 💬 7 Comments
              </div>
            </div>

            <section className="groups-section">
              <div className="section-header">
                <div>
                  <p className="label">Traveler Groups</p>
                  <h2>Find Your People</h2>
                </div>
              </div>

            <div className="group-grid">
  {Object.entries(galleryCategories).map(([key, category]) => (
    <div
      key={key}
      className="group-card-image"
      style={{
        backgroundImage: `url(${category.badge})`,
      }}
    >
      <div className="group-card-overlay">
        <h3>{category.title}</h3>
      </div>
    </div>
  ))}
</div>
            </section>

            <section className="book-club-card">
              <div className="section-header">
                <div>
                  <p className="label">Traveler Book Club</p>
                  <h2>Now Reading</h2>
                </div>
              </div>

              <div className="book-club-content">
                <div className="book-cover">
                  📚
                </div>

                <div>
                  <h3>The Midnight Library</h3>

                  <p>
                    Join fellow travelers in monthly book
                    discussions, recommendations, and virtual
                    meetups.
                  </p>

                  <button className="join-book-club">
                    Join Book Club
                  </button>
                </div>
              </div>
            </section>

          </div>

          <aside className="community-sidebar">

            <div className="sidebar-card">
              <h3>Traveler Spotlight</h3>

              <div className="spotlight-avatar">AR</div>

              <h4>Alex R.</h4>

              <p>Most Active Contributor</p>

              <span>12 Posts This Month</span>
            </div>

            <div className="sidebar-card">
              <h3>Upcoming Events</h3>

              <ul>
                <li>☕ Traveler Coffee Chat</li>
                <li>📚 Book Club Meeting</li>
                <li>🍻 Traveler Happy Hour</li>
                <li>🎓 Series 7 Study Group</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>Trending Cities</h3>

              <ul>
                <li>Nashville</li>
                <li>Phoenix</li>
                <li>Charlotte</li>
                <li>Madison</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>Travelers On The Road</h3>

              <ul>
                <li>ST → Phoenix</li>
                <li>AR → Charlotte</li>
                <li>JP → Nashville</li>
                <li>BD → Seattle</li>
              </ul>
            </div>

          </aside>

        </section>
      </main>
    </div>
  );
}

export default Community;