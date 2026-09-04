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

interface QuickLogModalProps {
  selected: string | null;
  onSelect: (value: string) => void;
  onClose: () => void;
}

export default function QuickLogModal({
  selected,
  onSelect,
  onClose,
}: QuickLogModalProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="quick-log-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-top">
          <div>
            <div className="eyebrow">QUICK LOG · TODAY</div>

            <h2>How are you, really?</h2>

            <p>One tap is enough. Details can wait.</p>
          </div>

          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-options">
          {checkIns.map((checkIn) => (
            <button
              key={checkIn.title}
              className={`modal-option ${
                selected === checkIn.title ? "selected" : ""
              }`}
              onClick={() => onSelect(checkIn.title)}
            >
              <span>{checkIn.icon}</span>

              <strong>{checkIn.title}</strong>

              <small>{checkIn.subtitle}</small>
            </button>
          ))}
        </div>

        <div className="modal-footer">
          <span>♧ &nbsp; Stored privately</span>

          <button className="save-button" onClick={onClose}>
            Save check-in ↗
          </button>
        </div>
      </div>
    </div>
  );
}