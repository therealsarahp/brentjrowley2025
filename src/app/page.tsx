'use client';
import styles from "./page.module.css";
import { useScroll } from "./scroll";

export default function Home() {
    useScroll();
  return (
    <div className={styles.page}>
        <main className={styles.main}>
                    <h1 className={[styles.artistName, "animate"].join(" ")}
                        data-animate={"fadeIn"}> BRENT J ROWLEY</h1>
        </main>
        {/*<footer className={styles.footer}>*/}

        {/*</footer>*/}
    </div>
  );
}
