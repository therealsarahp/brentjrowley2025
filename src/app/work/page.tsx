import styles from './work.module.css';
import SeriesTiles from "@/components/SeriesTiles";
import {series} from "@/data/series";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "WORK",
};

export default function Work(){
    return(
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.header}>
                    <h1>
                        Current Series
                    </h1>
                </section>
                <section className={styles.seriesTilesContainer}>
                <ul className={styles.tileGroup}>
                        {series && series.map((item, i) => {
                            return (<SeriesTiles key={i}
                                                 url={item.url}
                                                 title={item.title}
                                                 description={item.description}
                                                 images={item.images}/>)
                        })
                        }
                        {/*{series && series.forEach((item:SeriesObj)=>{*/}
                        {/*   return(*/}
                        {/*       <SeriesTiles title={item.title} description={item.description} images={item.images}/>*/}
                        {/*   )*/}
                        {/*})}*/}

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