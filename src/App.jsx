import "./styles/dashboard.css";

function App() {
  return (
    <div className="hub">
      <aside className="sidebar">
        <div className="brand">
          <div className="rj-logo">RJ</div>
          <div>
            <h2>Traveler Hub</h2>
            <p>Transition Team</p>
          </div>
        </div>

        <nav className="nav">
          <a className="active">⌂ Home</a>
          <a>⌖ Traveler Map</a>
          <a>▣ Yearbook</a>
          <a>✦ AI Assistant</a>
          <a>□ Resources</a>
          <a>♧ Community</a>
          <a>✈ Travel Tools</a>
          <a>? Support</a>
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
        <header className="topbar">
          <div className="title-row">
            <h1>Traveler Hub</h1>
            <span>Connect. Support. Succeed. Together.</span>
          </div>

          <div className="search">Search resources, people, locations...</div>

          <div className="user">
            <span>🔔</span>
            <div className="user-avatar">ST</div>
            <p>Hello, Sam</p>
          </div>
        </header>

        <section className="content-grid">
          <div className="left-column">
            <section className="panel map-panel">
              <div className="section-header">
                <div>
                  <p className="label">Traveler Map</p>
                  <h2>Active Assignments</h2>
                </div>
                <button>Filter by City</button>
              </div>

              <div className="tabs">
                <span className="selected">All Travelers</span>
                <span>On Assignment</span>
                <span>Heading Out</span>
                <span>Available</span>
              </div>

              <div className="map">
                <div className="pin seattle">Seattle</div>
                <div className="pin denver">Denver</div>
                <div className="pin chicago">Chicago</div>
                <div className="pin ny">New York</div>
                <div className="pin dallas">Dallas</div>
                <div className="pin atlanta">Atlanta</div>
                <div className="pin miami">Miami</div>
                <div className="dot sf">3</div>
                <div className="dot midwest">2</div>
                <div className="dot northeast">4</div>
                <div className="dot florida">2</div>
              </div>
            </section>

            <section className="panel">
              <div className="section-header">
                <div>
                  <p className="label">Traveler Yearbook</p>
                  <h2>Team Directory</h2>
                </div>
                <a>View All Travelers →</a>
              </div>

              <div className="profiles">
                {["Sam T.", "Alex Johnson", "Jordan Lee", "Taylor Morgan"].map(
                  (name) => (
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
                  )
                )}
              </div>
            </section>

            <section className="panel">
              <div className="section-header">
                <div>
                  <p className="label">Resource Center</p>
                  <h2>Helpful Links</h2>
                </div>
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
                You can find it in the Resource Center under “Transition
                Process.”
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

export default App;