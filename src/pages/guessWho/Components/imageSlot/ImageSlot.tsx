import { ReactNode, useState } from 'react';
import './ImageSlot.css'
import ImageCover from '../imageCover/ImageCover'
import ImageItem from '../imageItem/ImageItem'

interface ImageSlotProps {
    imageCoverText: string;
    image: ReactNode;
}

export default function ImageSlot({ imageCoverText, image }: ImageSlotProps) {

    const [isImageVisible, setImageVisible] = useState<boolean>(() => {
        return false
    })

    const hideImageCover = () => {
        setImageVisible(!isImageVisible);
    };

    return (
        <div className="imageslot-container" onClick={hideImageCover}>
            {!isImageVisible && <ImageCover text={imageCoverText} />}
            {isImageVisible && <ImageItem tag={image} />}
        </div>
    )
}