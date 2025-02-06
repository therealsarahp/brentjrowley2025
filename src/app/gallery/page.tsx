import styles from './gallery.module.css';
import SeriesTiles from "@/components/SeriesTiles";
import {series} from "@/data/series";

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
                                {series && series[0]
                                    ? <SeriesTiles url={series[0].url}
                                                    title={series[0].title}
                                                    description={series[0].description}
                                                    images={series[0].images}/>
                                    : <h2> WTF</h2>
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