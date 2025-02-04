import Image from "next/image";
import Daphne from "../../public/images/Daphne.jpg"
import styles from './seriestiles.module.css'

interface SeriesTilesInterface {

};

export default function SeriesTiles(props: SeriesTilesInterface) {
    return(
        // <div className={styles.tile}>
            <li className={styles.tile}>
                <a href="/gallery/series" className={styles.title}>
                    <span className={styles.titleText}>Title</span>
                    <Image src={Daphne}
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