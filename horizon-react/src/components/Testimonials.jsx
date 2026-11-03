const TESTIMONIALS = [
  {
    quote: "Horizon's the first place our squad has played that actually felt like a real tournament — casters, brackets, everything.",
    name: "Rohan Mehta",
    meta: "Captain, Team Vortex · BGMI"
  },
  {
    quote: "Registration took two minutes and we were in the bracket the same day. Super smooth for a first season.",
    name: "Simran Kaur",
    meta: "Player, Blaze Squad · Free Fire"
  },
  {
    quote: "Watching our own college team on a live stream with a real leaderboard was honestly a first for us.",
    name: "Devika Nair",
    meta: "Student, Viewer"
  }
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">What players say</div>
          <h2>From the community</h2>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testi-card glass" key={t.name}>
              <div className="quote-mark">"</div>
              <p>{t.quote}</p>
              <div className="testi-person">
                <div className="testi-avatar"></div>
                <div><b>{t.name}</b><span>{t.meta}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
