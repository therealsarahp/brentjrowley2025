import styles from './horizontalscroll.module.css';
import Image from "next/image";
import leaveBlood from '../../public/images/leave-blood.jpg';


export default function HorizontalScrollSection(){
    return(
        // <div>
        //     <div className={styles.warning}>
        //         <p>⚠️ Your browser does not support Scroll-driven Animations. Please use Chrome 115 or newer.</p>
        //     </div>

            <div className={styles.container}>

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
        // </div>
    )
}