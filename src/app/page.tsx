'use client';
import Image from "next/image";
import styles from "./page.module.css";
import globalStyles from "./globals.css";
import { useScroll } from "./scroll";
import Daphne from '../../public/images/Daphne.jpg'
import susanna_eyes from '../../public/images/susanna_eyes.jpg'
import leave_blood from '../../public/images/leave-blood.jpg'
import yellow_christ from '../../public/images/yellow_christ.jpg'

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
                        // sizes={"(max-width: 48rem) 50vw, 100vh"}
                        style={{
                            height: "100%",
                            width: "auto",
                        }}
                        // objectFit="contain"
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
                    <Image
                        placeholder="blur"
                        quality={50}
                        responsive={"true"}
                        // sizes="100vw"
                        // style={{
                        //     width: "100%",
                        //     // height: "100",
                        // }}
                        style={{
                            height: "100%",
                            width: "auto",
                        }}
                        // objectFit="contain"
                        src={susanna_eyes}
                        alt={"a woman bathing on the right side of image with a multitude of hands and eyes grasping for her"}
                    />
                </div>
            </div>
            <div className={styles.fullScreenImageContainer}>
                <div className={styles.fullScreenImage}>
                    <Image
                        placeholder="blur"
                        quality={50}
                        responsive={"true"}
                        style={{
                            height: "100%",
                            width: "auto",
                        }}
                        // objectFit="contain"
                        src={leave_blood}
                        alt={"an abstract painting"}
                    />
                </div>
            </div>
            <div className={styles.fullScreenImageContainer}>
                <div className={styles.fullScreenImage}>
                    <Image
                        placeholder="blur"
                        // quality={50}
                        responsive={"true"}
                        // objectFit={"contain"}
                        // layout={"responsive"}
                        style={{
                            height: "100%",
                            width: "auto",
                        }}
                        src={yellow_christ}
                        alt={"an abstract painting"}
                    />
                </div>
            </div>
        </main>
        {/*<footer className={styles.footer}>*/}

        {/*</footer>*/}
    </div>
  );
}
