import { ReactNode } from 'react';

interface ChallengeProps {
    tag: ReactNode;
}

export default function Challenge({ tag }: ChallengeProps) {

    return (
        <>
            <div className="challenge-container">
                {tag}
            </div>
        </>
    )
}