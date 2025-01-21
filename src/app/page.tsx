'use client';
import Image from "next/image";
import styles from "./page.module.css";
import globalStyles from "./globals.css";
import { useScroll } from "./scroll";
import Daphne from '../../public/images/Daphne.jpg'

export default function Home() {
    useScroll();
  return (
    <div className={styles.page}>
        <main className={styles.main}>
            <div className={styles.fullScreenImageContainer}>
                <div className={styles.fullScreenImage}>
                    <h1 className={[styles.artistName, "animate"].join(" ")}
                        data-animate={"fadeIn"}> BRENT J ROWLEY</h1>
                </div>
            </div>
            <div className={styles.fullScreenImageContainer}>
                <div className={styles.fullScreenImage}>
                    {/*<Image*/}
                    {/*    placeholder="blur"*/}
                    {/*    quality={50}*/}
                    {/*    responsive={"true"}*/}
                    {/*    sizes="100vw"*/}
                    {/*    style={{*/}
                    {/*        width: "100%",*/}
                    {/*        height: "auto",*/}
                    {/*    }}*/}
                    {/*    src={Daphne}*/}
                    {/*    className={"hideOnDesktop"}*/}
                    {/*    // src={'/images/Daphne.jpg'}*/}
                    {/*    // width={'3912'}*/}
                    {/*    // height={'2920'}*/}
                    {/*    alt={"colorful abstract painting of a couple embracing"}*/}
                    {/*/>*/}
                    <Image
                        placeholder="blur"
                        quality={100}
                        // responsive={"true"}
                        sizes={"(max-width: 64rem) 25vw, 90vh"}
                        // style={{
                        //     width: "100%",
                        //     height: "100%",
                        // }}
                        src={Daphne}
                        // src={'/images/Daphne.jpg'}
                        // width={'3912'}
                        // height={'2920'}
                        alt={"colorful abstract painting of a couple embracing"}
                    />

                </div>
            </div>
            <div className={styles.fullScreenImageContainer}>
                <div className={styles.fullScreenImage}>
                    IMAGE TWO
                </div>
            </div>
            <div className={styles.fullScreenImageContainer}>
                <div className={styles.fullScreenImage}>
                    IMAGE THREE
                </div>
            </div>
            <div className={styles.fullScreenImageContainer}>
                <div className={styles.fullScreenImage}>
                    IMAGE FOUR
                </div>
            </div>
        </main>
        <footer className={styles.footer}>

        </footer>
    </div>
  );
}
