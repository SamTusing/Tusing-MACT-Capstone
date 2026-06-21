import { Link } from "react-router-dom";

function TopBar() {
  return (
    <header className="topbar">
      <div className="title-row">
        <h1>Traveler Hub</h1>
        <span>Connect. Support. Succeed. Together.</span>
      </div>

      <div className="search">
        Search resources, people, locations...
      </div>

      <Link to="/sam-profile" className="topbar-user-link">
        <div className="user">
          <span>🔔</span>

          <div className="user-avatar">
            ST
          </div>

          <p>Hello, Sam</p>
        </div>
      </Link>
    </header>
  );
}

export default TopBar;