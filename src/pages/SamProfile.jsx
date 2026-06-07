import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";
import "../styles/profile.css";
import "../styles/gallery.css";
import "../styles/recommendations.css";

import MiniTransitMap from "../components/MiniTransitMap";
import { galleryCategories } from "../data/galleryImages";

const restaurants = [
  {
    city: "Madison, WI",
    name: "Eno Vino",
    note: "Perfect rooftop for city views.",
    googleUrl: "https://www.google.com/search?q=Eno+Vino+Madison+WI",
  },
  {
    city: "New Orleans, LA",
    name: "Restaurant R’evolution",
    note: "Classy dining with local classics.",
    googleUrl: "https://www.google.com/search?q=Restaurant+R%27evolution+New+Orleans",
  },
  {
    city: "Fairhope, AL",
    name: "Little Bird",
    note: "Amazing cornbread.",
    googleUrl: "https://www.google.com/search?q=Little+Bird+Fairhope+AL",
  },
  {
    city: "Ann Arbor, MI",
    name: "Tomukun Noodle Bar",
    note: "The BEST ramen.",
    googleUrl: "https://www.google.com/search?q=Tomukun+Noodle+Bar+Ann+Arbor",
  },
  {
    city: "Little Rock, AR",
    name: "Scoops Homemade Ice Cream",
    note: "Best cotton candy ice cream.",
    googleUrl: "https://www.google.com/search?q=Scoops+Homemade+Ice+Cream+Little+Rock+AR",
  },
  {
    city: "Phoenix, AZ",
    name: "Théa",
    note: "Great Mediterranean rooftop.",
    googleUrl: "https://www.google.com/search?q=thea+Phoenix+AZ+Mediterranean+rooftop",
  },
  {
    city: "Seattle, WA",
    name: "Tilikum Place Cafe",
    note: "Good brunch near the Needle.",
    googleUrl: "https://www.google.com/search?q=Tilikum+Place+Cafe+Seattle",
  },
  {
    city: "Leavenworth, WA",
    name: "Larch",
    note: "Fantastic homemade pasta.",
    googleUrl: "https://www.google.com/search?q=Larch+Leavenworth+WA+restaurant",
  },
  {
    city: "Kihei, HI",
    name: "Maui Bread Company",
    note: "Best Hawaiian bakery.",
    googleUrl: "https://www.google.com/search?q=Maui+Bread+Company+Kihei+HI",
  },
];

function SamProfile() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openImage = (categoryKey, image, index) => {
    setSelectedCategory(categoryKey);
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedCategory(null);
    setSelectedIndex(0);
  };

  const showNextImage = () => {
    const images = galleryCategories[selectedCategory].images;
    const nextIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const showPreviousImage = () => {
    const images = galleryCategories[selectedCategory].images;
    const previousIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(previousIndex);
    setSelectedImage(images[previousIndex]);
  };

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
          <Link to="/yearbook" className="active">📸 <span>Yearbook</span></Link>
          <Link to="/assistant">✨ <span>AI Assistant</span></Link>
          <Link to="/resources">📁 <span>Resources</span></Link>
          <Link to="/community">💬 <span>Community</span></Link>
        </nav>
      </aside>

      <main className="main">
        <header className="profile-topbar">
          <Link to="/yearbook" className="back-link">← Back to Yearbook</Link>

          <div className="user">
            <span>🔔</span>
            <div className="user-avatar">ST</div>
            <p>Hello, Sam</p>
          </div>
        </header>

        <section className="profile-hero panel">
          <div className="profile-avatar-large">ST</div>

          <div className="profile-main-info">
            <h1>Sam T.</h1>
            <p className="role">Transition Consultant</p>
            <p className="location">📍 Dallas, Texas </p>

            <div className="profile-tags">
              <span>Transitions Expert</span>
              <span>2+ Years</span>
              <span>Trainer</span>
              <span>Legacy Traveler</span>
            </div>
          </div>

          <div className="profile-contact">
            <h3>Contact</h3>
            <p>✉️ sam.tusing@raymondjames.com</p>
            <p>📞 (214) 555-1234</p>
            <p>💬 Chat on Teams</p>
            <p>📅 Open in Outlook</p>
          </div>

          <div className="profile-manager">
            <h3>Manager</h3>
            <p>Tyler C.</p>

            <h3>RJ Start Date</h3>
            <p>Jan 2024</p>
          </div>
        </section>

        <section className="profile-grid">
          <div className="profile-card-large panel">
            <h2>Professional</h2>

            <div className="info-list">
              <div>
                <strong>Years with RJ</strong>
                <p>2+ Years</p>
              </div>

              <div>
                <strong>Certifications</strong>
                <p>SIE</p>
              </div>

              <div>
                <strong>Specialties</strong>
                <p>Branch Transitions, Technology Support, Advisor Onboarding</p>
              </div>

              <div>
                <strong>About Me</strong>
                <p>I love solving transition issues, helping advisors, and documenting travel experiences.</p>
              </div>
            </div>
          </div>

          <div className="profile-card-large panel">
            <div className="section-header">
              <Link to="/in-transit" className="card-title-link">
                <h2>Travel Statistics →</h2>
              </Link>
              <button>This Year</button>
            </div>

            <div className="stats-layout">
              <div className="stat-list">
                <div><span>✈️</span><strong>374</strong><p>Flight Hours</p></div>
                <div><span>📍</span><strong>73</strong><p>Routes Traveled</p></div>
                <div><span>🌎</span><strong>40</strong><p>Airports Visited</p></div>
                <div><span>🧳</span><strong>14</strong><p>States Visited</p></div>
              </div>

              <div className="mini-map">
                <div>
                  <p>Most Frequent Route</p>
                  <strong>DFW ↔ CLT</strong>
                </div>
              </div>
            </div>
          </div>

          <Link to="/in-transit" className="card-link">
            <div className="profile-card-large panel">
              <h2>Travel Map →</h2>
              <div className="profile-map">
                <MiniTransitMap />
              </div>
              <button className="outline-button">Open In Transit Map</button>
            </div>
          </Link>

          <div className="profile-card-large panel">
            <h2>Travel Galleries</h2>

            <div className="gallery-row">
              {Object.entries(galleryCategories).map(([key, category]) => (
                <button key={key} onClick={() => setActiveModal(key)}>
                  <div className="gallery-thumb">
                    <img src={category.badge} alt={category.title} />
                  </div>
                  <p>{category.title}</p>
                </button>
              ))}
            </div>

            <button className="outline-button" onClick={() => setActiveModal("galleries")}>
              View All Galleries
            </button>
          </div>

          <div className="profile-card-large panel">
  <h2>Sam's Recommendations</h2>

  <div className="recommendation-preview">
  {restaurants.slice(0, 3).map((restaurant, index) => (
    <div
      key={index}
      className="recommendation-preview-item"
    >
      <div>
        <strong>{restaurant.name}</strong>
        <p>{restaurant.city}</p>
      </div>

      <a
        href={restaurant.googleUrl}
        target="_blank"
        rel="noreferrer"
        className="preview-google-link"
      >
        Google →
      </a>
    </div>
  ))}
</div>

  <button
    className="outline-button"
    onClick={() => setActiveModal("restaurants")}
  >
    View All Recommendations
  </button>
</div>

          <div className="profile-card-large panel">
            <h2>Assignment History</h2>

            <div className="timeline">
              <div><strong>*Upcoming* July 2026</strong><p>St. Petersburg, FL · Cohort 6 Training</p></div>
              <div><strong>June 2026</strong><p>Cottage Grove, WI · Branch Transition</p></div>
              <div><strong>May 2026</strong><p>Winston Salem, NC · Branch Transition</p></div>
              <div><strong>Feb 2026</strong><p>Franklin, TN · Branch Transition</p></div>
              <div><strong>Jan 2026</strong><p>St. Petersburg, FL · Cohort 5 Training</p></div>
            </div>

            <button className="outline-button">View Full Assignment History</button>
          </div>
        </section>

        {activeModal && (
          <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveModal(null)}>
                ×
              </button>

              {activeModal === "galleries" && (
                <>
                  <h2>Sam’s Travel Galleries</h2>
                  <p>Browse travel moments by category.</p>

                  <div className="modal-grid">
                    {Object.entries(galleryCategories).map(([key, category]) => (
                      <button key={key} onClick={() => setActiveModal(key)}>
                        <img src={category.badge} alt={category.title} />
                        <span>{category.title}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {galleryCategories[activeModal] && (
                <>
                  <div className="modal-category-header">
                    <img
                      src={galleryCategories[activeModal].badge}
                      alt={galleryCategories[activeModal].title}
                    />

                    <div>
                      <h2>{galleryCategories[activeModal].title}</h2>
                      <p>{galleryCategories[activeModal].images.length} photos</p>
                    </div>
                  </div>

                  <div className="photo-placeholder-grid">
                    {galleryCategories[activeModal].images.map((image, index) => (
                      <button
                        key={index}
                        className="gallery-image-button"
                        onClick={() => openImage(activeModal, image, index)}
                      >
                        <img
                          src={image}
                          alt={`${galleryCategories[activeModal].title} ${index + 1}`}
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {activeModal === "restaurants" && (
                <>
                  <h2>Restaurant Recommendations</h2>
                  <p>Favorite traveler-tested food stops from assignments.</p>

                  <div className="modal-list restaurant-list">
  {restaurants.map((restaurant, index) => (
    <a
      key={index}
      href={restaurant.googleUrl}
      target="_blank"
      rel="noreferrer"
      className="restaurant-card"
    >
      <div className="restaurant-header">
        <div className="restaurant-name">
          🍽️ {restaurant.name}
        </div>

        <div className="restaurant-location">
          {restaurant.city}
        </div>
      </div>

      <div className="restaurant-note">
        "{restaurant.note}"
      </div>

      <div className="restaurant-footer">
        <span className="google-link">
          Open on Google →
        </span>
      </div>
    </a>
  ))}
</div>
                </>
              )}
            </div>
          </div>
        )}

        {selectedImage && selectedCategory && (
          <div className="image-lightbox" onClick={closeImage}>
            <button className="lightbox-close" onClick={closeImage}>×</button>

            <button
              className="lightbox-arrow left"
              onClick={(e) => {
                e.stopPropagation();
                showPreviousImage();
              }}
            >
              ‹
            </button>

            <img
              src={selectedImage}
              alt="Expanded travel gallery"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="lightbox-arrow right"
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
            >
              ›
            </button>

            <div className="lightbox-counter">
              {selectedIndex + 1} / {galleryCategories[selectedCategory].images.length}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default SamProfile;