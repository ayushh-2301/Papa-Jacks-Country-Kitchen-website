import styles from "./contact.module.css";
import info from "../../data/info.json";

export default function Contact() {
    return (
        <div className={styles.contactPage}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you!</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h2>Get In Touch</h2>
                            <p>Whether you have a question about our menu, want to book catering, or just want to say hi, feel free to reach out.</p>

                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <div className={styles.icon}>📍</div>
                                    <div>
                                        <h3>Address</h3>
                                        <p>{info.contact.address}</p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.icon}>📞</div>
                                    <div>
                                        <h3>Phone</h3>
                                        <p><a href={`tel:${info.contact.phone}`}>{info.contact.phone}</a></p>
                                    </div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.icon}>✉️</div>
                                    <div>
                                        <h3>Email</h3>
                                        <p><a href={`mailto:${info.contact.email}`}>{info.contact.email}</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.hoursBox}>
                                <h3>Hours of Operation</h3>
                                <ul>
                                    {info.hours.map((h, i) => (
                                        <li key={i}>
                                            <strong>{h.day}:</strong> {h.hours}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.contactForm}>
                            <h2>Send a Message</h2>
                            <form>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone" name="phone" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>
                                        <input type="checkbox" name="catering" /> Catering Inquiry
                                    </label>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows={5} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.mapSection}>
                <div className="container">
                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.844394623405!2d-83.94544!3d34.048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5963888888889%3A0x8888888888888888!2s2200%20Sparta%20Way%2C%20Buford%2C%20GA%2030519!5e0!3m2!1sen!2sus!4v1641000000000!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: "15px" }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
