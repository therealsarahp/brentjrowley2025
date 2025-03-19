'use client';

import styles from './series.module.css';
import {FullScreenImage} from "@/components/FullScreenImage";
import {useParams} from "next/navigation";
import {series} from "@/data/series";
import {Metadata} from "next";

// export const metadata: Metadata = {
//     title: "Series"
// }

export default function SeriesPage(){
    // const [isOverlay, setIsOverlay] = useState(false);
    const seriesName = useParams()

    const seriesToUse = series.find((x)=>x.url === seriesName.series);

    // const toggleOverlay = (e) =>{
    //     if(!isOverlay){
    //         setIsOverlay(true);
    //     }
    //     if(isOverlay){
    //         setIsOverlay(false);
    //     }
    // }
    // console.log("isOverlay", isOverlay);
    // console.log("seriesTOsue", seriesToUse, "seriesName", seriesName.series);
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.container}>
                    {/*<section>*/}
                    {/*    <div className={styles.seriesDescription}>*/}
                    {/*        <h1>{seriesToUse && seriesToUse.title}</h1>*/}
                    {/*        /!*<p>{seriesToUse && seriesToUse.description}</p>*!/*/}
                    {/*    </div>*/}
                    {/*</section>*/}

                    <section id={styles.sectionPin}>
                    <div className={styles.pinWrapSticky}>
                        <div className={styles.pinWrap}>
                            <div className={styles.seriesDescription}>
                                <h1>{seriesToUse && seriesToUse.title}</h1>
                                <h2>{seriesToUse && seriesToUse.year}</h2>
                            </div>
                            {seriesToUse
                                && seriesToUse.images
                                    .map((imageObj, i) => {
                                        // <FullScreenImage image={imageObj} />
                                        return (<span key={i}><FullScreenImage image={imageObj}/></span>)
                                    })}
                        </div>
                    </div>
                    </section>
                </div>

            </main>
        </div>
    )
}