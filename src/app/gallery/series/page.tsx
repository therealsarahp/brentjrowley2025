import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import styles from './series.module.css';
import Image from "next/image";
import leaveBlood from "../../../../public/images/leave-blood.jpg";

export default function SeriesPage(){
    return (
        // <div className={styles.page}>
        //     <main className={styles.main}>
        //         <section>
        //             <HorizontalScrollSection/>
        //         </section>
        //     </main>
        // </div>
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.container}>
                    <section>
                        <div className={styles.seriesDescription}>
                            <h1> Series Name</h1>
                            <p> THIs will be some description about the series-when where how etc etc etc</p>
                        </div>
                    </section>

                    <section id={styles.sectionPin}>
                    <div className={styles.pinWrapSticky}>
                            <div className={styles.pinWrap}>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</h2>
                                <Image src={leaveBlood}
                                       alt=""
                                       className={styles.scrollImages}
                                />
                                <Image src={leaveBlood}
                                       alt=""
                                       className={styles.scrollImages}/>
                                <Image src={leaveBlood}
                                       alt=""
                                       className={styles.scrollImages}/>
                                <Image src={leaveBlood}
                                       alt=""
                                       className={styles.scrollImages}/>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}