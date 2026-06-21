import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";
import "../styles/travelerMap.css";

import TravelerHubMap from "../components/TravelerHubMap";
import { galleryCategories } from "../data/galleryImages";
import TopBar from "../components/TopBar.jsx";

const assignments = [
  {
    city: "Dallas, TX",
    type: "Branch Transition",
    dates: "May 12 – May 30",
    status: "In Progress",
  },
  {
    city: "Charlotte, NC",
    type: "Technology Conversion",
    dates: "May 10 – May 28",
    status: "In Progress",
  },
  {
    city: "St. Petersburg, FL",
    type: "Advisory Support",
    dates: "May 8 – May 26",
    status: "Upcoming",
  },
  {
    city: "Denver, CO",
    type: "Branch Optimization",
    dates: "May 15 – Jun 2",
    status: "Upcoming",
  },
];

const recommendations = [
  {
    city: "Dallas, TX",
    category: "food",
    tag: "Phone Eats First",
    badgeKey: "phoneEats",
    name: "Pecan Lodge BBQ",
    by: "Alex R.",
  },
  {
    city: "Dallas, TX",
    category: "activities",
    tag: "Americana",
    badgeKey: "americana",
    name: "The Sixth Floor Museum",
    by: "Chris D.",
  },
  {
    city: "Nashville, TN",
    category: "entertainment",
    tag: "Americana",
    badgeKey: "americana",
    name: "The Gulch Live Music",
    by: "Sam T.",
  },
  {
    city: "Nashville, TN",
    category: "food",
    tag: "Phone Eats First",
    badgeKey: "phoneEats",
    name: "Butcher & Bee",
    by: "Brooke D.",
  },
  {
    city: "Phoenix, AZ",
    category: "coffee",
    tag: "Phone Eats First",
    badgeKey: "phoneEats",
    name: "Cartel Roasting Co.",
    by: "Jamie F.",
  },
  {
    city: "Phoenix, AZ",
    category: "hotels",
    tag: "Flighty",
    badgeKey: "flighty",
    name: "The Camby Hotel",
    by: "Alex R.",
  },
  {
    city: "Charlotte, NC",
    category: "food",
    tag: "Phone Eats First",
    badgeKey: "phoneEats",
    name: "Optimist Hall",
    by: "Sam T.",
  },
  {
    city: "Charlotte, NC",
    category: "coffee",
    tag: "Phone Eats First",
    badgeKey: "phoneEats",
    name: "Not Just Coffee",
    by: "Traveler C.",
  },
];

const moments = [
  {
    tag: "Nat Geo",
    badgeKey: "natGeo",
    title: "Zion National Park",
    city: "Utah",
  },
  {
    tag: "Americana",
    badgeKey: "americana",
    title: "Date night before branch cutover",
    city: "Colorado",
  },
  {
    tag: "Phone Eats First",
    badgeKey: "phoneEats",
    title: "Best burger in Denver",
    city: "Denver, CO",
  },
  {
    tag: "Sweet Tooth",
    badgeKey: "sweetTooth",
    title: "Salt & Straw never disappoints",
    city: "Portland, OR",
  },
  {
    tag: "Flighty",
    badgeKey: "flighty",
    title: "Early morning airport run",
    city: "Seattle, WA",
  },
];

function TravelerMap() {
  const [selectedCity, setSelectedCity] = useState("Dallas, TX");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const cities = [...new Set(recommendations.map((item) => item.city))];

  const categories = [
    "all",
    "food",
    "entertainment",
    "activities",
    "hotels",
    "coffee",
  ];

  const filteredRecommendations = recommendations.filter((item) => {
    const cityMatch = item.city === selectedCity;
    const categoryMatch =
      selectedCategory === "all" || item.category === selectedCategory;

    return cityMatch && categoryMatch;
  });

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
<TopBar />
        <nav className="nav dark-nav">
          <Link to="/">🏠 <span>Dashboard</span></Link>
          <Link to="/map" className="active">🗺️ <span>Traveler Map</span></Link>
          <Link to="/yearbook">📸 <span>Yearbook</span></Link>
          <Link to="/assistant">✨ <span>AI Assistant</span></Link>
          <Link to="/resources">📁 <span>Resources</span></Link>
          <Link to="/community">💬 <span>Community</span></Link>
        </nav>

        <div className="quick-filter-card">
          <p>Quick Filters</p>
          <button className="active">🌐 All Regions</button>
          <button>🗓️ Active Assignments</button>
          <button>✅ Upcoming</button>
          <button>📍 Completed</button>
        </div>

        <div className="traveler-count-card">
          <p>This Week</p>
          <h2>50+ Travelers</h2>
          <span>Across 26 active assignments</span>
          <div className="tiny-chart"></div>
        </div>
      </aside>


      <main className="traveler-map-page">
        <header className="map-page-header">
          <div>
            <h1>Traveler Map</h1>
            <p>
              See where our team is, what they’re working on, and what they
              recommend.
            </p>
          </div>

          <div className="map-header-actions">
            <div className="map-search">🔍 Search city, traveler, or branch...</div>
            <button>▣ Map Layers</button>
            <button className="add-rec">＋ Add Recommendation</button>
          </div>
        </header>

        <section className="map-dashboard-grid">
          <section className="main-map-card">
            <TravelerHubMap />
          </section>

          <aside className="city-recs-panel panel">
            <div className="city-recs-header">
              <div>
                <h2>City Recommendations</h2>
                <p>Traveler-tested places by city and category.</p>
              </div>

              <select
                className="city-select"
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedCategory("all");
                }}
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div className="rec-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={selectedCategory === category ? "active" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all"
                    ? "All"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="recommendation-cards">
              {filteredRecommendations.map((item) => (
                <div className="recommendation-tile" key={item.name}>
                  <div className="rec-image">
                    <img
                      src={galleryCategories[item.badgeKey].badge}
                      alt={item.tag}
                    />
                  </div>

                  <span>{item.tag}</span>
                  <h3>{item.name}</h3>
                  <p>{item.city}</p>
                  <small>★★★★★ · by {item.by}</small>
                </div>
              ))}
            </div>

            {filteredRecommendations.length === 0 && (
              <div className="empty-recommendations">
                No recommendations yet for this category.
              </div>
            )}

            <button className="wide-button">
              View All {selectedCity} Recommendations →
            </button>
          </aside>

          <section className="active-assignments-card panel">
            <div className="section-header">
              <h2>Active Assignments</h2>
              <Link to="/map">View All →</Link>
            </div>

            {assignments.map((assignment) => (
              <div className="assignment-row" key={assignment.city}>
                <div>
                  <strong>📍 {assignment.city}</strong>
                  <p>{assignment.type}</p>
                  <small>{assignment.dates}</small>
                </div>

                <span>{assignment.status}</span>
              </div>
            ))}
          </section>

          <section className="city-spotlight-card panel">
            <div className="spotlight-header">
              <div>
                <p>City Spotlight</p>
                <h2>{selectedCity}</h2>
              </div>

              <span>● Active</span>
            </div>

            <div className="spotlight-image">🌆</div>

            <div className="spotlight-stats">
              <div>🍴<strong>24</strong><span>Food</span></div>
              <div>🎵<strong>18</strong><span>Entertainment</span></div>
              <div>🚶<strong>12</strong><span>Activities</span></div>
              <div>🏨<strong>7</strong><span>Hotels</span></div>
            </div>

            <div className="top-tip">
              <strong>Top Tip from Travelers</strong>
              <p>
                “Check the local traveler recommendations before your first
                evening in town.” — Sam T.
              </p>
            </div>
          </section>

          <section className="traveler-moments-wide panel">
            <div className="section-header">
              <h2>Traveler Moments</h2>
              <Link to="/yearbook">View All →</Link>
            </div>

            <div className="moments-strip">
              {moments.map((moment) => (
                <div className="moment-tile" key={moment.title}>
                  <div className="moment-photo">
                    <img
                      src={galleryCategories[moment.badgeKey].badge}
                      alt={moment.tag}
                    />
                  </div>

                  <span>{moment.tag}</span>
                  <h3>{moment.title}</h3>
                  <p>{moment.city}</p>
                </div>
              ))}
            </div>

            <div className="moment-input">
              Share a moment from your travels... 🖼️
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default TravelerMap;