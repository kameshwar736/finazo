import React, { useEffect, useRef } from 'react';
import './WhyFinanzo.css';

const WhyFinanzo = () => {
  const secRef = useRef(null);
  const stickyRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const sec = secRef.current;
    const st = stickyRef.current;
    const grid = gridRef.current;
    if (!sec || !st || !grid) return;

    const cards = Array.from(grid.children);
    const mq = window.matchMedia('(max-width: 900px)');
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    let tick = false;

    const clamp = (x) => Math.max(0, Math.min(1, x));

    const reset = () => {
      st.style.top = '';
      cards.forEach((c) => {
        c.style.transform = '';
        c.style.opacity = '';
        c.style.zIndex = '';
      });
    };

    const layout = () => {
      tick = false;
      if (mq.matches || rm.matches) {
        reset();
        return;
      }
      st.style.top = Math.min(0, window.innerHeight - st.offsetHeight) + 'px';
      const r = sec.getBoundingClientRect();
      const p = clamp((-r.top / (r.height - window.innerHeight)) * 1.6);
      const e = 1 - Math.pow(1 - p, 3);
      const w = cards[0]?.offsetWidth || 300;
      const h = cards[0]?.offsetHeight || 250;
      const gap = parseFloat(getComputedStyle(grid).columnGap) || 22;

      cards.forEach((c, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const dx = (1 - e) * (1 - col) * (w + gap);
        const dy = -(1 - e) * row * (h + gap);
        const rot = (1 - e) * (i === 1 ? 0 : (i - 2) * 4);
        const op = 1;
        const s = 1 - (1 - e) * 0.04;
        c.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(${s})`;
        c.style.opacity = op;
        c.style.zIndex = i === 1 ? 10 : 5 - i;
      });
    };

    const req = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(layout);
      }
    };

    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    if (mq.addEventListener) {
      mq.addEventListener('change', layout);
    }

    layout();

    return () => {
      window.removeEventListener('scroll', req);
      window.removeEventListener('resize', req);
      if (mq.removeEventListener) {
        mq.removeEventListener('change', layout);
      }
    };
  }, []);

  return (
    <section className="why-finanzo-section" id="why" ref={secRef}>
      <div className="why-finanzo-sticky" id="sticky" ref={stickyRef}>
        <div className="why-finanzo-inner">
          <div className="why-finanzo-head">
            <div>
              <h2 className="why-finanzo-title">
                Why Learn with <span className="why-brand-accent">Finanzo</span>
              </h2>
              <p className="why-finanzo-sub">
                We combine industry expertise with practical learning to help you gain in-demand skills, build real-world experience and grow your career.
              </p>
            </div>
          </div>

          <div className="why-finanzo-grid" id="grid" ref={gridRef}>
            {/* Card 1: Industry-Focused Courses */}
            <article className="why-finanzo-card">
              <svg className="why-finanzo-ic" viewBox="0 0 56 56">
                <path d="M28 10L6 21l22 11 22-11z" />
                <path d="M14 26v10c8 7 20 7 28 0V26" />
                <path className="a" d="M50 21v12" />
                <circle className="f" cx="50" cy="35" r="2.6" />
              </svg>
              <h3>Industry-Focused Courses</h3>
              <p>Learn in-demand skills with up-to-date curriculum designed for real-world opportunities.</p>
            </article>

            {/* Card 2: Hands-on Projects */}
            <article className="why-finanzo-card">
              <svg className="why-finanzo-ic" viewBox="0 0 56 56">
                <rect x="6" y="8" width="44" height="31" rx="5" />
                <path d="M20 49h16M28 39v10" />
                <path className="a" d="M23 19l-5 4.5 5 4.5M33 19l5 4.5-5 4.5M30 17l-4 12" />
              </svg>
              <h3>Hands-on Projects</h3>
              <p>Work on real projects and practical tasks to build job-ready skills with confidence.</p>
            </article>

            {/* Card 3: Expert Mentorship */}
            <article className="why-finanzo-card">
              <svg className="why-finanzo-ic" viewBox="0 0 56 56">
                <circle cx="14" cy="18" r="5" />
                <path d="M4 44c0-10 20-10 20 0" />
                <path d="M26 46c0-8 8-12 14-8s8 8 8 8" />
                <circle className="f" cx="38" cy="12" r="6" />
              </svg>
              <h3>Expert Mentorship</h3>
              <p>Get guidance from experienced professionals and clear your doubts at every step.</p>
            </article>

            {/* Card 4: Certification Support */}
            <article className="why-finanzo-card">
              <svg className="why-finanzo-ic" viewBox="0 0 56 56">
                <rect x="6" y="9" width="40" height="34" rx="5" />
                <path d="M14 19h18M14 26h10M14 33h8" />
                <circle className="f" cx="43" cy="42" r="9" />
                <path d="M43 36.5l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" fill="#fff" stroke="none" />
              </svg>
              <h3>Certification Support</h3>
              <p>Earn recognized certificates to validate your skills and boost your career profile.</p>
            </article>

            {/* Card 5: Placement Assistance */}
            <article className="why-finanzo-card">
              <svg className="why-finanzo-ic" viewBox="0 0 56 56">
                <rect x="6" y="18" width="44" height="28" rx="6" />
                <path d="M20 18v-5a3 3 0 013-3h10a3 3 0 013 3v5" />
                <path d="M6 30h44" />
                <circle className="a" cx="28" cy="32" r="3.5" />
              </svg>
              <h3>Placement Assistance</h3>
              <p>Get career guidance, interview preparation and placement support to kickstart your career.</p>
            </article>

            {/* Card 6: Affordable & Flexible Learning */}
            <article className="why-finanzo-card">
              <svg className="why-finanzo-ic" viewBox="0 0 56 56">
                <rect x="6" y="36" width="9" height="12" rx="2" />
                <rect x="19" y="28" width="9" height="20" rx="2" />
                <rect x="32" y="20" width="9" height="28" rx="2" />
                <rect x="45" y="12" width="7" height="36" rx="2" />
                <path className="a" d="M8 24l14-9 9 4 18-12M42 7h8v8" />
              </svg>
              <h3>Affordable &amp; Flexible Learning</h3>
              <p>High-quality education at reasonable fees with flexible learning options to fit your schedule.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFinanzo;
