import MenuSection from "@/components/MenuSection";
import menu from "../../../data/menu.json";
import styles from "../menu.module.css";

export default function BreakfastMenu() {
    return (
        <div className={styles.menuPage}>
            <section className={styles.pageHeader}>
                <div className="container">
                    <h1>Breakfast Menu</h1>
                    <p>Start your day with a hearty southern breakfast</p>
                </div>
            </section>

            <MenuSection
                title="Breakfast Favorites"
                subtitle="Served Tuesday - Friday 7:00 AM - 10:30 AM | Saturday 7:00 AM - 11:30 AM | Sunday 8:00 AM - 2:00 PM"
                categories={menu.breakfast.categories}
                addons={menu.breakfast.addons}
            />
        </div>
    );
}
