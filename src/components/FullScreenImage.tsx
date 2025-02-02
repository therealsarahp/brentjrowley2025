import styles from './fullscreenimage.module.css'
import {useState} from "react";
import Image from "next/image";
import leaveBlood from "../../public/images/leave-blood.jpg";

export default function FullScreenImage() {
    const [isOverlay, setIsOverlay] = useState(false);

    const toggleOverlay = (e) =>{
        if(!isOverlay){
            setIsOverlay(true);
        }
        if(isOverlay){
            setIsOverlay(false);
        }
    }

    return (<div>
            <Image src={leaveBlood}
                   onClick={toggleOverlay}
                   alt=""
                   data-animate={"slideRight"}
                   className={[styles.scrollImages, "animate"].join(" ")}
            />
            {isOverlay &&
                <div className={[styles.scrollImagesOverlay, "animate", `${isOverlay ? 'active' : null}`].join(" ")}>
                    <h3 className={styles.title}>Painting Title</h3>
                    <p className={styles.description}>Painting description lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                </div>}
        </div>

    );
}