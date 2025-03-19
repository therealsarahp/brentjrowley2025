import Image from "next/image";
import styles from './seriestiles.module.css'
import {SeriesObj} from "@/data/series/Burrowings";

interface SeriesTilesProps {
    series: SeriesObj;
    key: number;
}
export default function SeriesTiles(props: SeriesTilesProps) {
   const {series, } = props;
    return(
        // <div className={styles.tile}>
            <li className={styles.tile}>
                <a href={`/work/${series.url}`} className={styles.title}>
                    <span className={styles.titleText}>{series.title}</span>
                    <Image src={series.images[0].img}
                           alt={""}
                           // responsive={"true"}
                           // objectFit={"contain"}
                           // layout={"responsive"}
                           className={styles.image}
                    />
                </a>
            </li>

        //     <div>
        //         <h1 className={styles.title}>
        //             Daphne
        //         </h1>
        //     </div>
        //
        // </div>

    )
}