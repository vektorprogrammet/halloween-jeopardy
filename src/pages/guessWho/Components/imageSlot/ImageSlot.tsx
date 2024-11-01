import { ReactNode, useState } from 'react';
import './ImageSlot.css'
import ImageCover from '../imageCover/ImageCover'
import ImageItem from '../imageItem/ImageItem'

interface ImageSlotProps {
    coverText: string;
    image: ReactNode;
}

export default function Slot({ coverText, image }: ImageSlotProps) {

    const [isChallengeVisible, setChallengeVisible] = useState<boolean>(() => {
        // const cache = window.localStorage.getItem(id);
        // return cache === "true";
        return false
    })

    // useEffect(() => {
    //     window.localStorage.setItem(`${id}`, String(isChallengeVisible))
    // }, [isChallengeVisible, id]);
    
    const hideCover = () => {
        setChallengeVisible(!isChallengeVisible);
    };

    return (
        <div className="imageslot-container" onClick={hideCover}>
            {!isChallengeVisible && <ImageCover text={coverText}/>}
            {isChallengeVisible && <ImageItem tag={image} />}
        </div>
    )
}