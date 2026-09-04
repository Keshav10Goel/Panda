export default function SignalCard() {
  return (
    <section className="signal-card card">
      <div className="eyebrow">TODAY&apos;S SIGNAL</div>

      <h2>A little more space</h2>

      <div className="signal-icon">☼</div>

      <p>
        “You usually report lower energy around here. Nothing to fix — just a
        useful thing to know.”
      </p>

      <div className="evidence">
        <div>
          <span>YOUR EVIDENCE</span>
          <strong>4 of last 5 cycles</strong>
        </div>

        <button>See pattern ↗</button>
      </div>
    </section>
  );
}