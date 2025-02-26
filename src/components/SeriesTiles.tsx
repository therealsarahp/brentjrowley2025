import Image from "next/image";
import styles from './seriestiles.module.css'
import {SeriesObj} from "@/data/series/Burrowings";


export default function SeriesTiles(props: SeriesObj) {
    return(
        // <div className={styles.tile}>
            <li className={styles.tile}>
                <a href={`/work/${props.url}`} className={styles.title}>
                    <span className={styles.titleText}>{props.title}</span>
                    <Image src={props.images[0].img}
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