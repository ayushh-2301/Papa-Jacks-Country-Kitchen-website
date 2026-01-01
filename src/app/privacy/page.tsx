import styles from "../legal.module.css";

export default function PrivacyPolicy() {
    return (
        <div className={styles.legalPage}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Privacy Policy</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.content}>
                        <h2>Introduction</h2>
                        <p>At Papa Jack’s Country Kitchen, we respect your privacy and are committed to protecting any personal information you share with us.</p>

                        <h2>Information We Collect</h2>
                        <p>We may collect personal information such as your name, email address, and phone number when you contact us or request a catering quote.</p>

                        <h2>How We Use Your Information</h2>
                        <p>We use your information to respond to your inquiries, provide catering services, and improve our website experience.</p>

                        <h2>Security</h2>
                        <p>We take reasonable measures to protect your personal information from unauthorized access or disclosure.</p>

                        <h2>Contact Us</h2>
                        <p>If you have any questions about our Privacy Policy, please contact us at papajackscatering07@gmail.com.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
