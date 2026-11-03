export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container">
        <div className="hero-copy reveal">
          <div className="launch-badge">
            <span className="pill">Launching Now</span>
            Season 1 kicks off with our first live college tournament
          </div>
          <h1>
            <span className="line">Compete. Stream. Learn.</span>
            <span className="line text-gradient">Build Your Esports Career.</span>
          </h1>
          <p className="hero-sub">
            Horizon Esports Academy is where college gamers turn scrims into a career —
            live tournaments, real broadcasts, and a growth path from player to pro.
            Starting with <strong>BGMI</strong> and <strong>Free Fire</strong>, more titles landing soon.
          </p>
          <div className="hero-actions">
            <a href="#register" className="btn btn-primary">Tournament Registration</a>
            <a href="#tournament" className="btn btn-live">
              <span className="dot-live" style={{ width: 8, height: 8 }}></span> Watch Live
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat"><b>56+</b><span>Teams Registered</span></div>
            <div className="stat"><b>₹1.75L</b><span>Total Prize Pool</span></div>
            <div className="stat"><b>2</b><span>Live Game Titles</span></div>
            <div className="stat"><b>24/7</b><span>Stream Coverage</span></div>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="radar">
            <div className="radar-sweep"></div>
            <div className="radar-core"></div>
            <div className="radar-blip" style={{ top: "20%", left: "65%" }}></div>
            <div className="radar-blip" style={{ top: "60%", left: "25%", animationDelay: "0.8s" }}></div>
            <div className="radar-blip" style={{ top: "75%", left: "70%", animationDelay: "1.4s" }}></div>
          </div>
        </div>
      </div>
    </header>
  );
}
