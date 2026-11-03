export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-wrap">
          <div className="about-copy reveal">
            <div className="eyebrow">About Horizon</div>
            <h2>
              We're building the on-ramp from{" "}
              <span className="text-gradient">campus gamer to esports professional.</span>
            </h2>
            <p>
              Horizon Esports Academy started with a simple observation: college campuses are full of
              serious competitive talent with nowhere structured to grow. Scrims happen in dorm rooms,
              talent goes unseen, and there's no clear path from "good at the game" to "career in esports."
            </p>
            <p>
              We're changing that — starting with live, professionally broadcast tournaments in BGMI and
              Free Fire, and building outward into coaching, analytics, recruitment and certification, so
              every player on our platform has a real next step.
            </p>
          </div>
          <div className="pillar-grid reveal">
            <div className="pillar glass"><div className="ico">🎯</div><h5>Compete</h5><p>Structured brackets, fair-play enforcement, real prize pools.</p></div>
            <div className="pillar glass"><div className="ico">📺</div><h5>Stream</h5><p>Every match broadcast live with commentary and stats.</p></div>
            <div className="pillar glass"><div className="ico">📚</div><h5>Learn</h5><p>Coaching and analytics to sharpen your gameplay.</p></div>
            <div className="pillar glass"><div className="ico">🚀</div><h5>Build a career</h5><p>Recruitment pipelines into teams, jobs and scholarships.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
