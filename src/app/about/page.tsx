import styles from './about.module.css'
import Image from "next/image";
import ArtistPhoto from '../../../public/images/artistPhoto.jpeg';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "ABOUT",
};

export default function About(){
    return(
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.sideHeader}>
                    <div className={styles.sideHeaderContainer}>
                        <h1>
                            ABOUT
                        </h1>
                        <div className={styles.aboutList}>
                            {/*<ul>*/}
                            {/*    <li>*/}
                            {/*        SHOP PRINTS*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        FIND GALLERY*/}
                            {/*    </li>*/}
                            {/*    <li>*/}
                            {/*        UPCOMING*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>

                </section>
                <section className={styles.right}>
                    <div className={styles.artistPhotoContainer}>
                        <Image src={ArtistPhoto}
                               className={styles.artistPhoto}
                               alt={"Artist standing before his painting on a wall."}
                        />
                    </div>
                    <div className={styles.artistStatement}>
                        {/*<h3>*/}
                        {/*    ARIST STATEMENT*/}
                        {/*</h3>*/}
                        {/*<p>*/}
                        {/*    This is where Brent can put his beliefs about art, if the idea of doing that doesn't make*/}
                        {/*    him feel like crawling into a hole.*/}
                        {/*</p>*/}
                    </div>
                    <div className={styles.artistBio}>
                        <h3>
                            ARTIST BIO
                        </h3>
                        <p>
                            Brent Rowley is an artist living and working in the Arkansas River Valley. He completed his
                            B.A. in Philosophy at Hendrix College and recieved his M.A. in TESOL from Arkansas Tech University.
                            He spent the subsequent years pursuing art and experience
                            while teaching English abroad. Since returning to the United States in 2019,
                            Brent has pursued art full time. When he's not working in his studio, he can be found
                            walking barefoot in the great Arkansas outdoors, reading philosophy, and talking with his hands.
                            <br/>
                        </p>
                        <p>
                            Brent's work has been exhibited across the country. Keep up with upcoming exhibitions, new
                            paintings, and more by <a href={'/contact/#subscribe'}>subscribing to his newsletter.</a>
                        </p>
                    </div>
                    <div>
                        <h3>
                            CV
                        </h3>
                        <p>
                            2024 - Diving Into The Wreck, New Artist Introduction Show, Boswell Mourot, Little Rock, AR
                            <br/>
                            2023 - Juror's Choice: The Engage Award, 7th Annual Neighbors, An Art Show, Conway, Arkansas
                            <br/>
                            2023 - Untitled, Untidy, Unfinished: A group art exhibition of works by Ashley Kinsey, Zeno
                            Schaefer, and Brent Rowley, River Valley Art Center, Russellville, AR
                            <br/>
                            2023 - Let Everything Happen To You : Solo exhibit, River Valley Art Center, Russellville,
                            AR
                            <br/>
                            2022 - Quiet Power: Recent work by Karen Kurka Jensen and Brent Rowley, Bisignano Art
                            Gallery, University of Dubuque, Dubuque, IA
                            <br/>
                            2022 - 7th Year Anniversary Juried Exhibition, Local Color Studio Gallery, Fayetteville, AR
                            <br/>
                            2022 -The Light of the Body is the Eye, Emerging Artist Series Solo Exhibition, The In Art
                            Gallery, online
                            <br/>
                            2021- Mid-Southern Watercolorists 29th Annual Member Open Exhibition
                            <br/>
                            2021 - Sarasvati Artist Residency
                            <br/>
                            2020 - Selected for Mid-Southern Watercolorists 51st Annual Exhibition
                            <br/>
                            2020 - Honorable Mention - South Arkansas Art Center Under Quarantine Art Competition
                        </p>
                    </div>
                </section>
            </main>

        </div>
    )
}