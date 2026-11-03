const COMING_SOON = [
  { icon: "🧑‍🚀", title: "Player Profiles", text: "Personal stat pages with match history and highlights." },
  { icon: "📊", title: "Analytics", text: "Deep performance breakdowns for every player and team." },
  { icon: "📈", title: "Rankings", text: "Cross-tournament leaderboards and seasonal rankings." },
  { icon: "🎓", title: "Coaching", text: "1-on-1 and squad coaching from experienced players." },
  { icon: "🕵️", title: "Recruitment", text: "Get scouted by teams and organizations looking for talent." },
  { icon: "💼", title: "Jobs", text: "Esports-adjacent job listings: casting, editing, ops and more." },
  { icon: "🎗️", title: "Scholarships", text: "Merit-based scholarships for standout college players." },
  { icon: "📜", title: "Certifications", text: "Official certifications recognizing competitive achievement." }
];

export default function ComingSoon() {
  return (
    <section className="section" id="coming-soon">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">On the roadmap</div>
          <h2>What's <span className="text-gradient">coming next</span> to Horizon</h2>
          <p>Season 1 is just the start. Here's what we're building for players next.</p>
        </div>

        <div className="soon-grid" id="soonGrid">
          {COMING_SOON.map((c) => (
            <div className="soon-card glass" key={c.title}>
              <div className="soon-ribbon">Soon</div>
              <div className="ico">{c.icon}</div>
              <h5>{c.title}</h5>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
