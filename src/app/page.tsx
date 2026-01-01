import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import info from "../data/info.json";
import menu from "../data/menu.json";

export default function Home() {
  const dailySpecials = menu.lunch.categories[0].items.slice(0, 4);

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroVideo}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero.png"
            className={styles.video}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="animate-fade-in">{info.name}</h1>
          <p className="animate-fade-in">{info.tagline}</p>
          <div className={`${styles.heroBtns} animate-fade-in`}>
            <Link href="/menu/breakfast" className="btn btn-primary">Breakfast Menu</Link>
            <Link href="/menu/lunch" className="btn btn-outline">Lunch Menu</Link>
          </div>
        </div>
      </section>

      {/* Daily Specials Preview */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className={styles.sectionTitle}>Today's Specials</h2>
            <p className={styles.sectionSubtitle}>Freshly prepared southern favorites</p>
          </div>
          <div className={styles.specialsGrid}>
            {dailySpecials.map((item, i) => (
              <div key={i} className={styles.specialCard}>
                <h3>{item.name}</h3>
                <p className={styles.price}>${item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/menu/lunch" className="btn btn-primary">View Full Lunch Menu</Link>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className={`${styles.highlights} section`}>
        <div className="container">
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightItem}>
              <div className={styles.icon}>🍳</div>
              <h3>Dine-In</h3>
              <p>Enjoy our warm hospitality and fresh meals in our cozy dining room.</p>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.icon}>🚗</div>
              <h3>Drive-Through</h3>
              <p>On the go? Grab your favorite southern meals at our convenient drive-through.</p>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.icon}>📦</div>
              <h3>Take-Out</h3>
              <p>Call ahead and we'll have your order ready for pickup.</p>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.icon}>🤝</div>
              <h3>Catering</h3>
              <p>Let us bring the taste of Papa Jack's to your next event or gathering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2>Our Story</h2>
              <p>Named after Charles Wesley Mays (“Papa Jack”), our kitchen is built on a legacy of warmth, hospitality, and homemade meals.</p>
              <p>We believe in serving food that feeds the soul, just like mama used to make. From our fluffy biscuits to our famous peach cobbler, every dish is prepared with love and tradition.</p>
              <Link href="/about" className="btn btn-outline">Read Our Full Story</Link>
            </div>
            <div className={styles.aboutImage}>
              <Image
                src="/about.png"
                alt="Papa Jack's Interior"
                width={600}
                height={400}
                style={{ borderRadius: "15px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
