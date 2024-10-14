interface ChallengeProps {
    text: string;
}

export default function Challenge({ text }: ChallengeProps) {

    return (
        <>
            <div className="challenge-container">
                <h3>{text}</h3>
            </div>
        </>
    )
}