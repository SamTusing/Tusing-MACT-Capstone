import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";
import "../styles/travelerMap.css";
import "../styles/yearbook.css";
import YearbookPhotoMap from "../components/YearbookPhotoMap";

import { galleryCategories } from "../data/galleryImages";
import TopBar from "../components/TopBar.jsx";

const travelers = [
  {
    name: "Sam T.",
    role: "Transition Consultant",
    location: "Dallas, TX",
    initials: "ST",
    tags: ["Leadership", "Tech Setup"],
    link: "/sam-profile",
  },
  {
    name: "Traveler C.",
    role: "Transition Consultant",
    location: "Charlotte, NC",
    initials: "TC",
    tags: ["Training", "Operations"],
  },
  {
    name: "TM Supervisor",
    role: "Team Lead",
    location: "St. Petersburg, FL",
    initials: "TS",
    tags: ["Leadership", "Strategy"],
  },
  {
    name: "Traveler D.",
    role: "Transition Consultant",
    location: "Atlanta, GA",
    initials: "TD",
    tags: ["Onboarding", "Support"],
  },
  {
    name: "Traveler E.",
    role: "Transition Consultant",
    location: "Denver, CO",
    initials: "TE",
    tags: ["Optimization", "Tech"],
  },
  {
    name: "Traveler F.",
    role: "Transition Consultant",
    location: "Nashville, TN",
    initials: "TF",
    tags: ["Client Support", "Training"],
  },
];

const featuredTravelers = [
  {
    name: "Sam T.",
    role: "Transition Consultant",
    location: "Dallas, TX",
    initials: "ST",
    tags: ["Leadership", "Tech Setup"],
    link: "/sam-profile",
    photoKeys: ["natGeo", "phoneEats", "sweetTooth"],
    recommendations: ["Tomukun Noodle Bar", "Eno Vino", "Maui Bread Company"],
  },
  {
    name: "Traveler C.",
    role: "Transition Consultant",
    location: "Charlotte, NC",
    initials: "TC",
    tags: ["Training", "Operations"],
    photoKeys: ["americana", "flighty", "howdy"],
    recommendations: ["Local coffee stop", "Team dinner spot", "Airport favorite"],
  },
  {
    name: "Alex R.",
    role: "Transition Consultant",
    location: "Denver, CO",
    initials: "AR",
    tags: ["Optimization", "Tech"],
    photoKeys: ["takeaHike", "phoneEats", "natGeo"],
    recommendations: ["Best burger in Denver", "Post-work hike", "Downtown coffee"],
  },
];

const moments = [
  { title: "Horseshoe Bend, AZ", traveler: "Jordan P.", badgeKey: "natGeo" },
  { title: "Austin taco stop", traveler: "Taylor M.", badgeKey: "phoneEats" },
  { title: "Fenway Park", traveler: "Chris D.", badgeKey: "americana" },
  { title: "Nashville pancakes", traveler: "Sam T.", badgeKey: "sweetTooth" },
  { title: "Airport morning run", traveler: "Alex R.", badgeKey: "flighty" },
];

function Yearbook() {
  const [activeTab, setActiveTab] = useState("feed");
  const [selectedCity, setSelectedCity] = useState(null);

  const categories = Object.entries(galleryCategories).slice(0, 8);

  const samPhotos = Object.entries(galleryCategories).flatMap(([key, category]) =>
    category.images.map((image, index) => ({
      id: `${key}-${index}`,
      image,
      category: category.title,
      badge: category.badge,
    }))
  );

  return (
    <div className="hub">
      <aside className="sidebar dark-sidebar">
        <div className="brand dark-brand">
          <div className="rj-logo blue-logo">RJ</div>

          <div>
            <h2>Traveler Hub</h2>
            <p>Transition Team</p>
          </div>
              <main className="main">
              <TopBar />
            </main>
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
            <p>
              A collection of moments, places, and memories from our travels
              across the country.
            </p>
          </div>

          <div className="yearbook-actions">
            <button className="add-photo-button">＋ Add a Photo</button>
            <div className="yearbook-search">Search photos or travelers... 🔍</div>
          </div>
        </header>

        <nav className="yearbook-tabs">
          <button
            className={activeTab === "feed" ? "active" : ""}
            onClick={() => setActiveTab("feed")}
          >
            Yearbook Feed
          </button>

          <button
            className={activeTab === "myPhotos" ? "active" : ""}
            onClick={() => setActiveTab("myPhotos")}
          >
            My Photos
          </button>

          <button
            className={activeTab === "featured" ? "active" : ""}
            onClick={() => setActiveTab("featured")}
          >
            Featured Travelers
          </button>

          <button
            className={activeTab === "photoMap" ? "active" : ""}
            onClick={() => setActiveTab("photoMap")}
          >
            Photo Map
          </button>

          <button
            className={activeTab === "directory" ? "active" : ""}
            onClick={() => setActiveTab("directory")}
          >
            Department Directory
          </button>
        </nav>

        {activeTab === "feed" && (
          <section className="yearbook-layout">
            <div className="yearbook-main">
              <section className="panel">
                <div className="section-header">
                  <div>
                    <p className="label">Traveler Directory</p>
                    <h2>Connect With Fellow Travelers</h2>
                  </div>

                  <button
                    className="text-button"
                    onClick={() => setActiveTab("directory")}
                  >
                    View All →
                  </button>
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
                    <div
                      className="category-card"
                      key={key}
                      style={{
                        backgroundImage: `url(${category.badge})`,
                      }}
                    >
                      <div className="category-overlay">
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

                  <button
                    className="text-button"
                    onClick={() => setActiveTab("myPhotos")}
                  >
                    View All →
                  </button>
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
        )}

        {activeTab === "myPhotos" && (
          <section className="panel">
            <div className="section-header">
              <div>
                <p className="label">My Photos</p>
                <h2>Sam’s Travel Gallery</h2>
              </div>
            </div>

            <div className="my-photos-grid">
              {samPhotos.map((photo) => (
                <div className="my-photo-card" key={photo.id}>
                  <img src={photo.image} alt={photo.category} />

                  <span>
                    <img src={photo.badge} alt={photo.category} />
                    {photo.category}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "featured" && (
          <section className="featured-travelers-grid">
            {featuredTravelers.map((traveler) => {
              const Card = traveler.link ? Link : "div";

              return (
                <Card
                  to={traveler.link}
                  className="panel featured-traveler-card"
                  key={traveler.name}
                >
                  <div className="featured-traveler-header">
                    <div className="directory-avatar">{traveler.initials}</div>

                    <div>
                      <h2>{traveler.name}</h2>
                      <p>{traveler.role}</p>
                      <small>{traveler.location}</small>
                    </div>
                  </div>

                  <div className="directory-tags">
                    {traveler.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <h3>Featured Photos</h3>

                  <div className="featured-photo-row">
                    {traveler.photoKeys.map((key) => (
                      <img
                        key={key}
                        src={galleryCategories[key].badge}
                        alt={galleryCategories[key].title}
                      />
                    ))}
                  </div>

                  <h3>Restaurant Recommendations</h3>

                  <div className="featured-rec-list">
                    {traveler.recommendations.map((rec) => (
                      <p key={rec}>🍴 {rec}</p>
                    ))}
                  </div>
                </Card>
              );
            })}
          </section>
        )}

        
       {activeTab === "photoMap" && (
  <section className="panel">
    <div className="section-header">
      <div>
        <p className="label">Photo Map</p>
        <h2>Memories Across the Country</h2>
      </div>
    </div>

    <YearbookPhotoMap onCitySelect={setSelectedCity} />
  </section>
)}

        {activeTab === "directory" && (
          <section className="panel">
            <div className="section-header">
              <div>
                <p className="label">Department Directory</p>
                <h2>Travelers & Managers</h2>
              </div>
            </div>

            <div className="directory-grid directory-grid-large">
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
        )}

        {selectedCity && (
  <div className="modal-backdrop" onClick={() => setSelectedCity(null)}>
    <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setSelectedCity(null)}>
        ×
      </button>

      <h2>{selectedCity.city}</h2>
      <p>{selectedCity.count} submitted yearbook memories from this city.</p>

      <div className="photo-placeholder-grid">
        {Object.values(galleryCategories)
          .flatMap((category) => category.images.slice(0, 2))
          .slice(0, selectedCity.count)
          .map((image, index) => (
            <img key={index} src={image} alt={`${selectedCity.city} memory`} />
          ))}
      </div>
    </div>
  </div>
)}
      </main>
    </div>
  );
}

export default Yearbook;