import { useRef, useState } from "react";

const FAQS = [
  { q: "Which games can I register for right now?", a: "BGMI and Free Fire are live for Season 1. More titles will be added in future seasons based on demand." },
  { q: "Can I register as a solo player?", a: "Yes — solo entries are open, and we'll help place you into a squad if needed for squad-based formats." },
  { q: "Is there an entry fee?", a: "Season 1 registration is free for all college participants. Future seasons may introduce paid premium brackets." },
  { q: "How will matches be scheduled?", a: "Match times are posted in the Upcoming Matches panel on the live dashboard and sent to your registered email." },
  { q: "Where can I watch the matches?", a: "All matches are streamed live and embedded directly on this page in the Live Tournament Dashboard section." }
];

function FaqItem({ faq, isOpen, onToggle }) {
  const answerRef = useRef(null);

  return (
    <div className={`faq-item glass${isOpen ? " open" : ""}`}>
      <div className="faq-q" onClick={onToggle}>
        {faq.q} <span className="plus">+</span>
      </div>
      <div
        className="faq-a"
        ref={answerRef}
        style={{ maxHeight: isOpen && answerRef.current ? answerRef.current.scrollHeight : 0 }}
      >
        <p>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">FAQ</div>
          <h2>Questions, answered</h2>
        </div>
        <div className="faq-list" id="faqList">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
