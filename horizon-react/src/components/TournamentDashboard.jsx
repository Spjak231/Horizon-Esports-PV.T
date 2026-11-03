export default function TournamentDashboard({ videoId = "HMojOamJ59M" }) {
  return (
    <section className="section" id="tournament">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Live Broadcast</div>
          <h2>
            Watch the action, <span className="text-gradient">live.</span>
          </h2>
          <p>Tune in to the stream below.</p>
        </div>

        <div className="panel glass hud-corners">
          <h3>
            Live Stream
            <span className="tag">LIVE</span>
          </h3>
          <div className="video-frame">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}