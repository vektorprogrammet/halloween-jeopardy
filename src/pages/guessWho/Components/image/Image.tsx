import { ReactNode } from 'react'
import './Image.css'
import ImageSlot from '../imageSlot/ImageSlot'

interface ImageProps {
    image: ReactNode
    index: string
}

export default function Image({image, index}:ImageProps){
    return (
        <>
        <div className="category-container">
            <h2>Image {index}</h2>
            
            <div className="imagecategory-slots">
                <ImageSlot coverText={index} image={image}/>
            </div>
        </div>
        </>
    )
}