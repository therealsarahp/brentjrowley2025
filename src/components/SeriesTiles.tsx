import Image, {StaticImageData} from "next/image";
import Daphne from "../../public/images/Daphne.jpg"
import styles from './seriestiles.module.css'
import {SeriesObj} from "@/data/series/Burrowings";

interface SeriesTilesInterface {
    image: StaticImageData;
    title: string;
    description: string | null;
    size: string | null;
    media: string | null;
};

export default function SeriesTiles(props: SeriesObj) {
    return(
        // <div className={styles.tile}>
            <li className={styles.tile}>
                <a href={`/gallery/${props.url}`} className={styles.title}>
                    <span className={styles.titleText}>{props.title}</span>
                    <Image src={props.images[0].img}
                           alt={"daphne"}
                           responsive={"true"}
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