"use client";

import { useEffect, useRef, useState } from "react";

const FEATURES = [
  { icon: "✦", label: "RSVP Management" },
  { icon: "⌛", label: "Countdown Timer" },
  { icon: "✉", label: "Digital Invites" },
  { icon: "✤", label: "Photo Gallery" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      parallaxRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.04)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="amoera-hero">

      {/* ── Background ornament rings ── */}
      <div className="bg-ring bg-ring-1" aria-hidden="true" />
      <div className="bg-ring bg-ring-2" aria-hidden="true" />
      <div className="bg-ring bg-ring-3" aria-hidden="true" />

      {/* ── Scattered petals (decorative) ── */}
      <div className="hero-petals" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <span key={i} className={`hero-petal hp-${i + 1}`} />
        ))}
      </div>

      <div className="hero-container">

        {/* ── Left: Copy ── */}
        <div className={`hero-copy ${mounted ? "is-visible" : ""}`}>

          <div className="hero-eyebrow-row">
            <span className="hero-eyebrow">AmoraWeds</span>
            <span className="hero-eyebrow-line" />
          </div>

          <h1 className="hero-heading">
            Elegant<br />
            <em className="hero-heading-em">Wedding Invitation</em><br />
            Websites
          </h1>

          <div className="hero-divider">
            <span className="hero-divider-leaf">❧</span>
          </div>

          <p className="hero-sub">
            Bespoke wedding websites crafted with love —
            designed to make your most special day timeless.
          </p>

          {/* Feature pills */}
          <ul className="hero-features" aria-label="Features">
            {FEATURES.map(({ icon, label }) => (
              <li key={label} className="hero-feature-pill">
                <span className="pill-icon" aria-hidden="true">{icon}</span>
                {label}
              </li>
            ))}
          </ul>

          {/* CTA row */}
          <div className="hero-cta-row">
            <a href="/pricing" className="btn btn--primary">
              View Pricing
            </a>
            <a href="/demos" className="btn btn--ghost">
              Explore Demos
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* ── Right: Image ── */}
        <div className={`hero-visual ${mounted ? "is-visible" : ""}`}>

          {/* Decorative frame */}
          <div className="visual-frame" aria-hidden="true" />

          {/* Floating badge */}
          <div className="visual-badge" aria-hidden="true">
            <span className="badge-icon">✦</span>
            <span className="badge-text">Premium<br />Quality</span>
          </div>

          {/* Image with parallax */}
          <div className="visual-img-wrap">
            <div className="visual-parallax">
            <img
            src="/hero-image.webp"
            alt="Wedding couple"
            className="hero-main-image"
          />
  </div>
</div>
    <div className="visual-overlay" aria-hidden="true" />
     

          {/* Floating couple name card */}
          <div className="visual-namecard" aria-hidden="true">
            <span className="namecard-names">Mridul & Avanthika</span>
            <span className="namecard-date">February 14, 2025</span>
          </div>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-line" />
        <span className="scroll-label">Scroll</span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose:        #c9728a;
          --rose-light:  #f5e0e6;
          --rose-pale:   #fdf4f6;
          --gold:        #b8914a;
          --gold-light:  #e8d5b0;
          --gold-pale:   #fdf8ef;
          --ivory:       #fffaf5;
          --blush:       #faeef2;
          --text-dark:   #3a2c30;
          --text-mid:    #7a5c64;
          --text-soft:   #b89aa0;
        }

        /* ─── Section ─── */
        .amoera-hero {
          font-family: 'Jost', sans-serif;
          background: var(--ivory);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 6rem 0 4rem;
        }

        /* ─── Background rings ─── */
        .bg-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .bg-ring-1 {
          width: 680px; height: 680px;
          border: 1px solid var(--rose-light);
          top: -180px; right: -160px;
          animation: slowSpin 40s linear infinite;
        }
        .bg-ring-2 {
          width: 440px; height: 440px;
          border: 1px solid var(--gold-light);
          top: -80px; right: -60px;
          animation: slowSpin 30s linear infinite reverse;
        }
        .bg-ring-3 {
          width: 260px; height: 260px;
          border: 1.5px solid var(--rose-light);
          bottom: 80px; left: -100px;
          animation: slowSpin 50s linear infinite;
        }
        @keyframes slowSpin {
          to { transform: rotate(360deg); }
        }

        /* ─── Decorative hero petals ─── */
        .hero-petals { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .hero-petal {
          position: absolute;
          border-radius: 150% 0 150% 0;
          opacity: 0.55;
        }
        .hero-petal:nth-child(odd)  { background: var(--rose-light); }
        .hero-petal:nth-child(even) { background: var(--gold-light); }
        .hp-1  { width:22px; height:28px; top:12%; left:4%;  transform: rotate(25deg);  }
        .hp-2  { width:14px; height:18px; top:28%; left:8%;  transform: rotate(-40deg); }
        .hp-3  { width:18px; height:23px; top:72%; left:3%;  transform: rotate(60deg);  }
        .hp-4  { width:12px; height:16px; top:88%; left:14%; transform: rotate(-20deg); }
        .hp-5  { width:20px; height:26px; top:8%;  left:48%; transform: rotate(15deg);  border-radius: 0 150% 0 150%; }
        .hp-6  { width:10px; height:14px; top:18%; left:55%; transform: rotate(70deg);  }
        .hp-7  { width:16px; height:20px; top:85%; left:40%; transform: rotate(-55deg); }
        .hp-8  { width:24px; height:30px; top:6%;  right:5%; transform: rotate(35deg);  border-radius: 50% 50% 0 50%; }
        .hp-9  { width:14px; height:18px; top:90%; right:8%; transform: rotate(-30deg); }
        .hp-10 { width:18px; height:22px; top:50%; right:3%; transform: rotate(50deg);  }

        /* ─── Container ─── */
        .hero-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ─── Copy animations ─── */
        .hero-copy,
        .hero-visual {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .hero-copy.is-visible  { opacity: 1; transform: translateY(0); }
        .hero-visual.is-visible {
          opacity: 1; transform: translateY(0);
          transition-delay: 0.18s;
        }

        /* ─── Copy ─── */
        .hero-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.6rem;
        }
        .hero-eyebrow {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--rose);
          white-space: nowrap;
        }
        .hero-eyebrow-line {
          display: block;
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--rose-light), transparent);
        }

        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.2rem, 6.5vw, 5.4rem);
          font-weight: 300;
          line-height: 1.08;
          color: var(--text-dark);
          margin: 0;
          letter-spacing: -0.01em;
        }
        .hero-heading-em {
          font-style: italic;
          color: var(--rose);
          font-weight: 400;
        }

        .hero-divider {
          margin: 1.8rem 0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .hero-divider::before,
        .hero-divider::after {
          content: '';
          display: block;
          width: 48px;
          height: 1px;
          background: var(--gold-light);
        }
        .hero-divider-leaf { color: var(--rose); font-size: 1.1rem; }

        .hero-sub {
          font-size: 1.05rem;
          font-weight: 300;
          color: var(--text-mid);
          line-height: 1.85;
          max-width: 400px;
          margin: 0 0 2rem;
        }

        /* ─── Feature pills ─── */
        .hero-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.8rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .hero-feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          font-weight: 400;
          color: var(--text-mid);
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 9999px;
          padding: 0.45rem 1rem;
          letter-spacing: 0.02em;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
        }
        .hero-feature-pill:hover {
          background: var(--rose-pale);
          border-color: var(--rose);
          color: var(--rose);
        }
        .pill-icon {
          font-size: 0.85rem;
          color: var(--rose);
        }

        /* ─── CTA Buttons ─── */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }
        .btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          padding: 1rem 2.2rem;
          border-radius: 9999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }
        .btn--primary {
          background: linear-gradient(135deg, var(--rose) 0%, #b05575 100%);
          color: #fff;
          box-shadow: 0 8px 28px rgba(201, 114, 138, 0.32);
        }
        .btn--primary:hover {
          box-shadow: 0 14px 40px rgba(201, 114, 138, 0.48);
          transform: translateY(-2px);
        }
        .btn--ghost {
          color: var(--text-dark);
          background: transparent;
          border: 1.5px solid var(--gold-light);
          padding-right: 1.6rem;
        }
        .btn--ghost:hover {
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-2px);
        }
        .btn-arrow {
          font-size: 1.1rem;
          transition: transform 0.3s;
        }
        .btn--ghost:hover .btn-arrow { transform: translateX(4px); }

        /* ─── Visual / Image ─── */
        .hero-visual { position: relative; }

        .visual-frame {
          position: absolute;
          inset: 0;
          border: 1.5px solid var(--rose-light);
          border-radius: 32px;
          transform: translate(16px, 16px);
          z-index: 0;
          pointer-events: none;
        }

        .visual-img-wrap {
          position: relative;
          z-index: 1;
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          background: var(--rose-pale);
        }
        .visual-parallax {
          width: 100%;
          height: 100%;
          will-change: transform;
        }
        .visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          opacity: 0;
          transition: opacity 0.7s ease;
          scale: 1.08;
        }
        .visual-img.img-loaded { opacity: 1; }
        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 55%,
            rgba(58, 44, 48, 0.45) 100%
          );
        }

        /* Badge */
        .visual-badge {
          position: absolute;
          top: -1.4rem;
          left: -1.6rem;
          z-index: 3;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid var(--gold-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.15rem;
          box-shadow: 0 6px 24px rgba(184, 145, 74, 0.18);
          animation: badgePulse 3.5s ease-in-out infinite;
        }
        .badge-icon { font-size: 1rem; color: var(--gold); }
        .badge-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.6rem;
          font-weight: 500;
          color: var(--text-mid);
          text-align: center;
          line-height: 1.3;
          letter-spacing: 0.04em;
        }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1) rotate(-4deg); }
          50%       { transform: scale(1.06) rotate(-4deg); }
        }

        /* Name card */
        .visual-namecard {
          position: absolute;
          bottom: 1.8rem;
          right: -1.8rem;
          z-index: 3;
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 16px;
          padding: 0.9rem 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          box-shadow: 0 8px 30px rgba(201, 114, 138, 0.14);
          animation: cardFloat 4s ease-in-out infinite;
        }
        .namecard-names {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-style: italic;
          font-weight: 500;
          color: var(--text-dark);
        }
        .namecard-date {
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: var(--text-soft);
          text-transform: uppercase;
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }

        /* ─── Scroll indicator ─── */
        .scroll-indicator {
          position: absolute;
          bottom: 2.4rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 2;
          opacity: 0.55;
        }
        .scroll-line {
          display: block;
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--rose), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .scroll-label {
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-soft);
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50%       { opacity: 0.4; transform: scaleY(0.7); }
        }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            text-align: center;
          }
          .hero-eyebrow-row { justify-content: center; }
          .hero-eyebrow-line { display: none; }
          .hero-sub { margin-left: auto; margin-right: auto; }
          .hero-features { justify-content: center; }
          .hero-cta-row { justify-content: center; }
          .hero-divider { justify-content: center; }
          .hero-visual { max-width: 420px; margin: 0 auto; }
          .visual-namecard { right: -0.6rem; }
        }

        @media (max-width: 600px) {
          .amoera-hero { padding: 5rem 0 5rem; }
          .hero-container { padding: 0 1.25rem; gap: 2.8rem; }
          .visual-namecard { right: 0.5rem; }
          .visual-badge { width: 68px; height: 68px; top: -1rem; left: -0.8rem; }
          .scroll-indicator { display: none; }
          .btn { padding: 0.85rem 1.8rem; font-size: 0.75rem; }
          .bg-ring-1 { width: 360px; height: 360px; right: -120px; top: -100px; }
          .bg-ring-2 { width: 240px; height: 240px; right: -60px; top: -40px; }
        }
      `}</style>
    </section>
  );
}