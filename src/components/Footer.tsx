import Link from "next/link";
import styles from "./Footer.module.css";
import info from "../data/info.json";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerGrid}`}>
                <div className={styles.brand}>
                    <h2 className={styles.logo}>Papa Jack’s</h2>
                    <p>{info.tagline}</p>
                    <div className={styles.socials}>
                        <a href={info.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href={info.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>

                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/menu/breakfast">Breakfast Menu</Link></li>
                        <li><Link href="/menu/lunch">Lunch Menu</Link></li>
                        <li><Link href="/catering">Catering</Link></li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h3>Contact Us</h3>
                    <p>{info.contact.address}</p>
                    <p>{info.contact.phone}</p>
                    <p>{info.contact.email}</p>
                </div>

                <div className={styles.hours}>
                    <h3>Hours</h3>
                    <ul>
                        {info.hours.map((h, i) => (
                            <li key={i}>
                                <strong>{h.day}:</strong> {h.hours}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Papa Jack’s Country Kitchen. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
