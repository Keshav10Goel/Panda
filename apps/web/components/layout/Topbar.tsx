export default function Topbar() {
  return (
    <header className="topbar">
      <div>
        <div className="date-label">FRIDAY · 04 SEPTEMBER 2026</div>

        <div className="topbar-subtitle">
          A private space for your patterns.
        </div>
      </div>

      <div className="top-actions">
        <button className="icon-button" aria-label="Help">
          ?
        </button>

        <button
          className="icon-button notification"
          aria-label="Notifications"
        >
          ♧
          <span />
        </button>
      </div>
    </header>
  );
}