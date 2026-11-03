import { useEffect } from "react";

// Adds the "reveal" + "in" class dance to every matching element,
// same behavior as the vanilla-JS IntersectionObserver in main.js.
export default function useReveal(deps = []) {
  useEffect(() => {
    const items = document.querySelectorAll(
      ".reveal, .panel, .soon-card, .testi-card, .pillar"
    );
    items.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
