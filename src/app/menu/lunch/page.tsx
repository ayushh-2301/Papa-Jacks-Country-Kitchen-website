import MenuSection from "@/components/MenuSection";
import menu from "../../../data/menu.json";
import styles from "../menu.module.css";

export default function LunchMenu() {
    return (
        <div className={styles.menuPage}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Lunch Menu</h1>
                    <p>Delicious southern comfort food for your midday meal</p>
                </div>
            </section>

            <MenuSection
                title="Lunch & Dinner"
                subtitle="Served Tuesday - Friday 11:00 AM - 2:00 PM | Friday Dinner 4:30 PM - 8:00 PM"
                categories={menu.lunch.categories}
            />
        </div>
    );
}
