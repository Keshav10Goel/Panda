// "use client";

// import { useState } from "react";

// const upcomingEvents = [
//   {
//     date: "09",
//     month: "SEP",
//     title: "Design presentation",
//     meta: "in 5 days",
//     icon: "▱",
//   },
//   {
//     date: "12",
//     month: "SEP",
//     title: "Bus to Bengaluru",
//     meta: "travel",
//     icon: "◉",
//   },
//   {
//     date: "15",
//     month: "SEP",
//     title: "Period window",
//     meta: "likely",
//     icon: "♡",
//   },
// ];

// const checkIns = [
//   {
//     title: "Fine",
//     subtitle: "steady and okay",
//     icon: "◌",
//   },
//   {
//     title: "Okay",
//     subtitle: "a little off",
//     icon: "◒",
//   },
//   {
//     title: "Difficult",
//     subtitle: "needs some care",
//     icon: "◒",
//   },
//   {
//     title: "Very painful",
//     subtitle: "take it gently",
//     icon: "✦",
//   },
// ];

// export default function Home() {
//   const [showQuickLog, setShowQuickLog] = useState(false);
//   const [selectedCheckIn, setSelectedCheckIn] = useState<string | null>(null);

//   return (
//     <main className="panda-app">
//       <aside className="sidebar">
//         <div className="brand">
//           <div className="brand-mark">P</div>

//           <div>
//             <div className="brand-name">PANDA</div>
//             <div className="brand-subtitle">CYCLE / CONTEXT</div>
//           </div>
//         </div>

//         <div className="sidebar-section">
//           <span className="sidebar-label">YOUR SPACE</span>

//           <nav className="nav">
//             <NavItem icon="⌂" label="Overview" active />
//             <NavItem icon="▦" label="Planner" />
//             <NavItem icon="⌁" label="My patterns" />
//             <NavItem icon="◉" label="Near you" />
//           </nav>
//         </div>

//         <div className="sidebar-bottom">
//           <button className="quiet-mode">
//             <span>☾</span>
//             <span>Quiet mode</span>
//             <span className="status-dot" />
//           </button>

//           <div className="profile">
//             <div className="profile-avatar">A</div>

//             <div className="profile-info">
//               <strong>Aarohi</strong>
//               <span>Private profile</span>
//             </div>

//             <button className="more-button">•••</button>
//           </div>
//         </div>
//       </aside>

//       <section className="content">
//         <header className="topbar">
//           <div>
//             <div className="date-label">FRIDAY · 04 SEPTEMBER 2026</div>
//             <div className="topbar-subtitle">
//               A private space for your patterns.
//             </div>
//           </div>

//           <div className="top-actions">
//             <button className="icon-button" aria-label="Help">
//               ?
//             </button>

//             <button className="icon-button notification" aria-label="Notifications">
//               ♧
//               <span />
//             </button>
//           </div>
//         </header>

//         <div className="hero-row">
//           <div>
//             <div className="greeting">
//               Good evening, Aarohi <span>✦</span>
//             </div>

//             <h1>
//               Your cycle, in <em>context.</em>
//             </h1>

//             <p className="hero-description">
//               Not just where you are in your cycle — what your day is asking
//               of you, too.
//             </p>
//           </div>

//           <button
//             className="quick-log-button"
//             onClick={() => setShowQuickLog(true)}
//           >
//             <span>＋</span>
//             Quick log
//             <kbd>⌘ K</kbd>
//           </button>
//         </div>

//         <div className="main-grid">
//           <section className="cycle-card card">
//             <div className="card-heading">
//               <div>
//                 <div className="eyebrow">CURRENT RHYTHM</div>
//                 <h2>Cycle day 23</h2>
//               </div>

//               <div className="tracking-state">
//                 <span />
//                 Tracking softly
//               </div>
//             </div>

//             <div className="cycle-content">
//               <div className="cycle-visual">
//                 <div className="cycle-ring outer">
//                   <div className="cycle-ring middle">
//                     <div className="cycle-ring inner">
//                       <div className="cycle-number">23</div>
//                       <div className="cycle-unit">CYCLE DAY</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="cycle-marker" />
//               </div>

//               <div className="cycle-info">
//                 <span className="muted">
//                   Your next period is likely in
//                 </span>

//                 <strong>3–6 days</strong>

//                 <div className="timeline">
//                   <div className="timeline-line" />

//                   <div className="timeline-dates">
//                     <span>14 AUG</span>
//                     <span>TODAY</span>
//                     <span>10 SEP</span>
//                   </div>
//                 </div>

//                 <div className="cycle-note">
//                   <span>⌁</span>

//                   <p>
//                     Your recent cycles have been{" "}
//                     <strong>consistent.</strong> That makes this window more
//                     useful, not absolute.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <section className="signal-card card">
//             <div className="eyebrow">TODAY&apos;S SIGNAL</div>

//             <h2>A little more space</h2>

//             <div className="signal-icon">☼</div>

//             <p>
//               “You usually report lower energy around here. Nothing to fix —
//               just a useful thing to know.”
//             </p>

//             <div className="evidence">
//               <div>
//                 <span>YOUR EVIDENCE</span>
//                 <strong>4 of last 5 cycles</strong>
//               </div>

//               <button>See pattern ↗</button>
//             </div>
//           </section>
//         </div>

//         <div className="three-column-grid">
//           <section className="ahead-card card">
//             <div className="eyebrow">IN YOUR ORBIT</div>
//             <h2>What&apos;s ahead</h2>

//             <div className="calendar-icon">▦</div>

//             <div className="event-list">
//               {upcomingEvents.map((event) => (
//                 <div className="event" key={event.title}>
//                   <div className="event-date">
//                     <strong>{event.date}</strong>
//                     <span>{event.month}</span>
//                   </div>

//                   <div className="event-content">
//                     <strong>{event.title}</strong>
//                     <span>
//                       {event.icon} {event.meta}
//                     </span>
//                   </div>

//                   <span className="event-arrow">›</span>
//                 </div>
//               ))}
//             </div>

//             <button className="text-link">Open planner ›</button>
//           </section>

//           <section className="note-card card">
//             <div className="eyebrow">
//               ✧ &nbsp; A NOTE FROM YOUR DATA
//             </div>

//             <p className="large-note">
//               You have a lighter day tomorrow. A good moment to restock before
//               the week turns busy.
//             </p>

//             <div className="note-bars">
//               <span />
//               <span />
//               <span />
//             </div>
//           </section>

//           <section className="preparedness-card card">
//             <div className="eyebrow">PREPAREDNESS</div>

//             <h2>Keep future-you close</h2>

//             <div className="inventory">
//               <div className="inventory-ring">
//                 <span>7</span>
//               </div>

//               <div>
//                 <strong>Products on hand</strong>
//                 <p>Enough for roughly one week.</p>
//               </div>
//             </div>

//             <button className="refill-link">
//               Find a refill nearby
//               <span>⌖</span>
//             </button>
//           </section>
//         </div>

//         <div className="bottom-grid">
//           <section className="checkin-card card">
//             <div className="checkin-header">
//               <div>
//                 <div className="eyebrow">A TWO-SECOND CHECK-IN</div>
//                 <h2>How are you feeling today?</h2>
//               </div>

//               <button
//                 className="details-button"
//                 onClick={() => setShowQuickLog(true)}
//               >
//                 ＋ Add details
//               </button>
//             </div>

//             <div className="checkin-options">
//               {checkIns.map((checkIn) => {
//                 const selected = selectedCheckIn === checkIn.title;

//                 return (
//                   <button
//                     key={checkIn.title}
//                     className={`checkin-option ${
//                       selected ? "selected" : ""
//                     }`}
//                     onClick={() => setSelectedCheckIn(checkIn.title)}
//                   >
//                     <span className="checkin-icon">{checkIn.icon}</span>
//                     <strong>{checkIn.title}</strong>
//                     <small>{checkIn.subtitle}</small>
//                   </button>
//                 );
//               })}
//             </div>
//           </section>

//           <section className="privacy-card card">
//             <div className="eyebrow">♢ &nbsp; PRIVATE BY DEFAULT</div>

//             <p>
//               Your health context stays yours.{" "}
//               <strong>Always.</strong>
//             </p>

//             <button className="privacy-link">
//               ♙ &nbsp; Open privacy centre <span>›</span>
//             </button>
//           </section>
//         </div>

//         <footer className="footer">
//           <span>Personal baseline · building quietly over time</span>

//           <span>◉ &nbsp; End-to-end context</span>
//         </footer>
//       </section>

//       {showQuickLog && (
//         <QuickLogModal
//           selected={selectedCheckIn}
//           onSelect={setSelectedCheckIn}
//           onClose={() => setShowQuickLog(false)}
//         />
//       )}
//     </main>
//   );
// }

// function NavItem({
//   icon,
//   label,
//   active = false,
// }: {
//   icon: string;
//   label: string;
//   active?: boolean;
// }) {
//   return (
//     <button className={`nav-item ${active ? "active" : ""}`}>
//       <span className="nav-icon">{icon}</span>
//       <span>{label}</span>

//       {active && <span className="nav-dot" />}
//     </button>
//   );
// }

// function QuickLogModal({
//   selected,
//   onSelect,
//   onClose,
// }: {
//   selected: string | null;
//   onSelect: (value: string) => void;
//   onClose: () => void;
// }) {
//   return (
//     <div className="modal-backdrop" onClick={onClose}>
//       <div
//         className="quick-log-modal"
//         onClick={(event) => event.stopPropagation()}
//       >
//         <div className="modal-top">
//           <div>
//             <div className="eyebrow">QUICK LOG · TODAY</div>

//             <h2>How are you, really?</h2>

//             <p>One tap is enough. Details can wait.</p>
//           </div>

//           <button className="modal-close" onClick={onClose}>
//             ×
//           </button>
//         </div>

//         <div className="modal-options">
//           {checkIns.map((checkIn) => (
//             <button
//               key={checkIn.title}
//               className={`modal-option ${
//                 selected === checkIn.title ? "selected" : ""
//               }`}
//               onClick={() => onSelect(checkIn.title)}
//             >
//               <span>{checkIn.icon}</span>
//               <strong>{checkIn.title}</strong>
//               <small>{checkIn.subtitle}</small>
//             </button>
//           ))}
//         </div>

//         <div className="modal-footer">
//           <span>♧ &nbsp; Stored privately</span>

//           <button className="save-button" onClick={onClose}>
//             Save check-in ↗
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import CycleCard from "@/components/dashboard/CycleCard";
import SignalCard from "@/components/dashboard/SignalCard";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import NoteCard from "@/components/dashboard/NoteCard";
import PreparednessCard from "@/components/dashboard/PreparednessCard";
import CheckIn from "@/components/dashboard/CheckIn";
import PrivacyCard from "@/components/dashboard/PrivacyCard";

import QuickLogModal from "@/components/modals/QuickModal";

export default function Home() {
  const [showQuickLog, setShowQuickLog] = useState(false);
  const [selectedCheckIn, setSelectedCheckIn] = useState<string | null>(null);

  return (
    <main className="panda-app">
      <Sidebar />

      <section className="content">
        <Topbar />

        <div className="hero-row">
          <div>
            <div className="greeting">
              Good evening, Aarohi <span>✦</span>
            </div>

            <h1>
              Your cycle, in <em>context.</em>
            </h1>

            <p className="hero-description">
              Not just where you are in your cycle — what your day is asking
              of you, too.
            </p>
          </div>

          <button
            className="quick-log-button"
            onClick={() => setShowQuickLog(true)}
          >
            <span>＋</span>
            Quick log
            <kbd>⌘ K</kbd>
          </button>
        </div>

        <div className="main-grid">
          <CycleCard />
          <SignalCard />
        </div>

        <div className="three-column-grid">
          <UpcomingEvents />
          <NoteCard />
          <PreparednessCard />
        </div>

        <div className="bottom-grid">
          <CheckIn
            selected={selectedCheckIn}
            onSelect={setSelectedCheckIn}
            onAddDetails={() => setShowQuickLog(true)}
          />

          <PrivacyCard />
        </div>

        <footer className="footer">
          <span>Personal baseline · building quietly over time</span>

          <span>◉ &nbsp; End-to-end context</span>
        </footer>
      </section>

      {showQuickLog && (
        <QuickLogModal
          selected={selectedCheckIn}
          onSelect={setSelectedCheckIn}
          onClose={() => setShowQuickLog(false)}
        />
      )}
    </main>
  );
}