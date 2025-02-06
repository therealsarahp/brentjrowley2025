import styles from './fullscreenimage.module.css'
import {useState, FC, JSX} from "react";
import Image from "next/image";
import {PaintingObj} from "@/data/series/Burrowings";

interface FullScreenImageProps {
    image: PaintingObj;
}


export const FullScreenImage: FC<FullScreenImageProps> = ({ image })=>{
    const [isOverlay, setIsOverlay] = useState(false);

    console.log(image);
    const toggleOverlay = () =>{
        if(!isOverlay){
            setIsOverlay(true);
        }
        if(isOverlay){
            setIsOverlay(false);
        }
    }

    return (<div>
            <Image src={image.img}
                   onClick={toggleOverlay}
                   alt=""
                   data-animate={"slideRight"}
                   className={[styles.scrollImages, "animate"].join(" ")}
            />
            {isOverlay &&
                <div className={[styles.scrollImagesOverlay, `${isOverlay ? 'active' : null}`].join(" ")}>
                    <h3 className={styles.title}>{image.title}</h3>
                    {/*<p className={styles.description}>{image.writing}</p>*/}
                </div>}
        </div>

    );
}