import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/yearbook.css";
import { galleryCategories } from "../data/galleryImages";

const travelers = [
  { name: "Sam T.", role: "Transition Consultant", location: "Dallas, TX", initials: "ST", tags: ["Leadership", "Tech Setup"], link: "/sam-profile" },
  { name: "Traveler C.", role: "Transition Consultant", location: "Charlotte, NC", initials: "TC", tags: ["Training", "Operations"] },
  { name: "RM Lead", role: "Team Lead", location: "St. Petersburg, FL", initials: "RM", tags: ["Leadership", "Strategy"] },
  { name: "Jordan P.", role: "Transition Consultant", location: "Atlanta, GA", initials: "JP", tags: ["Onboarding", "Support"] },
  { name: "Alex R.", role: "Transition Consultant", location: "Denver, CO", initials: "AR", tags: ["Optimization", "Tech"] },
  { name: "Brooke D.", role: "Transition Consultant", location: "Nashville, TN", initials: "BD", tags: ["Client Support", "Training"] },
];

const moments = [
  { title: "Horseshoe Bend, AZ", traveler: "Jordan P.", badgeKey: "natGeo" },
  { title: "Austin taco stop", traveler: "Taylor M.", badgeKey: "phoneEats" },
  { title: "Fenway Park", traveler: "Chris D.", badgeKey: "americana" },
  { title: "Nashville pancakes", traveler: "Sam T.", badgeKey: "sweetTooth" },
];

function Yearbook() {
  const categories = Object.entries(galleryCategories).slice(0, 8);

  return (
    <div className="hub">
      <aside className="sidebar dark-sidebar">
        <div className="brand dark-brand">
          <div className="rj-logo blue-logo">RJ</div>
          <div>
            <h2>Traveler Hub</h2>
            <p>Transition Team</p>
          </div>
        </div>

        <nav className="nav dark-nav">
          <Link to="/">🏠 <span>Dashboard</span></Link>
          <Link to="/map">🗺️ <span>Traveler Map</span></Link>
          <Link to="/yearbook" className="active">📸 <span>Yearbook</span></Link>
          <Link to="/assistant">✨ <span>AI Assistant</span></Link>
          <Link to="/resources">📁 <span>Resources</span></Link>
          <Link to="/community">💬 <span>Community</span></Link>
        </nav>

        <div className="traveler-count-card">
          <p>This Week</p>
          <h2>50+ Travelers</h2>
          <span>Connected across active transition assignments.</span>
        </div>
      </aside>

      <main className="yearbook-page">
        <header className="yearbook-header">
          <div>
            <h1>Traveler Yearbook</h1>
            <p>A collection of moments, places, and memories from our travels across the country.</p>
          </div>

          <div className="yearbook-actions">
            <button className="add-photo-button">＋ Add a Photo</button>
            <div className="yearbook-search">Search photos or travelers... 🔍</div>
          </div>
        </header>

        <nav className="yearbook-tabs">
          <button className="active">Yearbook Feed</button>
          <button>My Photos</button>
          <button>Featured Travelers</button>
          <button>Photo Map</button>
        </nav>

        <section className="yearbook-layout">
          <div className="yearbook-main">
            <section className="panel">
              <div className="section-header">
                <div>
                  <p className="label">Traveler Directory</p>
                  <h2>Connect With Fellow Travelers</h2>
                </div>
                <Link to="/yearbook">View All →</Link>
              </div>

              <div className="directory-grid">
                {travelers.map((traveler) => {
                  const Card = traveler.link ? Link : "div";

                  return (
                    <Card
                      to={traveler.link}
                      className="directory-card"
                      key={traveler.name}
                    >
                      <div className="directory-avatar">{traveler.initials}</div>

                      <div className="directory-info">
                        <h3>{traveler.name}</h3>
                        <p>{traveler.role}</p>
                        <small>{traveler.location}</small>

                        <div className="directory-tags">
                          {traveler.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="directory-actions">
                        <button>💬</button>
                        <button>✉️</button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </section>

            <section className="panel">
              <div className="section-header">
                <div>
                  <p className="label">Explore by Category</p>
                  <h2>Yearbook Collections</h2>
                </div>
              </div>

              <div className="category-showcase">
                {categories.map(([key, category]) => (
                  <div className="category-card" key={key}>
                    <img src={category.badge} alt={category.title} />
                    <div>
                      <h3>{category.title}</h3>
                      <p>{category.images.length} Photos</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="yearbook-side">
            <section className="panel">
              <div className="section-header">
                <div>
                  <p className="label">Latest Moments</p>
                  <h2>Yearbook Feed</h2>
                </div>
                <Link to="/yearbook">View All →</Link>
              </div>

              <div className="latest-moments-list">
                {moments.map((moment) => (
                  <div className="latest-moment-card" key={moment.title}>
                    <img
                      src={galleryCategories[moment.badgeKey].badge}
                      alt={moment.title}
                    />

                    <div>
                      <span>{galleryCategories[moment.badgeKey].title}</span>
                      <h3>{moment.title}</h3>
                      <p>Shared by {moment.traveler}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="load-more-button">Load More Photos</button>
            </section>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default Yearbook;