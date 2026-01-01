import styles from "./MenuSection.module.css";

interface MenuItem {
    name: string;
    price: string;
    description?: string;
}

interface MenuCategory {
    name: string;
    items: MenuItem[];
    note?: string;
}

interface MenuSectionProps {
    title: string;
    subtitle?: string;
    categories: MenuCategory[];
    addons?: { name: string; price: string }[];
}

const MenuSection = ({ title, subtitle, categories, addons }: MenuSectionProps) => {
    return (
        <section className={styles.menuSection}>
            <div className="container">
                <div className="text-center">
                    <h2 className={styles.title}>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>

                <div className={styles.categoriesGrid}>
                    {categories.map((category, i) => (
                        <div key={i} className={styles.category}>
                            <h3 className={styles.categoryName}>{category.name}</h3>
                            {category.note && <p className={styles.categoryNote}>{category.note}</p>}
                            <ul className={styles.itemList}>
                                {category.items.map((item, j) => (
                                    <li key={j} className={styles.item}>
                                        <div className={styles.itemHeader}>
                                            <span className={styles.itemName}>{item.name}</span>
                                            <span className={styles.itemPrice}>${item.price}</span>
                                        </div>
                                        {item.description && <p className={styles.itemDescription}>{item.description}</p>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {addons && (
                    <div className={styles.addons}>
                        <h3>Add-ons</h3>
                        <div className={styles.addonsGrid}>
                            {addons.map((addon, i) => (
                                <div key={i} className={styles.addon}>
                                    <span>{addon.name}</span>
                                    <span>+${addon.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={styles.disclaimer}>
                    <p>* Food safety disclaimer: Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</p>
                    <p>* Pricing subject to change without notice.</p>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
