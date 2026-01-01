import styles from "./comments.module.css";
import testimonials from "@/data/testimonials.json";

export default function Comments() {
    return (
        <div className={styles.commentsPage}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Customer Comments</h1>
                    <p>What our wonderful guests have to say about us</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.commentsGrid}>
                        {testimonials.map((t, i) => (
                            <div key={i} className={styles.commentCard}>
                                <div className={styles.stars}>
                                    {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                                </div>
                                <p className={styles.comment}>"{t.comment}"</p>
                                <p className={styles.author}>- {t.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.googleReviews}>
                        <h3>More Reviews on Google</h3>
                        <p>We're proud of our community's feedback. Check out more reviews or leave your own on Google!</p>
                        <a href="https://www.google.com/search?q=Papa+Jack%27s+Country+Kitchen+Buford+GA+reviews" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            View Google Reviews
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
