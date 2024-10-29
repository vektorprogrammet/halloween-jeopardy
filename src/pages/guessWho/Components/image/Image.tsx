import './Image.css'
import ImageSlot from '../imageSlot/ImageSlot'

interface ImageProps {
    image: string
    index: string
}

export default function Image({image, index}:ImageProps){
    return (
        <>
        <div className="category-container">
            <h2>Image {index}</h2>
            
            <div className="category-slots">
                <ImageSlot coverText={index} image={image}/>
            </div>
        </div>
        </>
    )
}