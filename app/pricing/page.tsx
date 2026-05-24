import PricingCard from "@/components/PricingCard";
import { packages } from "@/data/packages";
import PackageComparison from "@/components/PackageComparison";

export default function PricingPage() {
  return (
    <main className="pricing-page">

      {/* ── Floating Petals ── */}
      <div className="petals-container" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`} />
        ))}
      </div>

      {/* ── Hero ── */}
      <header className="pricing-hero">
        <div className="pricing-hero-inner">
          <span className="eyebrow">Transparent Pricing</span>
          <h1 className="page-title">Our Packages</h1>
          <div className="divider">
            <span className="divider-leaf">❧</span>
          </div>
          <p className="page-subtitle">
            Choose the perfect wedding website package crafted for your style,
            budget, and every beautiful detail of your special day.
          </p>
        </div>

        {/* floating decorative rings */}
        <div className="hero-ring hero-ring--1" aria-hidden="true" />
        <div className="hero-ring hero-ring--2" aria-hidden="true" />
        <div className="hero-curve" aria-hidden="true" />
      </header>

      {/* ── Pricing section ── */}
      <section className="pricing-section">
        <div className="pricing-container">

          {/* Cards grid */}
          <div className="pricing-grid">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.id}
                className={`pricing-card-wrap ${idx === 1 ? "pricing-card-wrap--featured" : ""}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {idx === 1 && (
                  <div className="featured-badge">
                    <span>✦</span> Most Popular
                  </div>
                )}
                <PricingCard
                  title={pkg.title}
                  subtitle={pkg.subtitle}
                  bestFor={pkg.bestFor}
                  price={pkg.price}
                  delivery={pkg.delivery}
                  themes={pkg.themes}
                  features={pkg.features}
                  addons={pkg.addons}
                />
              </div>
            ))}
          </div>
          <PackageComparison />

          {/* ── Trust strip ── */}
          <div className="trust-strip">
            <div className="trust-item">
              <span className="trust-icon" aria-hidden="true">✦</span>
              <span>No hidden charges</span>
            </div>
            <div className="trust-sep" aria-hidden="true">❧</div>
            <div className="trust-item">
              <span className="trust-icon" aria-hidden="true">⌛</span>
              <span>Fast delivery guaranteed</span>
            </div>
            <div className="trust-sep" aria-hidden="true">❧</div>
            <div className="trust-item">
              <span className="trust-icon" aria-hidden="true">✂</span>
              <span>Fully customizable</span>
            </div>
          </div>

          {/* ── CTA banner ── */}
          <div className="cta-banner">
            <div className="cta-banner-deco" aria-hidden="true">❧</div>
            <span className="eyebrow eyebrow--gold">Still unsure?</span>
            <h2 className="cta-banner-title">Let's Talk About Your Dream Day</h2>
            <p className="cta-banner-sub">
              We're happy to help you pick the right package — or build something bespoke just for you.
            </p>
            <a
              href="https://wa.me/918075298373"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-wa-btn"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* flourish */}
          <div className="page-flourish" aria-hidden="true">
            <span>✦</span><span>❧</span><span>✦</span>
          </div>

        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --rose:       #c9728a;
          --rose-light: #f5e0e6;
          --rose-pale:  #fdf4f6;
          --rose-deep:  #b05575;
          --gold:       #b8914a;
          --gold-light: #e8d5b0;
          --gold-pale:  #fdf8ef;
          --ivory:      #fffaf5;
          --blush:      #faeef2;
          --text-dark:  #3a2c30;
          --text-mid:   #7a5c64;
          --text-soft:  #b89aa0;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pricing-page {
          font-family: 'Jost', sans-serif;
          background: var(--ivory);
          color: var(--text-dark);
          overflow-x: hidden;
          min-height: 100vh;
          position: relative;
        }

        /* ── Petals ── */
        .petals-container { position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden }
        .petal { position:absolute;top:-60px;border-radius:150% 0 150% 0;opacity:0;animation:falling linear infinite }
        .petal:nth-child(odd)  { background:var(--rose-light) }
        .petal:nth-child(even) { background:var(--gold-light) }
        .petal:nth-child(3n)   { border-radius:0 150% 0 150% }
        .petal:nth-child(5n)   { border-radius:50% 50% 0 50% }
        .petal-1  { width:14px;height:18px;left:4%;animation-duration:10s;animation-delay:0s }
        .petal-2  { width:10px;height:14px;left:11%;animation-duration:13s;animation-delay:1.5s }
        .petal-3  { width:18px;height:22px;left:20%;animation-duration:9s;animation-delay:3s }
        .petal-4  { width:12px;height:16px;left:29%;animation-duration:14s;animation-delay:0.5s }
        .petal-5  { width:16px;height:20px;left:38%;animation-duration:11s;animation-delay:2s }
        .petal-6  { width:10px;height:13px;left:47%;animation-duration:12s;animation-delay:4s }
        .petal-7  { width:20px;height:24px;left:55%;animation-duration:10s;animation-delay:1s }
        .petal-8  { width:14px;height:18px;left:63%;animation-duration:15s;animation-delay:2.5s }
        .petal-9  { width:11px;height:15px;left:71%;animation-duration:11s;animation-delay:0.8s }
        .petal-10 { width:17px;height:21px;left:79%;animation-duration:13s;animation-delay:3.5s }
        .petal-11 { width:12px;height:16px;left:86%;animation-duration:9s;animation-delay:1.2s }
        .petal-12 { width:15px;height:19px;left:92%;animation-duration:12s;animation-delay:4.5s }
        .petal-13 { width:10px;height:14px;left:7%;animation-duration:14s;animation-delay:5s }
        .petal-14 { width:19px;height:23px;left:54%;animation-duration:10s;animation-delay:6s }
        .petal-15 { width:13px;height:17px;left:33%;animation-duration:11s;animation-delay:2.8s }
        .petal-16 { width:16px;height:20px;left:97%;animation-duration:13s;animation-delay:7s }

        @keyframes falling {
          0%   { transform:translateY(-60px) rotate(0deg) translateX(0);opacity:0 }
          10%  { opacity:0.65 }
          50%  { transform:translateY(50vh) rotate(180deg) translateX(28px) }
          90%  { opacity:0.45 }
          100% { transform:translateY(110vh) rotate(360deg) translateX(-20px);opacity:0 }
        }

        /* ── Hero ── */
        .pricing-hero {
          background: linear-gradient(160deg, var(--blush) 0%, #f9e8ee 55%, var(--rose-pale) 100%);
          padding: 6rem 1.5rem 0;
          text-align: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .pricing-hero-inner {
          max-width: 680px;
          margin: 0 auto;
          padding-bottom: 5rem;
          position: relative;
          z-index: 2;
        }

        /* decorative rings */
        .hero-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid var(--rose-light);
          pointer-events: none;
          z-index: 1;
        }
        .hero-ring--1 {
          width: 380px; height: 380px;
          top: -180px; right: -120px;
          opacity: 0.5;
        }
        .hero-ring--2 {
          width: 220px; height: 220px;
          bottom: 40px; left: -80px;
          opacity: 0.35;
          border-color: var(--gold-light);
        }

        .eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 1.2rem;
        }
        .eyebrow--gold { color: var(--gold); }

        .page-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 7vw, 4.8rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.1;
        }

        .page-subtitle {
          margin: 1.5rem auto 0;
          color: var(--text-mid);
          font-weight: 300;
          font-size: 1.05rem;
          line-height: 1.9;
          max-width: 500px;
        }

        .divider {
          margin: 1.4rem auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          max-width: 200px;
        }
        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--gold-light);
        }
        .divider-leaf { color: var(--rose); font-size: 1.1rem; }

        .hero-curve {
          width: 100%;
          height: 70px;
          background: var(--ivory);
          clip-path: ellipse(55% 100% at 50% 100%);
          position: relative;
          z-index: 2;
        }

        /* ── Section ── */
        .pricing-section {
          position: relative;
          z-index: 1;
          padding-bottom: 5rem;
        }

        .pricing-container {
          max-width: 1220px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        /* ── Grid ── */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          align-items: start;
        }

        /* Card wrapper handles featured elevation */
        .pricing-card-wrap {
          position: relative;
          animation: cardReveal 0.55s ease both;
        }

        .pricing-card-wrap--featured {
          transform: translateY(-12px);
          z-index: 2;
        }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .pricing-card-wrap--featured {
          animation: cardRevealFeatured 0.55s ease both;
        }

        @keyframes cardRevealFeatured {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(-12px); }
        }

        /* "Most Popular" badge */
        .featured-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          background: linear-gradient(135deg, var(--rose) 0%, var(--rose-deep) 100%);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 0.38rem 1.2rem;
          border-radius: 9999px;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(201, 114, 138, 0.35);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .featured-badge span { font-size: 0.6rem; opacity: 0.85; }

        /* ── Trust strip ── */
        .trust-strip {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-top: 4rem;
          padding: 1.4rem 2rem;
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 18px;
          box-shadow: 0 2px 16px rgba(180, 100, 120, 0.05);
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--text-mid);
          letter-spacing: 0.03em;
        }
        .trust-icon { color: var(--rose); font-size: 0.8rem; }
        .trust-sep  { color: var(--gold-light); font-size: 1.1rem; }

        /* ── CTA Banner ── */
        .cta-banner {
          margin-top: 3.5rem;
          background: linear-gradient(145deg, var(--blush) 0%, var(--gold-pale) 100%);
          border: 1px solid var(--gold-light);
          border-radius: 28px;
          padding: 3.5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-banner-deco {
          position: absolute;
          top: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 5rem;
          color: var(--rose-light);
          font-family: 'Cormorant Garamond', serif;
          pointer-events: none;
          line-height: 1;
        }
        .cta-banner-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 300;
          color: var(--text-dark);
          margin: 0.5rem 0 1rem;
          line-height: 1.2;
        }
        .cta-banner-sub {
          color: var(--text-mid);
          font-size: 0.97rem;
          font-weight: 300;
          line-height: 1.85;
          max-width: 440px;
          margin: 0 auto 2rem;
        }
        .cta-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.84rem;
          font-weight: 500;
          letter-spacing: 0.09em;
          padding: 0.9rem 2.2rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #25d366 0%, #128c4e 100%);
          color: #fff;
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.30);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .cta-wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.42);
        }

        /* ── Flourish ── */
        .page-flourish {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          margin-top: 3rem;
          color: var(--gold-light);
          font-size: 1rem;
          letter-spacing: 0.5rem;
        }
        .page-flourish span:nth-child(2) { color: var(--rose-light); font-size: 1.2rem; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .pricing-grid { grid-template-columns: 1fr 1fr; }
          .pricing-card-wrap--featured { transform: none; }
          @keyframes cardRevealFeatured {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        }

        @media (max-width: 640px) {
          .pricing-hero { padding: 4rem 1.25rem 0; }
          .pricing-hero-inner { padding-bottom: 3.5rem; }
          .pricing-grid { grid-template-columns: 1fr; }
          .pricing-card-wrap--featured { transform: none; }
          .trust-strip { gap: 0.9rem; padding: 1.2rem 1.25rem; }
          .trust-sep { display: none; }
          .cta-banner { padding: 3rem 1.4rem; }
          .pricing-container { padding: 1.5rem 1rem; }
        }
      `}</style>
    </main>
  );
}