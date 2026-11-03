const GALLERY_TILES = [
  { label: "Finals Night", g1: "#8b5cf6", g2: "#3b82f6" },
  { label: "Squad Huddle", g1: "#3b82f6", g2: "#22d3ee" },
  { label: "Crowd Reaction", g1: "#e879f9", g2: "#8b5cf6" },
  { label: "Trophy Moment", g1: "#22d3ee", g2: "#6d28d9" },
  { label: "Broadcast Desk", g1: "#8b5cf6", g2: "#e879f9" },
  { label: "Warmup Round", g1: "#3b82f6", g2: "#8b5cf6" },
  { label: "MVP Award", g1: "#22d3ee", g2: "#3b82f6" },
  { label: "Team Photo", g1: "#6d28d9", g2: "#22d3ee" }
];

export default function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Gallery</div>
          <h2>Moments from the arena</h2>
        </div>
        <div className="gallery-grid" id="galleryGrid">
          {GALLERY_TILES.map((t) => (
            <div
              className="gallery-item"
              key={t.label}
              style={{ "--g1": t.g1, "--g2": t.g2 }}
            >
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
