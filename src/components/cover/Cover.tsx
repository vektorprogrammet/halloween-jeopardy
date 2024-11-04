import './Cover.css'

interface CoverProps {
    text: string;
}

export default function Cover({ text }: CoverProps) {

    return (
        <div className="cover-container">
            <h3>{text}</h3>
        </div>
    )
}