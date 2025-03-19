import styles from './fullscreenimage.module.css'
import {useState, FC, JSX, useRef, useEffect, RefObject} from "react";
import Image from "next/image";
import {PaintingObj} from "@/data/series/Burrowings";

interface FullScreenImageProps {
    image: PaintingObj;
}


export const FullScreenImage: FC<FullScreenImageProps> = ({ image })=>{
    const [isOverlay, setIsOverlay] = useState(false);
    const overlayRef: RefObject<any> = useRef(null);

    const toggleOverlay = () =>{
        if(!isOverlay){
            setIsOverlay(true);
        }
        if(isOverlay){
            setIsOverlay(false);
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (overlayRef && overlayRef.current && !overlayRef.current.contains(event.target)) {
                setIsOverlay(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [overlayRef]);

    return (<div className={styles.container} ref={overlayRef}>
            {isOverlay &&
                <div className={[styles.scrollImagesOverlay, `${isOverlay ? 'active' : null}`].join(" ")}>
                    <h3 className={styles.title}>{image.title}</h3>
                    <h3 className={styles.description}>{image?.size}</h3>
                    <h3>{image?.media}</h3>
                </div>}
            <Image src={image.img}
                   onClick={toggleOverlay}
                   alt=""
                   data-animate={"slideRight"}
                   className={[styles.scrollImages, "animate"].join(" ")}
            />

        </div>

    );
}