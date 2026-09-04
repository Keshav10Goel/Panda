export default function CycleCard() {
  return (
    <section className="cycle-card card">
      <div className="card-heading">
        <div>
          <div className="eyebrow">CURRENT RHYTHM</div>
          <h2>Cycle day 23</h2>
        </div>

        <div className="tracking-state">
          <span />
          Tracking softly
        </div>
      </div>

      <div className="cycle-content">
        <div className="cycle-visual">
          <div className="cycle-ring outer">
            <div className="cycle-ring middle">
              <div className="cycle-ring inner">
                <div className="cycle-number">23</div>
                <div className="cycle-unit">CYCLE DAY</div>
              </div>
            </div>
          </div>

          <div className="cycle-marker" />
        </div>

        <div className="cycle-info">
          <span className="muted">Your next period is likely in</span>

          <strong>3–6 days</strong>

          <div className="timeline">
            <div className="timeline-line" />

            <div className="timeline-dates">
              <span>14 AUG</span>
              <span>TODAY</span>
              <span>10 SEP</span>
            </div>
          </div>

          <div className="cycle-note">
            <span>⌁</span>

            <p>
              Your recent cycles have been <strong>consistent.</strong> That
              makes this window more useful, not absolute.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}