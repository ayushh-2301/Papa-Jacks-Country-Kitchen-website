"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    Papa Jack’s
                </Link>

                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
                    <ul className={styles.navList}>
                        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
                        <li className={styles.dropdown}>
                            <span>Menu</span>
                            <ul className={styles.dropdownContent}>
                                <li><Link href="/menu/breakfast" onClick={() => setIsOpen(false)}>Breakfast</Link></li>
                                <li><Link href="/menu/lunch" onClick={() => setIsOpen(false)}>Lunch</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/catering" onClick={() => setIsOpen(false)}>Catering</Link></li>
                        <li><Link href="/comments" onClick={() => setIsOpen(false)}>Comments</Link></li>
                        <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>

                <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle Menu">
                    <span className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
