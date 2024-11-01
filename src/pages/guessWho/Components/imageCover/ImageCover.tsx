import './ImageCover.css'

interface CoverProps {
    text: string;
}

export default function Cover({ text }: CoverProps) {

    return (
        <>
            <div className="imagecover-container">
                <h3>{text}</h3>
            </div>
        </>
    )
}