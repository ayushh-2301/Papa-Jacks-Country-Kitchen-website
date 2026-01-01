import Image from "next/image";
import styles from "./catering.module.css";
import menu from "@/data/menu.json";

export default function Catering() {
    return (
        <div className={styles.cateringPage}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Catering Services</h1>
                    <p>Let us bring the southern homestyle taste to your next event</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div className={styles.textCol}>
                            <h2>Professional Catering for Any Occasion</h2>
                            <p>{menu.catering.overview}</p>

                            <h3>What We Provide</h3>
                            <ul className={styles.capabilities}>
                                {menu.catering.capabilities.map((cap, i) => (
                                    <li key={i}>{cap}</li>
                                ))}
                            </ul>

                            <h3>Coverage Areas</h3>
                            <p>We proudly serve the following areas and nearby locations:</p>
                            <div className={styles.coverageGrid}>
                                {menu.catering.coverage.map((area, i) => (
                                    <span key={i} className={styles.areaTag}>{area}</span>
                                ))}
                            </div>

                            <div className={styles.ctaBox}>
                                <h3>Ready to request a quote?</h3>
                                <p>Call us at <strong>(770) 965-7007</strong> or email <strong>papajackscatering07@gmail.com</strong></p>
                                <button className="btn btn-primary">Request Catering Quote</button>
                            </div>
                        </div>
                        <div className={styles.imageCol}>
                            <Image
                                src="/catering.png"
                                alt="Catering Spread"
                                width={600}
                                height={800}
                                style={{ borderRadius: "15px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.info} section`}>
                <div className="container">
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <h3>Delivery & Setup</h3>
                            <p>We typically arrive 45–60 minutes before your event to ensure everything is perfectly set up and ready to serve.</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h3>Banquet Room</h3>
                            <p>Need a space? We have a banquet room available for your private gatherings and celebrations.</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h3>Full Service</h3>
                            <p>From drop-off to staffed options, we can tailor our services to meet your specific needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
