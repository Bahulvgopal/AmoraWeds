import Hero from "@/components/Hero";
import Link from "next/link";
import SwipeCardStack, { CardData } from "@/components/SwipeCardStack";
import connectDB from "@/lib/mongodb";
import Review from "@/models/Review";

async function getReviews() {
  try {
    await connectDB();
    const reviews = await Review.find().sort({ createdAt: -1 }).limit(3);
    return JSON.parse(JSON.stringify(reviews));
  } catch (error) {
    console.log(error);
    return [];
  }
}

// ✅ Your wedding photos — change the titles/subtitles to your own story
const cards: CardData[] = [
  {
    id: 1,
    image: "/templates/1.png",   // 👈 put your image files inside public/templates/
    title: "Aanya & Vihan",
    subtitle: "Udaipur, 2026",
  },
  {
    id: 2,
    image: "/templates/2.png",
    title: "Arjun & Priya",
    subtitle: "Mysore, 2026",
  },
  {
    id: 3,
    image: "/templates/3.png",
    title: "Sarah & James",
    subtitle: "Paris, 2026",
  },
  {
    id: 4,
    image: "/templates/4.png",
    title: "Meghna & Srivats",
    subtitle: "Thiruvananthapuram, 2026",
  },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const reviews = await getReviews();

  return (
    <main className="amoera-main">
      {/* Floating Petals Layer */}
      <div className="petals-container" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className={`petal petal-${i + 1}`} />
        ))}
      </div>

      <Hero />

      {/* ✅ Swipe Cards Section — Our Story */}
      
      <section className="swipe-section">
        <div className="container">
          {/* ── Header ── */}
      <div className="h3c-header">
        <span className="h3c-eyebrow">
          <span className="h3c-eyebrow-line" />
          Premium Collection
          <span className="h3c-eyebrow-line" />
        </span>
        <h2 className="h3c-title">
          Explore Our<br />
          <em>Wedding Templates</em>
        </h2>
        <div className="h3c-divider">
          <span className="h3c-leaf" aria-hidden="true">❧</span>
        </div>
        <p className="h3c-subtitle">
          Handcrafted with love — each template tells a unique story
        </p>
      </div>
          

          {/* The swipe card stack lives here */}
          <div className="swipe-wrapper">
            <SwipeCardStack cards={cards} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Promise</span>
            <h2 className="section-title">Why Choose AmoraWeds?</h2>
            <div className="divider">
              <span className="divider-leaf">❧</span>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✦</div>
              <h3 className="feature-title">Premium Design</h3>
              <p className="feature-text">
                Beautiful and elegant designs crafted with love for your
                timeless wedding memories.
              </p>
            </div>

            <div className="feature-card feature-card--center">
              <div className="feature-icon">⌛</div>
              <h3 className="feature-title">Fast Delivery</h3>
              <p className="feature-text">
                Your dream wedding website, ready and live within days — so you
                can focus on what matters.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✂</div>
              <h3 className="feature-title">Fully Customizable</h3>
              <p className="feature-text">
                Choose features, palettes, and layouts tailored to your
                requirements and vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="reviews-section">
        <div className="reviews-curve" aria-hidden="true" />

        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow--dark">Love Stories</span>
            <h2 className="section-title section-title--dark">
              What Our Couples Say
            </h2>
            <p className="section-subtitle">
              Heartfelt words from couples who entrusted AmoeraWeds with their
              most special day.
            </p>
            <div className="divider">
              <span className="divider-leaf divider-leaf--dark">❧</span>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.slice(0, 3).map((review: any) => (
              <div key={review._id} className="review-card">
                <div className="review-quote-mark">"</div>
                <p className="review-message">{review.message}</p>
                <div className="review-footer">
                  <div className="review-avatar">
                    {review.name?.charAt(0) ?? "?"}
                  </div>
                  <div>
                    <p className="review-name">{review.name}</p>
                    <p className="review-rating">
                      {"★".repeat(Math.min(review.rating, 5))}
                      <span className="review-rating-num"> {review.rating}/5</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-group">
            <Link href="/reviews" className="btn btn--primary">
              View All Reviews
            </Link>
            <Link href="/reviews" className="btn btn--outline">
              Share Your Review
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

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

        .amoera-main {
          font-family: 'Jost', sans-serif;
          background: var(--ivory);
          color: var(--text-dark);
          overflow-x: hidden;
          position: relative;
        }

        

        .petals-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .petal {
          position: absolute;
          top: -60px;
          border-radius: 150% 0 150% 0;
          opacity: 0;
          animation: falling linear infinite;
        }

        .petal:nth-child(odd)  { background: var(--rose-light); }
        .petal:nth-child(even) { background: var(--gold-light); }
        .petal:nth-child(3n)   { border-radius: 0 150% 0 150%; }
        .petal:nth-child(5n)   { border-radius: 50% 50% 0 50%; }

        .petal-1  { width:14px; height:18px; left:5%;  animation-duration:10s; animation-delay:0s;   }
        .petal-2  { width:10px; height:14px; left:12%; animation-duration:13s; animation-delay:1.5s; }
        .petal-3  { width:18px; height:22px; left:20%; animation-duration:9s;  animation-delay:3s;   }
        .petal-4  { width:12px; height:16px; left:28%; animation-duration:14s; animation-delay:0.5s; }
        .petal-5  { width:16px; height:20px; left:35%; animation-duration:11s; animation-delay:2s;   }
        .petal-6  { width:10px; height:13px; left:43%; animation-duration:12s; animation-delay:4s;   }
        .petal-7  { width:20px; height:24px; left:52%; animation-duration:10s; animation-delay:1s;   }
        .petal-8  { width:14px; height:18px; left:60%; animation-duration:15s; animation-delay:2.5s; }
        .petal-9  { width:11px; height:15px; left:67%; animation-duration:11s; animation-delay:0.8s; }
        .petal-10 { width:17px; height:21px; left:75%; animation-duration:13s; animation-delay:3.5s; }
        .petal-11 { width:12px; height:16px; left:82%; animation-duration:9s;  animation-delay:1.2s; }
        .petal-12 { width:15px; height:19px; left:89%; animation-duration:12s; animation-delay:4.5s; }
        .petal-13 { width:10px; height:14px; left:8%;  animation-duration:14s; animation-delay:5s;   }
        .petal-14 { width:19px; height:23px; left:22%; animation-duration:10s; animation-delay:6s;   }
        .petal-15 { width:13px; height:17px; left:48%; animation-duration:11s; animation-delay:2.8s; }
        .petal-16 { width:16px; height:20px; left:63%; animation-duration:13s; animation-delay:7s;   }
        .petal-17 { width:11px; height:15px; left:78%; animation-duration:9s;  animation-delay:3.8s; }
        .petal-18 { width:14px; height:18px; left:94%; animation-duration:12s; animation-delay:1.8s; }

        @keyframes falling {
          0%   { transform: translateY(-60px) rotate(0deg)   translateX(0);   opacity: 0;   }
          10%  { opacity: 0.7; }
          50%  { transform: translateY(50vh)  rotate(180deg) translateX(30px); }
          90%  { opacity: 0.5; }
          100% { transform: translateY(110vh) rotate(360deg) translateX(-20px); opacity: 0; }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        /* ── Header ── */
        .h3c-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .h3c-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 1.1rem;
        }
        .h3c-eyebrow-line {
          display: inline-block;
          width: 32px;
          height: 1px;
          background: var(--gold-light);
        }
          
        
        .h3c-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          margin: 1.3rem auto 1.1rem;
          max-width: 180px;
        }
        .h3c-divider::before, .h3c-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--gold-light);
        }
        .h3c-leaf { color: var(--rose); font-size: 1rem; }

        .h3c-subtitle {
          color: var(--text-mid);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.8;
          max-width: 380px;
          margin: 0 auto;
        }

        .h3c-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 4.4rem);
          font-weight: 300;
          color: var(--text-dark);
          line-height: 1.15;
        }
        .h3c-title em {
          font-style: italic;
          color: var(--rose);
          font-weight: 400;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .eyebrow {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--rose);
          margin-bottom: 1rem;
        }

        .eyebrow--dark { color: var(--gold); }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 300;
          line-height: 1.15;
          color: var(--text-dark);
          margin: 0;
        }

        .section-title--dark { color: var(--text-dark); }

        .section-subtitle {
          margin-top: 1.2rem;
          color: var(--text-mid);
          font-size: 1.05rem;
          font-weight: 300;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .divider {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .divider::before,
        .divider::after {
          content: '';
          display: block;
          width: 60px;
          height: 1px;
          background: var(--gold-light);
        }

        .divider-leaf { color: var(--rose); font-size: 1.2rem; }
        .divider-leaf--dark { color: var(--gold); }

        /* ✅ Swipe Section */
        .swipe-section {
          padding: 7rem 0;
          background: linear-gradient(180deg, var(--ivory) 0%, var(--blush) 100%);
          position: relative;
          z-index: 1;
        }

        .swipe-wrapper {
          display: flex;
          justify-content: center;
          padding-top: 1rem;
        }

        /* Why Section */
        .why-section {
          padding: 8rem 0;
          background: var(--ivory);
          position: relative;
          z-index: 1;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr; }
        }

        .feature-card {
          background: #fff;
          border: 1px solid var(--rose-light);
          border-radius: 24px;
          padding: 3rem 2.2rem;
          text-align: center;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(201, 114, 138, 0.12);
        }

        .feature-card--center {
          background: linear-gradient(145deg, #fff5f8 0%, #fff 60%);
          border-color: var(--rose);
          box-shadow: 0 8px 40px rgba(201, 114, 138, 0.10);
        }

        .feature-icon {
          font-size: 2rem;
          color: var(--rose);
          margin-bottom: 1.5rem;
          display: block;
        }

        .feature-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.7rem;
          font-weight: 500;
          color: var(--text-dark);
          margin: 0 0 1rem;
        }

        .feature-text {
          color: var(--text-mid);
          font-weight: 300;
          line-height: 1.8;
          margin: 0;
          font-size: 0.97rem;
        }

        /* Reviews Section */
        .reviews-section {
          background: var(--blush);
          padding: 0 0 7rem;
          position: relative;
          z-index: 1;
        }

        .reviews-curve {
          width: 100%;
          height: 80px;
          background: var(--ivory);
          clip-path: ellipse(55% 100% at 50% 0%);
          margin-bottom: 5rem;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }

        .review-card {
          background: #fff;
          border-radius: 24px;
          padding: 2.5rem 2rem 2rem;
          border: 1px solid rgba(201, 114, 138, 0.15);
          box-shadow: 0 4px 30px rgba(180, 100, 120, 0.07);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 50px rgba(180, 100, 120, 0.14);
        }

        .review-quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          line-height: 0.6;
          color: var(--rose-light);
          margin-bottom: 1.2rem;
          display: block;
          font-weight: 600;
        }

        .review-message {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text-mid);
          line-height: 1.85;
          flex: 1;
          margin: 0 0 2rem;
        }

        .review-footer {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-top: 1px solid var(--rose-light);
          padding-top: 1.2rem;
        }

        .review-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--rose) 0%, var(--gold) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 500;
          flex-shrink: 0;
        }

        .review-name {
          font-weight: 500;
          color: var(--text-dark);
          margin: 0 0 0.25rem;
          font-size: 0.95rem;
        }

        .review-rating {
          color: var(--gold);
          font-size: 0.85rem;
          margin: 0;
        }

        .review-rating-num {
          color: var(--text-soft);
          font-size: 0.75rem;
        }

        .cta-group {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
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
          box-shadow: 0 8px 30px rgba(201, 114, 138, 0.35);
        }

        .btn--primary:hover {
          box-shadow: 0 12px 40px rgba(201, 114, 138, 0.50);
          transform: translateY(-2px);
        }

        .btn--outline {
          border: 1.5px solid var(--rose);
          color: var(--rose);
          background: transparent;
        }

        .btn--outline:hover {
          background: var(--rose);
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}
