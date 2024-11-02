import './ImageCover.css'

interface CoverProps {
    text: string;
}

export default function Cover({ text }: CoverProps) {

    return (
        <>
            <div className="imagecover-container">
                <h2 className='cover-text'>{text}</h2>
            </div>
        </>
    )
}