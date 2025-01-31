'use client';

import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import styles from './series.module.css';
import Image from "next/image";
import leaveBlood from "../../../../public/images/leave-blood.jpg";
import FullScreenImage from "@/components/FullScreenImage";
import {useRef, useState} from "react";

export default function SeriesPage(){
    const [isOverlay, setIsOverlay] = useState(false);

    const toggleOverlay = (e) =>{
        if(!isOverlay){
            setIsOverlay(true);
        }
        if(isOverlay){
            setIsOverlay(false);
        }
    }
    console.log("isOverlay", isOverlay);
    return (
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
                                {/*<FullScreenImage/>*/}
                                <FullScreenImage/>
                                <FullScreenImage/>
                                <FullScreenImage/>
                                <FullScreenImage/>
                                <FullScreenImage/>
                                <FullScreenImage/>
                                <FullScreenImage/>
                                <FullScreenImage/>
                                <FullScreenImage/>
                                <FullScreenImage/>
                                {/*<div >*/}
                                {/*{isOverlay &&*/}
                                {/*    <div className={styles.scrollImagesOverlay}>*/}
                                {/*        <h3>Painting Title</h3>*/}
                                {/*        <p>Painting description lorem ipsum dolor sit amet, consectetur adipiscing elit,*/}
                                {/*            sed do eiusmod tempor*/}
                                {/*            incididunt ut labore et dolore magna aliqua.</p>*/}
                                {/*    </div>}*/}
                                {/*<Image src={leaveBlood}*/}
                                {/*       onClick={toggleOverlay}*/}
                                {/*       alt=""*/}
                                {/*       className={styles.scrollImages}*/}
                                {/*/>*/}

                                {/*</div>*/}

                                {/*<Image src={leaveBlood}*/}
                                {/*       alt=""*/}
                                {/*       className={styles.scrollImages}/>*/}
                                {/*<Image src={leaveBlood}*/}
                                {/*       alt=""*/}
                                {/*       className={styles.scrollImages}/>*/}
                                {/*<Image src={leaveBlood}*/}
                                {/*       alt=""*/}
                                {/*       className={styles.scrollImages}/>*/}
                                {/*<Image src={leaveBlood}*/}
                                {/*       alt=""*/}
                                {/*       className={styles.scrollImages}/>*/}
                                {/*<Image src={leaveBlood}*/}
                                {/*       alt=""*/}
                                {/*       className={styles.scrollImages}/>*/}
                                {/*<Image src={leaveBlood}*/}
                                {/*       alt=""*/}
                                {/*       className={styles.scrollImages}/>*/}
                                {/*<Image src={leaveBlood}*/}
                                {/*       alt=""*/}
                                {/*       className={styles.scrollImages}/>*/}
                                {/*<Image src={leaveBlood}*/}
                                {/*       // onClick={toggleFullscreen}*/}
                                {/*       alt=""*/}
                                {/*       className={styles.scrollImages}/>*/}
                            </div>
                        </div>
                    </section>
                </div>

            </main>
        </div>
    )
}