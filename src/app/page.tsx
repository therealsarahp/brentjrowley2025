import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.artistName}>
          <h1> BRENT J ROWLEY</h1>
        </section>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
