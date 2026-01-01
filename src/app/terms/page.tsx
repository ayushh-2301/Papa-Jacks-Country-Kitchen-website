import styles from "../legal.module.css";

export default function Terms() {
    return (
        <div className={styles.legalPage}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Terms & Conditions</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.content}>
                        <h2>Acceptance of Terms</h2>
                        <p>By accessing or using the Papa Jack’s Country Kitchen website, you agree to be bound by these Terms & Conditions.</p>

                        <h2>Menu & Pricing</h2>
                        <p>Menu items and pricing are subject to change without notice. We strive to keep our online menu as accurate as possible.</p>

                        <h2>Catering Services</h2>
                        <p>Catering orders are subject to availability and confirmation. Specific terms for delivery and setup will be discussed at the time of booking.</p>

                        <h2>Intellectual Property</h2>
                        <p>All content on this website, including text, images, and logos, is the property of Papa Jack’s Country Kitchen and may not be used without permission.</p>

                        <h2>Limitation of Liability</h2>
                        <p>Papa Jack’s Country Kitchen is not liable for any damages arising from the use of this website or our services, to the extent permitted by law.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
