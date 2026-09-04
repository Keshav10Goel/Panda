const upcomingEvents = [
  {
    date: "09",
    month: "SEP",
    title: "Design presentation",
    meta: "in 5 days",
    icon: "▱",
  },
  {
    date: "12",
    month: "SEP",
    title: "Bus to Bengaluru",
    meta: "travel",
    icon: "◉",
  },
  {
    date: "15",
    month: "SEP",
    title: "Period window",
    meta: "likely",
    icon: "♡",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="ahead-card card">
      <div className="eyebrow">IN YOUR ORBIT</div>

      <h2>What&apos;s ahead</h2>

      <div className="calendar-icon">▦</div>

      <div className="event-list">
        {upcomingEvents.map((event) => (
          <div className="event" key={event.title}>
            <div className="event-date">
              <strong>{event.date}</strong>
              <span>{event.month}</span>
            </div>

            <div className="event-content">
              <strong>{event.title}</strong>

              <span>
                {event.icon} {event.meta}
              </span>
            </div>

            <span className="event-arrow">›</span>
          </div>
        ))}
      </div>

      <button className="text-link">Open planner ›</button>
    </section>
  );
}