import './ImageCover.css'

interface ImageCoverProps {
    text: string;
}

export default function ImageCover({ text }: ImageCoverProps) {

    return (
        <div className="imagecover-container">
            <h2 className='imagecover-text'>{text}</h2>
        </div>
    )
}