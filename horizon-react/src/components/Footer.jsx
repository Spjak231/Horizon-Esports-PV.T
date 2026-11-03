export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-mark"></span>
              <span>
                HORIZON
                <br />
                <span>ESPORTS ACADEMY</span>
              </span>
            </div>
            <p>
              The on-ramp from campus gamer to esports professional. Live tournaments, streaming,
              coaching and career paths — starting with BGMI and Free Fire.
            </p>
            <div className="social-row">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="Discord">DC</a>
              <a href="#" aria-label="X / Twitter">X</a>
            </div>
          </div>
          <div className="footer-col">
            <h6>Platform</h6>
            <a href="#tournament">Live Tournament</a>
            <a href="#register">Registration</a>
            <a href="#about">About Us</a>
            <a href="#coming-soon">Coming Soon</a>
          </div>
          <div className="footer-col">
            <h6>Support</h6>
            <a href="#faq">FAQ</a>
            <a href="mailto:hello@horizonesports.academy">Contact Us</a>
            <a href="#">Rulebook</a>
            <a href="#">Fair Play Policy</a>
          </div>
          <div className="footer-col">
            <h6>Get in touch</h6>
            <ul>
              <li>hello@horizonesports.academy</li>
              <li>+91 98765 43210</li>
              <li>Hyderabad, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span id="year">{year}</span> Horizon Esports Academy. All rights reserved.</span>
          <span>Built for competitors, by competitors.</span>
        </div>
      </div>
    </footer>
  );
}
