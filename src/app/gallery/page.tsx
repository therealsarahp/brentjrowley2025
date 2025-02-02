import styles from './gallery.module.css';
import SeriesTiles from "@/components/SeriesTiles";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";

export default function Gallery(){
    return(
        <div className={styles.page}>
            <main className={styles.main}>
                {/*<section>*/}
                {/*    <h1>*/}
                {/*        Current Series*/}
                {/*    </h1>*/}
                {/*</section>*/}
                <section className={styles.seriesTilesContainer}>
                            <ul className={styles.tileGroup}>

                                <SeriesTiles></SeriesTiles>
                                <SeriesTiles/>
                                <SeriesTiles/>
                                <SeriesTiles/>

                            </ul>
                </section>
                {/*<section>*/}
                {/*    <div>*/}
                {/*        <h1>*/}
                {/*            Footer*/}
                {/*        </h1>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <HorizontalScrollSection/>*/}
                {/*</section>*/}
            </main>

        </div>
    )
}