import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/profile.css";

function SamProfile() {
  return (
    <div className="hub">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo-wrap">
            <div className="rj-logo">RJ</div>
          </div>

          <div>
            <h2>Raymond James</h2>
            <p>Traveler Hub</p>
          </div>
        </div>

        <nav className="nav">
          <Link to="/">🏠 <span>Dashboard</span></Link>
          <Link to="/map">🗺️ <span>Traveler Map</span></Link>
          <Link to="/yearbook" className="active">
            📸 <span>Yearbook</span>
          </Link>
          <Link to="/assistant">✨ <span>AI Assistant</span></Link>
          <Link to="/resources">📁 <span>Resources</span></Link>
          <Link to="/community">💬 <span>Community</span></Link>
        </nav>
      </aside>

      <main className="main">

        <header className="profile-topbar">
          <Link to="/yearbook" className="back-link">
            ← Back to Yearbook
          </Link>

          <div className="user">
            <span>🔔</span>
            <div className="user-avatar">ST</div>
            <p>Hello, Sam</p>
          </div>
        </header>

        <section className="profile-hero panel">

          <div className="profile-avatar-large">
            ST
          </div>

          <div className="profile-main-info">
            <h1>Sam T.</h1>

            <p className="role">
              Transition Consultant
            </p>

            <p className="location">
              📍 Dallas, Texas (Home Office)
            </p>

            <div className="profile-tags">
              <span>Tech Expert</span>
              <span>3+ Years</span>
              <span>Problem Solver</span>
              <span>Team Player</span>
            </div>
          </div>

          <div className="profile-contact">
            <h3>Contact</h3>

            <p>✉️ sam.t@raymondjames.com</p>
            <p>📞 (214) 555-1234</p>
            <p>💬 Chat on Teams</p>
            <p>📅 Open in Outlook</p>
          </div>

          <div className="profile-manager">
            <h3>Manager</h3>
            <p>Jordan Lee</p>

            <h3>RJ Start Date</h3>
            <p>June 2021</p>
          </div>

        </section>

        <section className="profile-grid">

          {/* Professional */}

          <div className="profile-card-large panel">
            <h2>Professional</h2>

            <div className="info-list">

              <div>
                <strong>Years with RJ</strong>
                <p>3+ Years</p>
              </div>

              <div>
                <strong>Certifications</strong>
                <p>SIE</p>
              </div>

              <div>
                <strong>Specialties</strong>
                <p>
                  Branch Transitions,
                  Technology Support,
                  Advisor Onboarding
                </p>
              </div>

              <div>
                <strong>About Me</strong>
                <p>
                  I love solving problems,
                  helping advisors succeed,
                  and exploring new cities.
                </p>
              </div>

            </div>
          </div>

          {/* Travel Statistics */}

          <div className="profile-card-large panel">

            <div className="section-header">

              <Link
                to="/in-transit"
                className="card-title-link"
              >
                <h2>Travel Statistics →</h2>
              </Link>

              <button>This Year</button>

            </div>

            <div className="stats-layout">

              <div className="stat-list">

                <div>
                  <span>✈️</span>
                  <strong>374</strong>
                  <p>Flight Hours</p>
                </div>

                <div>
                  <span>📍</span>
                  <strong>73</strong>
                  <p>Routes Traveled</p>
                </div>

                <div>
                  <span>🌎</span>
                  <strong>40</strong>
                  <p>Airports Visited</p>
                </div>

                <div>
                  <span>🧳</span>
                  <strong>14</strong>
                  <p>States Visited</p>
                </div>

              </div>

              <div className="mini-map">
                <div>
                  <p>Most Frequent Route</p>
                  <strong>DFW ↔ CLT</strong>
                </div>
              </div>

            </div>

          </div>

          {/* Travel Map */}

          <div className="profile-card-large panel">
            <h2>Travel Map</h2>

            <div className="profile-map">
              <span className="map-point p1"></span>
              <span className="map-point p2"></span>
              <span className="map-point p3"></span>
              <span className="map-point p4"></span>
              <span className="map-point p5"></span>
            </div>

            <button className="outline-button">
              View Full Travel Map
            </button>
          </div>

          {/* Galleries */}

          <div className="profile-card-large panel">
            <h2>Travel Galleries</h2>

            <div className="gallery-row">

              <div>
                <div className="gallery-thumb">🏔️</div>
                <p>Nat Geo</p>
              </div>

              <div>
                <div className="gallery-thumb">🍽️</div>
                <p>Phone Eats First</p>
              </div>

              <div>
                <div className="gallery-thumb">🍦</div>
                <p>Sweet Tooth</p>
              </div>

              <div>
                <div className="gallery-thumb">⭐</div>
                <p>Americana</p>
              </div>

            </div>

            <button className="outline-button">
              View All Galleries
            </button>
          </div>

          {/* Recommendations */}

          <div className="profile-card-large panel">
            <h2>Recommendations</h2>

            <div className="recommendation-list">
              <p>🍴 Favorite Restaurants <span>›</span></p>
              <p>🏨 Favorite Hotels <span>›</span></p>
              <p>📍 Favorite Cities <span>›</span></p>
            </div>
          </div>

          {/* Assignment History */}

          <div className="profile-card-large panel">
            <h2>Assignment History</h2>

            <div className="timeline">

              <div>
                <strong>May 2024</strong>
                <p>Phoenix, AZ • Branch Transition</p>
              </div>

              <div>
                <strong>Mar 2024</strong>
                <p>Atlanta, GA • Advisor Onboarding</p>
              </div>

              <div>
                <strong>Jan 2024</strong>
                <p>Nashville, TN • Branch Transition</p>
              </div>

              <div>
                <strong>Nov 2023</strong>
                <p>Charlotte, NC • Technology Implementation</p>
              </div>

            </div>

            <button className="outline-button">
              View Full Assignment History
            </button>
          </div>

        </section>

        <section className="panel shoutouts">

          <h2>What Teammates Say</h2>

          <div>
            <p>
              “Sam is incredibly resourceful,
              dependable, and always willing
              to go the extra mile.”
            </p>

            <strong>— Alex Johnson</strong>
          </div>

          <div>
            <p>
              “A true asset to the transition team
              and our clients.”
            </p>

            <strong>— Taylor Morgan</strong>
          </div>

          <button className="outline-button">
            Send a Shoutout
          </button>

        </section>

      </main>
    </div>
  );
}

export default SamProfile;