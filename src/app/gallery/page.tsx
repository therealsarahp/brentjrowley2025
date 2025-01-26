import styles from './gallery.module.css';
import SeriesTiles from "@/components/SeriesTiles";

export default function Gallery(){
    return(
        <div className={styles.page}>
            <main className={styles.main}>
                <section>
                    <h1>
                        Current Series
                    </h1>
                </section>
                <section className={styles.seriesTilesContainer}>
                    <SeriesTiles></SeriesTiles>
                    <SeriesTiles/>
                    <SeriesTiles/>
                    <SeriesTiles/>
                </section>
            </main>

        </div>
    )
}