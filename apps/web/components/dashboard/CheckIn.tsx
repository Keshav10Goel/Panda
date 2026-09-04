"use client";

const checkIns = [
  {
    title: "Fine",
    subtitle: "steady and okay",
    icon: "◌",
  },
  {
    title: "Okay",
    subtitle: "a little off",
    icon: "◒",
  },
  {
    title: "Difficult",
    subtitle: "needs some care",
    icon: "◒",
  },
  {
    title: "Very painful",
    subtitle: "take it gently",
    icon: "✦",
  },
];

interface CheckInProps {
  selected: string | null;
  onSelect: (value: string) => void;
  onAddDetails: () => void;
}

export default function CheckIn({
  selected,
  onSelect,
  onAddDetails,
}: CheckInProps) {
  return (
    <section className="checkin-card card">
      <div className="checkin-header">
        <div>
          <div className="eyebrow">A TWO-SECOND CHECK-IN</div>

          <h2>How are you feeling today?</h2>
        </div>

        <button className="details-button" onClick={onAddDetails}>
          ＋ Add details
        </button>
      </div>

      <div className="checkin-options">
        {checkIns.map((checkIn) => {
          const isSelected = selected === checkIn.title;

          return (
            <button
              key={checkIn.title}
              className={`checkin-option ${
                isSelected ? "selected" : ""
              }`}
              onClick={() => onSelect(checkIn.title)}
            >
              <span className="checkin-icon">{checkIn.icon}</span>

              <strong>{checkIn.title}</strong>

              <small>{checkIn.subtitle}</small>
            </button>
          );
        })}
      </div>
    </section>
  );
}