const SPONSORS = ["NOVA GEAR", "PULSE ENERGY", "CAMPUS NET", "VERTEX PCs", "ORBIT CAFE", "FIBERLINE"];

export default function Sponsors() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-head" style={{ marginBottom: 30 }}>
          <div className="eyebrow">Backed By</div>
          <h2>Our Sponsors & Partners</h2>
        </div>
        <div className="sponsor-row">
          {SPONSORS.map((s) => (
            <div className="sponsor-logo" key={s}>{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
