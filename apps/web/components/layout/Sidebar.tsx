"use client";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">P</div>

        <div>
          <div className="brand-name">PANDA</div>
          <div className="brand-subtitle">CYCLE / CONTEXT</div>
        </div>
      </div>

      <div className="sidebar-section">
        <span className="sidebar-label">YOUR SPACE</span>

        <nav className="nav">
          <NavItem icon="⌂" label="Overview" active />
          <NavItem icon="▦" label="Planner" />
          <NavItem icon="⌁" label="My patterns" />
          <NavItem icon="◉" label="Near you" />
        </nav>
      </div>

      <div className="sidebar-bottom">
        <button className="quiet-mode">
          <span>☾</span>
          <span>Quiet mode</span>
          <span className="status-dot" />
        </button>

        <div className="profile">
          <div className="profile-avatar">A</div>

          <div className="profile-info">
            <strong>Aarohi</strong>
            <span>Private profile</span>
          </div>

          <button className="more-button">•••</button>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <button className={`nav-item ${active ? "active" : ""}`}>
      <span className="nav-icon">{icon}</span>
      <span>{label}</span>

      {active && <span className="nav-dot" />}
    </button>
  );
}