import Image from "next/image";
import styles from "./about.module.css";
import info from "../../data/info.json";

export default function About() {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>About Us</h1>
                    <p>The story behind Papa Jack’s Country Kitchen</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div className={styles.imageCol}>
                            <Image
                                src="/about.png"
                                alt="Papa Jack's Restaurant"
                                width={600}
                                height={800}
                                style={{ borderRadius: "15px", objectFit: "cover" }}
                            />
                        </div>
                        <div className={styles.textCol}>
                            <h2>Honoring a Legacy</h2>
                            <p>Papa Jack’s Country Kitchen is named after <strong>Charles Wesley Mays (“Papa Jack”)</strong>. Our restaurant is more than just a place to eat; it's a tribute to family traditions and the simple joy of a home-cooked meal.</p>

                            <h3>Our Philosophy</h3>
                            <p>We believe in southern homestyle cooking inspired by family recipes passed down through generations. Our goal is to provide a warm, friendly, and family-focused dining experience for everyone who walks through our doors.</p>

                            <h3>What We Offer</h3>
                            <ul>
                                <li><strong>Freshly Prepared Meals:</strong> Breakfast, Lunch, and Dinner (Fridays).</li>
                                <li><strong>Homemade Desserts:</strong> Our famous banana pudding, peach cobbler, and more.</li>
                                <li><strong>Convenience:</strong> Dine-in, Take-out, and Drive-through options.</li>
                                <li><strong>Catering:</strong> Professional catering services available 7 days a week.</li>
                            </ul>

                            <p>Whether you're stopping by for a quick biscuit in the morning or bringing the whole family for a Friday night dinner, we're here to make you feel right at home.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.values} section`}>
                <div className="container">
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueItem}>
                            <h3>Warmth</h3>
                            <p>A welcoming atmosphere where every guest is treated like family.</p>
                        </div>
                        <div className={styles.valueItem}>
                            <h3>Hospitality</h3>
                            <p>Friendly service that goes above and beyond to make your visit special.</p>
                        </div>
                        <div className={styles.valueItem}>
                            <h3>Tradition</h3>
                            <p>Authentic southern recipes that stand the test of time.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
