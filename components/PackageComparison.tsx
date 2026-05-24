import { comparisonTable } from "@/data/packages";

export default function PackageComparison() {
  const tiers = [
    { key: "budget",  label: "Budget",  icon: "❀", mod: ""           },
    { key: "mid",     label: "Mid",     icon: "❧", mod: "col--mid"   },
    { key: "premium", label: "Premium", icon: "♛", mod: "col--prem"  },
  ];

  return (
    <section className="cmp-root">

      {/* ── Decorative blobs ── */}
      <div className="cmp-blob cmp-blob--1" aria-hidden="true" />
      <div className="cmp-blob cmp-blob--2" aria-hidden="true" />

      {/* ── Header ── */}
      <div className="cmp-header">
        <span className="cmp-eyebrow">Side by Side</span>
        <h2 className="cmp-title">Compare Packages</h2>
        <div className="cmp-divider">
          <span className="cmp-leaf" aria-hidden="true">❧</span>
        </div>
        <p className="cmp-subtitle">
          Quickly see what's included in each package and choose what fits your love story.
        </p>
      </div>

      {/* ── Desktop table ── */}
      <div className="cmp-table-wrap">
        <table className="cmp-table" role="table">
          <thead>
            <tr>
              <th className="cmp-th cmp-th--feature" scope="col">Feature</th>
              {tiers.map((t) => (
                <th key={t.key} className={`cmp-th cmp-th--tier ${t.mod}`} scope="col">
                  <span className="cmp-tier-icon" aria-hidden="true">{t.icon}</span>
                  <span className="cmp-tier-name">{t.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonTable.map((item, i) => (
              <tr key={`${item.feature}-${i}`} className={`cmp-tr ${i % 2 === 0 ? "cmp-tr--even" : ""}`}>
                <td className="cmp-td cmp-td--feature">{item.feature}</td>
                <td className="cmp-td cmp-td--val">{item.budget}</td>
                <td className="cmp-td cmp-td--val cmp-td--mid">{item.mid}</td>
                <td className="cmp-td cmp-td--val cmp-td--prem">{item.premium}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile cards (stacked per feature) ── */}
      <div className="cmp-mobile">
        {comparisonTable.map((item, i) => (
          <div key={`${item.feature}-${i}`} className="cmp-mob-row">
            <p className="cmp-mob-feature">{item.feature}</p>
            <div className="cmp-mob-cols">
              {tiers.map((t) => (
                <div key={t.key} className={`cmp-mob-cell ${t.mod}`}>
                  <span className="cmp-mob-tier">
                    <span aria-hidden="true">{t.icon}</span> {t.label}
                  </span>
                  <span className="cmp-mob-val">
                    {item[t.key as keyof typeof item]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Footer note ── */}
      <p className="cmp-note">
        <span aria-hidden="true">✦</span> All packages include mobile-responsive design and WhatsApp sharing support.
      </p>

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

        /* ── Root ── */
        .cmp-root {
          font-family: 'Jost', sans-serif;
          background: var(--ivory);
          padding: 6rem 1.5rem 5rem;
          position: relative;
          overflow: hidden;
        }

        /* ── Blobs ── */
        .cmp-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(72px);
          z-index: 0;
        }
        .cmp-blob--1 { width:350px;height:350px;background:var(--rose-light);opacity:0.35;top:-80px;right:-100px; }
        .cmp-blob--2 { width:260px;height:260px;background:var(--gold-light);opacity:0.28;bottom:-60px;left:-80px; }

        /* ── Header ── */
        .cmp-header {
          text-align: center;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 1;
        }
        .cmp-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 1rem;
        }
        .cmp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.1;
        }
        .cmp-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          margin: 1.3rem auto 1.2rem;
          max-width: 180px;
        }
        .cmp-divider::before,.cmp-divider::after {
          content:'';flex:1;height:1px;background:var(--gold-light);
        }
        .cmp-leaf { color:var(--rose);font-size:1rem; }
        .cmp-subtitle {
          color: var(--text-mid);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          max-width: 480px;
          margin: 0 auto;
        }

        /* ── Table wrap ── */
        .cmp-table-wrap {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          margin: 0 auto;
          overflow-x: auto;
          border-radius: 28px;
          border: 1px solid var(--rose-light);
          box-shadow: 0 8px 50px rgba(180,100,120,0.09);
          background: #fff;
        }

        /* hide on mobile */
        @media (max-width: 680px) { .cmp-table-wrap { display: none; } }

        /* ── Table ── */
        .cmp-table {
          width: 100%;
          min-width: 640px;
          border-collapse: collapse;
        }

        /* thead */
        .cmp-th {
          padding: 1.5rem 1.75rem;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          background: var(--rose-pale);
          border-bottom: 1px solid var(--rose-light);
        }
        .cmp-th--feature {
          text-align: left;
          color: var(--text-dark);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          width: 36%;
        }
        .cmp-th--tier {
          text-align: center;
          width: 21.3%;
        }
        .cmp-tier-icon {
          display: block;
          font-size: 1.3rem;
          color: var(--rose);
          margin-bottom: 0.3rem;
        }
        .cmp-tier-name {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--text-dark);
          letter-spacing: 0.03em;
        }

        /* mid column highlight */
        .col--mid .cmp-tier-icon  { color: var(--rose); }
        .col--mid .cmp-tier-name  { color: var(--rose); }
        .col--prem .cmp-tier-icon { color: var(--gold); }
        .col--prem .cmp-tier-name { color: var(--gold); }

        /* tbody rows */
        .cmp-tr { border-bottom: 1px solid rgba(201,114,138,0.09); transition: background 0.2s; }
        .cmp-tr:last-child { border-bottom: none; }
        .cmp-tr--even { background: var(--rose-pale); }
        .cmp-tr:hover { background: var(--blush); }

        .cmp-td {
          padding: 1.1rem 1.75rem;
          font-size: 0.93rem;
          color: var(--text-mid);
          font-weight: 300;
          vertical-align: middle;
        }
        .cmp-td--feature {
          font-weight: 500;
          color: var(--text-dark);
          font-size: 0.95rem;
        }
        .cmp-td--val { text-align: center; }
        .cmp-td--mid  { color: var(--rose);  font-weight: 400; }
        .cmp-td--prem { color: var(--gold);  font-weight: 500; }

        /* ── Mobile cards ── */
        .cmp-mobile {
          display: none;
          position: relative;
          z-index: 1;
          max-width: 520px;
          margin: 0 auto;
          flex-direction: column;
          gap: 1rem;
        }
        @media (max-width: 680px) { .cmp-mobile { display: flex; } }

        .cmp-mob-row {
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 20px;
          padding: 1.25rem 1.25rem 1rem;
          box-shadow: 0 2px 16px rgba(180,100,120,0.06);
        }
        .cmp-mob-feature {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 0.85rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--rose-light);
        }
        .cmp-mob-cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
        }
        .cmp-mob-cell {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          background: var(--rose-pale);
          border-radius: 12px;
          padding: 0.7rem 0.5rem;
          text-align: center;
        }
        .col--mid  .cmp-mob-cell,
        .cmp-mob-cols .col--mid {
          background: var(--rose-pale);
        }
        .col--prem .cmp-mob-cell,
        .cmp-mob-cols .col--prem {
          background: var(--gold-pale);
        }
        .cmp-mob-cell.col--mid  { background: var(--rose-pale); }
        .cmp-mob-cell.col--prem { background: var(--gold-pale); }

        .cmp-mob-tier {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-soft);
        }
        .cmp-mob-val {
          font-size: 0.88rem;
          font-weight: 400;
          color: var(--text-mid);
          line-height: 1.45;
          word-break: break-word;
        }
        .col--mid  .cmp-mob-val { color: var(--rose);  font-weight: 500; }
        .col--prem .cmp-mob-val { color: var(--gold);  font-weight: 600; }

        /* ── Footer note ── */
        .cmp-note {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-top: 2.5rem;
          color: var(--text-soft);
          font-size: 0.83rem;
          font-weight: 300;
          line-height: 1.7;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .cmp-note span { color: var(--rose); font-size: 0.7rem; }
      `}</style>
    </section>
  );
}