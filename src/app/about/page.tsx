import styles from './about.module.css'

export default function About(){
    return(
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.sideHeader}>
                    <h1>
                        ABOUT
                    </h1>
                    <div className={styles.aboutList}>
                        <ul>
                            <li>
                                SHOP PRINTS
                            </li>
                            <li>
                                FIND GALLERY
                            </li>
                            <li>
                                UPCOMING
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.right}>
                    <div className={styles.artistPhoto}>
                        <h3>
                            PHOTO OF THE ARTIST AS A COOL GUY
                        </h3>
                        <p>
                            ARTIST PHOTO
                        </p>
                    </div>
                    <div className={styles.artistStatement}>
                        <h3>
                            ARIST STATEMENT
                        </h3>
                        <p>
                            This is where Brent can put his beliefs about art, if the idea of doing that doesn't make
                            him feel like crawling into a hole.
                        </p>
                    </div>
                    <div className={styles.artistBio}>
                        <h3>
                            ARTIST BIO
                        </h3>
                        <p>
                            Brent Rowley is an artist living and working in the Arkansas River Valley. He completed his
                            B.A. in Philosophy at Hendrix College and spent the subsequent years pursuing art, experience,
                            and women while teaching English and living abroad. He returned to the United States in 2019,
                            returning to his hometown to pursue art full time. When he's not working, he can be found
                            walking barefoot in the great Arkansas outdoors, reading philosophy, and talking with his hands.
                            <br/>
                        </p>
                        <p>
                            Brent's work has been exhibited across the country. Keep up with upcoming exhibitions, new
                            paintings, and more by subscribing to his newsletter. Contact the gallery for any inquiries on currently available
                            original paintings.
                        </p>
                    </div>
                    <div>
                        <h3>
                            CV
                        </h3>
                    </div>
                </section>
            </main>

        </div>
    )
}