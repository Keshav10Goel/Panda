export default function PreparednessCard() {
  return (
    <section className="preparedness-card card">
      <div className="eyebrow">PREPAREDNESS</div>

      <h2>Keep future-you close</h2>

      <div className="inventory">
        <div className="inventory-ring">
          <span>7</span>
        </div>

        <div>
          <strong>Products on hand</strong>
          <p>Enough for roughly one week.</p>
        </div>
      </div>

      <button className="refill-link">
        Find a refill nearby
        <span>⌖</span>
      </button>
    </section>
  );
}